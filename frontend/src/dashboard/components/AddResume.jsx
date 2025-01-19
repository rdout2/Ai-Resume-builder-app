import React, { useState } from "react"; // Assurez-vous d'importer useState
import { Loader2Icon, SquarePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { data } from "react-router";
import { title } from "process";
import GlobalApi from "../../../service/GlobalApi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const user = useUser();
  const [loading, setLoading] = useState(false);

  const onCreate = () => {
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
    GlobalApi.createResume(data).then((res) => {
      console.log(res);
      if(res){
        setOpenDialog(false);
      }
    },(error)=>{
        setLoading(false);
    });
  };
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[250px] hover:scale-105 transition-all hover:shadow-lg cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <SquarePlus />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create you resume</DialogTitle>
            <DialogDescription>
              <p>Add title for your new resume</p>
              <Input
                className="mt-2"
                placeholder="Ex.Full Stack resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button disabled={!resumeTitle} onClick={() => onCreate()}>
                {loading ? <Loader2Icon  className="animate-spin"/> : "Create"}
             
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
