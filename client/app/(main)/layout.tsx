import NavigationSidebar from "@/components/navigation/NavigationSidebar";
import React from "react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full flex-col w-[72px] fixed z-30 inset-y-0">
        {/* This is the Navigation Sidebar */}
        <NavigationSidebar />
      </div>

      <main className="md:pl-[72px]  h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
