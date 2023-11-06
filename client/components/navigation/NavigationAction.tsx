"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip } from "@/components/ui/tooltip";
import { Plus, PlusIcon } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal";

const NavigationAction = () => {
  const { onOpen, onClose } = useModal();

  return (
    <ActionTooltip side="right" align="center" label="Add a server">
      <button
        className="group flex items-center"
        onClick={() => onOpen("createServer")}
      >
        <div
          className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden
          items-center justify-center bg-background dark:bg-neutral-700 
          group-hover:bg-emerald-500"
        >
          <PlusIcon
            className="group-hover:text-white transition text-emerald-500"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationAction;
