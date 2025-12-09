import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import AddResume from "./components/AddResume";
import GlobalApi from "../../service/GlobalApi";
import { FileText, Loader2 } from "lucide-react";

function Dashboard() {
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchResumes();
    }
  }, [user]);

  const fetchResumes = async () => {
    try {
      const response = await GlobalApi.getUserResumes(
        user?.primaryEmailAddress?.emailAddress
      );
      setResumes(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:px-12 lg:px-20 xl:px-32 py-10">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Resumes
        </h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Create AI-powered resumes tailored to your next dream job
        </p>
      </div>

      {/* Resumes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <AddResume />

        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))
        )}
      </div>

      {/* Empty State */}
      {!loading && resumes.length === 0 && (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 mx-auto text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium">No resumes yet</h3>
          <p className="mt-1 text-muted-foreground">
            Click the + button above to create your first AI resume
          </p>
        </div>
      )}
    </div>
  );
}

function ResumeCard({ resume }) {
  const { title, resumeid, updatedAt } = resume;

  return (
    <div className="group relative h-[280px] w-[220px] rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Preview Area */}
      <div className="h-[200px] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <FileText className="w-16 h-16 text-primary/30" />
      </div>

      {/* Info Section */}
      <div className="p-4 border-t">
        <h3 className="font-medium truncate" title={title}>
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {updatedAt
            ? new Date(updatedAt).toLocaleDateString()
            : "Just created"}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-medium">Edit Resume</span>
      </div>
    </div>
  );
}

export default Dashboard;
