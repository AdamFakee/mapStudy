import { icon } from '@/constants/icon'
import Image from 'next/image'
import React from 'react'
import Search from './home/header/Search'
import NavBar from './home/header/Navbar'
import TextLink from './home/header/TextLink'

const Header = () => {
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
                        <Search/>
                    </div>
                    {/* navbar */}
                    <nav className='sm:w-[50%] sm:block hidden'>
                        <NavBar/>
                    </nav>
                    {/* auth */}
                    <div className='sm:w-[25%]'>
                        <div className='flex gap-3 justify-end'>
                            <div className='lg:block hidden'>
                                <TextLink href='#' text='Kích hoạt thẻ' isEnd={false}/>
                            </div>
                            <TextLink href='#' text='Đăng ký' isEnd={false}/>
                            <TextLink href='#' text='Đăng nhập' isEnd={true}/>
                        </div>
                    </div>
                    </div>
            </div>
        </header>
    )
}

export default Header