'use client'
// Import các icon bạn cần
import { IoIosLogIn } from "react-icons/io";
import NavBar, { NavBarMobile } from "./leftBar/NavBar";
import { icon } from "@/constants/icon";
import Image from "next/image";
import { CustomIconMenu } from "./leftBar/CustomIcon";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { defaultNavItems } from "./header/Navbar";

// Định nghĩa kiểu dữ liệu cho menu items
interface NavItem {
  href: string;
  icon: React.ReactNode;
  title: string
}

// Danh sách các menu mặc định
// const defaultNavItems: NavItem[] = [
//   { href: "#", icon: <RiHome9Line className="w-6 h-6 text-gray-500" />, title: "Trang chủ" },
//   { href: "#", icon: <SiCoursera className="w-6 h-6 text-gray-500" />, title: "Khóa học" },
//   { href: "#", icon: <PiExamLight className="w-6 h-6 text-gray-500" />, title: "Thi Online" },
//   { href: "#", icon: <IoNewspaperOutline className="w-6 h-6 text-gray-500" />, title: "Tin tức" },
// ];

const authNavItems: NavItem[] = [
  {
    href: "/login", icon: <IoIosLogIn className="w-6 h-6 text-gray-500" />, title: "Đăng nhập"
  }
]

// Danh sách các mạng xã hội
const contacts: NavItem[] = [
  {
    href: "#",
    icon: <Image src={icon.facebook} alt="Facebook Mapstudy" className="w-12 h-12"/>,
    title: "Facebook Mapstudy",
  },
  {
    href: "#",
    icon: <Image src={icon.youtube} alt="Thầy Vũ Ngọc Anh - Chuyên luyện thi Vật lý" className="w-12 h-12"/>,
    title: "Thầy Vũ Ngọc Anh - Chuyên luyện thi Vật lý",
  },
  {
    href: "#",
    icon: <Image src={icon.messenger} alt="Messenger Mapstudy" className="w-12 h-12"/>,
    title: "Messenger Mapstudy",
  },
];
  


const LeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu: () => void = () => setIsOpen(!isOpen);
  const { user } = useAuthContext();

  return (
    <>
      <div className="sticky overflow-y-auto scroll-y-hidden sm:block hidden" style={{ maxHeight: "calc(-56px + 100vh)"}}>
        {/* auth */}
        {
          !user || user.isLogin === false && <NavBar items={authNavItems} isEnd={false}/>
        }
        {/* nav bar */}
        <NavBar items={defaultNavItems} isEnd={false}/>
        {/* contact */}
        <NavBar items={contacts} isEnd={true}/>

        {/* nav bar mobile */}
        <CustomIconMenu icon={<CiMenuFries className="w-6 h-6"/>} handleOpenMenu={handleOpenMenu}/>
        <NavBarMobile items={defaultNavItems}/>
      </div>
      {/* {
        isOpen && <Menu/>
      } */}
    </>
  );
};



export default LeftBar;
