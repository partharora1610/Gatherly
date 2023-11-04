import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is a protected route mate</p>
      {/* This will be shown after the login is completed */}
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
