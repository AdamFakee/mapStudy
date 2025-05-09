"use client";

import AppHeader from "@/components/admin/layout/AppHeader";
import AppSidebar from "@/components/admin/layout/AppSidebar";
import Backdrop from "@/components/admin/layout/Backdrop";
import { useAuthAdminContext } from "@/contexts/AuthAdminContext";
import { useSidebar } from "@/contexts/SidebarContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = useRouter();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  const { user } = useAuthAdminContext();

  // if(!user?.isLogin) {
  //   return navigation.replace('/admin/auth/login');
  // }

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}