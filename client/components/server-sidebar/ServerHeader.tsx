"use client";

import React from "react";
import { MemberRole, Server } from "@prisma/client";

// This is the custom type that we created
import { ServerWithMembersAndChannels } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useModal } from "@/hooks/use-modal";

type ServerHeaderProps = {
  server: ServerWithMembersAndChannels;
  role: MemberRole | undefined;
};

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const { onOpen } = useModal();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  undefined;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none" asChild>
          <button className="w-full font-semibold px-3 h-12 flex items-center border-neutral-200 dark:border-neutral-800 hover:bg-zinc-700 dark:hover:bg-zinc-700/50 transition">
            {server.name}
            <ChevronDown className="h-5 w-5 ml-auto" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          {isModerator && (
            <DropdownMenuItem className="" onClick={() => onOpen("invite")}>
              Invite People
            </DropdownMenuItem>
          )}

          {isAdmin && (
            <DropdownMenuItem className="" onClick={() => onOpen("settings")}>
              Server Settings
            </DropdownMenuItem>
          )}

          {isAdmin && (
            <DropdownMenuItem
              className=""
              onClick={() => onOpen("manageMembers")}
            >
              Manage Members
            </DropdownMenuItem>
          )}

          {isAdmin && (
            <DropdownMenuItem
              className="dark:hover:text-rose-500"
              onClick={() => onOpen("deleteServer")}
            >
              Delete Server
            </DropdownMenuItem>
          )}

          {!isAdmin && (
            <DropdownMenuItem className="">Leave Server</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ServerHeader;
