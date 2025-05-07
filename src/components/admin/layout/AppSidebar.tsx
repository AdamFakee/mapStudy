"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SidebarWidget from "./SidebarWidget";
import { useSidebar } from "@/contexts/SidebarContext";

type NavItem = {
  name: string;
  path: string;
};

const NavMenu: NavItem[] = [
  {
    name: 'dash-board',
    path: '/admin'
  },
  {
    name: 'course',
    path: '/admin/courses'
  },
  {
    name: 'subject',
    path: '/admin/subject'
  },
  {
    name: 'class',
    path: '/admin/class'
  },
]




const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const navigation = useRouter();
  const handleNavigation = (routeName: string) => {
    navigation.push(routeName);
  }
  const renderMenuItems = (
    navItems: NavItem[],
  ) => (
    <ul className="flex flex-col gap-1">
      {navItems.map((nav) => (
        <li key={nav.name} className="hover:bg-slate-400 flex py-1 px-2 rounded-md" onClick={() => handleNavigation(nav.path)}>
          {nav.name}
        </li>
      ))}
    </ul>
  );


  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-[#fcfcfc] text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="https://react-svgr.com/static/9821145c2a475ef00d04d74d801eae08/logo-nav-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="https://react-svgr.com/static/9821145c2a475ef00d04d74d801eae08/logo-nav-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="https://react-svgr.com/static/9821145c2a475ef00d04d74d801eae08/logo-nav-dark.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      {renderMenuItems(NavMenu)}
    </aside>
  );
};

export default AppSidebar;
