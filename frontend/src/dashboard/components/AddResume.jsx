import React, { useState } from 'react'; // Assurez-vous d'importer useState
import { SquarePlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'; 

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false); 

  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[250px] hover:scale-105 transition-all hover:shadow-lg cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <SquarePlus />
      </div>
      <Dialog open={openDialog} > 
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create you resume</DialogTitle>
            <DialogDescription>
                <p>Add title for your new resume</p>
                <Input className='mt-2' placeholder='Ex.Full Stack resume'/>
              
            </DialogDescription>
            <div className='flex justify-end gap-5'>
                <button variant ="ghost" onClick={() => setOpenDialog(false)}>
                    Cancel
                </button>
                <button>
                    Create
                </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
