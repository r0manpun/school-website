"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@/components/Dialog";
import Image from "next/image";


const DialogBox = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    // Set a timer to open the dialog after 2 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
      <div className="text-lg w-96 ">
        <Image
          src="/assets/dialog.jpg"
          width={1440}
          height={1400}
          alt="image"
        />
      </div>
    </Dialog>
  );
};

export default DialogBox;
