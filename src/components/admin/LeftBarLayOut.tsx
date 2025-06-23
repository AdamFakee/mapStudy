import { icon } from '@/constants/icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { SiCoursera } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

interface navigationType {
    title: string;
    icon: React.ReactElement;
    linkTo: string;
}

const defaultNavigationType: navigationType[] = [
    {
        title: 'Dashboacccccccccrd',
        linkTo: '#',
        icon: <LuLayoutDashboard className='w-full h-full opacity-40'/>
    },
    {
        title: 'Courses',
        linkTo: '#',
        icon: <SiCoursera className='w-full h-full opacity-40'/>
    },
    {
        title: 'Category',
        linkTo: '#',
        icon: <MdCategory className='w-full h-full opacity-40'/>
    },
    {
        title: 'Class',
        linkTo: '#',
        icon: <SiGoogleclassroom className='w-full h-full opacity-40'/>
    }
]

function LeftBarLayOut() {
    return (
        <div className='w-full h-full px-2 space-y-2'>
            {/* logo */}
            <div className='w-full'>
                <Image src={icon.logo} alt='logo' className='w-full aspect-square'/>
            </div>
            {/* navigation */}
            <div className='space-y-4 px-0.5'>
                {defaultNavigationType.map((nav, index) => (
                    <Link href={nav.linkTo} key={index} className='flex justify-center' title={nav.title}>
                        {nav.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LeftBarLayOut