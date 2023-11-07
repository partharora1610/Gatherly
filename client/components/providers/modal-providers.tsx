"use client";
import React, { useEffect, useState } from "react";

import CreateServerModal from "../modals/create-server-modal";
import InvitePeopleModal from "../modals/invite-people-modal";
import ManageMembersModal from "../modals/manage-members-modal";
import ServerSettingsModal from "../modals/server-settings-modal";
import DeleteServerModal from "../modals/delete-server-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InvitePeopleModal />
      <ManageMembersModal />
      <ServerSettingsModal />
      <DeleteServerModal />
    </>
  );
};

export default ModalProvider;
