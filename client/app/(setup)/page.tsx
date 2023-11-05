import React from "react";
import { initialProfile } from "@/lib/intial-profile";
import { UserButton } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

import IntialModal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // if there are servers then we need to redirect to the server pages
  if (server) {
    return redirect(`/server/${server.id}`);
  }

  // else id need to render create server / join server  page
  return <IntialModal />;
};

export default SetupPage;
