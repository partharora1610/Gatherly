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

const ManageMembersModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "manageMembers";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8 px-6"></DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Manage Server Memeber
        </DialogTitle>
        <DialogDescription className="text-center text-zinc-500">
          Invite your friends and hang out virtually with them at Gatherly
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ManageMembersModal;
