// import { db } from "@/lib/db";
import React from "react";
import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import ServerHeader from "./ServerHeader";

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
  // getting the profile here
  const profile = await currentProfile();

  if (!profile) {
    return null;
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc",
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.TEXT
  );

  const audioChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );

  const videoChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );

  // Getting all the members other than use here to show them in teh members in  a better way
  const members = server?.members.filter(
    (member) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  // Getting the role of the client usera
  const role = server.members.find(
    (member) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader server={server} role={role} />
    </div>
  );
};

export default ServerSidebar;
