import React, { useState } from "react";
import { Loader2, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import GlobalApi from "../../../service/GlobalApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    if (!resumeTitle.trim()) return;
    
    setLoading(true);
    const uuid = uuidv4();
    
    const data = {
      data: {
        title: resumeTitle,
        resumeid: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    try {
      const response = await GlobalApi.createResume(data);
      if (response) {
        setOpenDialog(false);
        setResumeTitle("");
        // Navigate to edit the new resume
        navigate(`/dashboard/resume/${uuid}/edit`);
      }
    } catch (error) {
      console.error("Error creating resume:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
    setResumeTitle("");
  };

  return (
    <div>
      <div
        className="group p-14 py-24 border-2 items-center flex flex-col justify-center bg-gradient-to-br from-secondary/50 to-secondary rounded-xl h-[280px] w-[220px] hover:scale-[1.02] transition-all duration-300 hover:shadow-xl cursor-pointer border-dashed border-muted-foreground/30 hover:border-primary/50"
        onClick={() => setOpenDialog(true)}
      >
        <PlusCircle className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        <p className="mt-4 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          Create New Resume
        </p>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Create New Resume</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Give your resume a title to get started
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <Input
              placeholder="e.g. Full Stack Developer Resume"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && resumeTitle && onCreate()}
              className="h-11"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              variant="outline" 
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button 
              disabled={!resumeTitle.trim() || loading} 
              onClick={onCreate}
              className="min-w-[100px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
