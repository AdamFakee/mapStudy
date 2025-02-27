import Link from "next/link";

// Import các icon bạn cần
import { RiHome9Line } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { PiExamLight } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";

// Định nghĩa kiểu dữ liệu cho menu items
interface NavItem {
  href: string;
  icon: React.ReactNode;
  title: string
}

// Danh sách các menu mặc định
export const defaultNavItems: NavItem[] = [
  { href: "/", icon: <RiHome9Line className="w-6 h-6 text-gray-500" />, title: "Trang chủ" },
  { href: "/courses", icon: <SiCoursera className="w-6 h-6 text-gray-500" />, title: "Khóa học" },
  { href: "/exam", icon: <PiExamLight className="w-6 h-6 text-gray-500" />, title: "Thi Online" },
  { href: "/news", icon: <IoNewspaperOutline className="w-6 h-6 text-gray-500" />, title: "Tin tức" },
];

const NavBar = ({ items = defaultNavItems }: { items?: NavItem[] }) => {
  return (
    <div className="flex mx-auto items-center justify-center gap-2 h-full w-full">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="h-full w-max">
          <div className="h-full px-6 flex items-center">{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export const NavBarMobile = ({ items = defaultNavItems }: { items?: NavItem[] }) => {
  return (
    <div className="flex mx-auto items-center justify-between gap-6 h-full w-full py-[4px] px-[28px]">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="h-full w-max gap-0.5 flex-col">
          <div className="h-full px-6 flex items-center">{item.icon}</div>
          <p className="text-[#4b5563] text-sm">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
