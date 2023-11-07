"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";

const DeleteServerModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "deleteServer";

  // create 2 buttons and then hit the api route here

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8 px-6"></DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Delete Server
        </DialogTitle>
        <DialogDescription className="text-center text-zinc-500">
          You will all your data and this action can't reversed
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteServerModal;
