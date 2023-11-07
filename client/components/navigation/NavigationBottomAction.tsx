import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

const NavigationBottomAction = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <ModeToggle />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavigationBottomAction;
