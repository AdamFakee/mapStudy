'use client'
import { icon } from '@/constants/icon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Search, { SearchMobile } from './home/header/Search'
import NavBar from './home/header/Navbar'
import TextLink, { TextLink_Logout } from './home/header/TextLink'
import { useAuthContext } from '@/contexts/AuthContext'

const Header = () => {
    const { user } = useAuthContext();
    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
    }, []); 
    return (
        <header className='w-full relative z-30 bg-[#ffffff1A]'>
            <div className='fixed top-0 w-full backdrop-blur-md'>
                <div className='lg:mx-[28px] mx-[39px] h-[56px] flex justify-between gap-6 items-center'>
                    {/* search */}
                    <div className='w-[23%] inline-flex justify-start gap-3'>
                        <Image
                            src={icon.logo}
                            alt='logo'
                            className='w-[38.5px] aspect-square object-contain '
                        />
                        { isMobile ? <SearchMobile/> : <Search/>}
                    </div>
                    {/* navbar */}
                    <nav className='sm:w-[50%] sm:block hidden'>
                        <NavBar/>
                    </nav>
                    {/* auth */}
                    <div className='sm:w-[25%]'>
                        <div className='flex gap-3 justify-end'>
                            <div className='lg:block hidden'>
                                <TextLink href='/activeCourse' text='Kích hoạt thẻ' isEnd={false}/>
                            </div>
                            <TextLink href='/signup' text='Đăng ký' isEnd={user?.isLogin || false} otherStyles={user?.isLogin ? 'hidden' : ''}/>
                            <TextLink href='/login' text='Đăng nhập' isEnd={user?.isLogin || false} otherStyles={user?.isLogin ? 'hidden' : ''}/>
                            <TextLink_Logout href='#' text='Đăng xuất' isEnd={ false} otherStyles={user?.isLogin ? '' : 'hidden'}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header