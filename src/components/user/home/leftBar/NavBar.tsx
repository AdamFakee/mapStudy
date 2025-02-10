import Link from "next/link";

import CustomIcon, { CustomIconMobile } from "./CustomIcon";

// Định nghĩa kiểu dữ liệu cho menu items
interface NavItem {
  href: string;
  icon: React.ReactNode | string;
  title?: string
}

const Line = () => {
    return (
        <div className="my-3 h-[2px] bg-[#3D0507] w-full opacity-15"></div>
    )
}

const NavBar = ({ items, isEnd }: { items?: NavItem[], isEnd: boolean }) => {
    return (
        <div className="w-[284px] lg:block hidden">
            {items?.map((item, index) => (
                <Link key={index} href={item.href} className="h-full w-full">
                    <CustomIcon icon={item.icon} title={item.title}/>
                </Link>
            ))}
            {
                isEnd === false && <Line/>
            }
        </div>
    );
};

export function NavBarMobile ({ items }: {   items: NavItem[] }) {
    return (
        <div className="w-[64px] block lg:hidden">
            {items?.map((item, index) => (
                <Link key={index} href={item.href} className="h-full w-full">
                    <CustomIconMobile icon={item.icon}/>
                </Link>
            ))}
        </div>
    );
}

export default NavBar;
