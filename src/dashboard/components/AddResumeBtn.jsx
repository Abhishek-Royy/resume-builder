import { PlusSquare } from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AddResumeBtn() {
  const [openDialogBox, setopenDialogBox] = useState(false);

  return (
    <div>
      <div
        className="py-24 p-14 border items-center justify-center flex bg-white rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
        onClick={() => {
          setopenDialogBox(true);
        }}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialogBox}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add Title for your new resume</p>
              <Input className="mt-2" placeholder="Ex: Full Stack Developer"/>
            </DialogDescription>
            <div className="w-1/2 flex items-center gap-5">
            <Button variant="outline">Create</Button>
            <Button variant="destructive" onClick={()=>{setopenDialogBox(false)}}>Cancel</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResumeBtn;
