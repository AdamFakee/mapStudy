'use client'
import { Category } from '@/types/definition'
import React, { useRef, useState } from 'react'
import { CategoryCard } from '../Card'
import Link from 'next/link'
import { IoIosArrowUp } from "react-icons/io";
import { TbXxx } from 'react-icons/tb'

const TitleComponent = (
        { title, buttonTitle, closeTitle, handleOpen, isOpen}: 
        { title: string, buttonTitle: string, closeTitle: string, handleOpen: () => void, isOpen: boolean }
    ) => {
    return (
        <div
            className='flex justify-between items-center'
        >
            <p className='font-semibold text-xl text-secondary-typo'>{title}</p>
            <button             
                onClick={handleOpen}
                className='inline-flex justify-end items-center gap-2'
            >
                <p>{isOpen == false ? buttonTitle : closeTitle }</p>
                <IoIosArrowUp className={`rotate ${ isOpen == true ? 'open' : ''}`}/>
            </button>
        </div>
    )
}
function ListCategory({ data }: { data: Category[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <div className='space-y-2'>
            <TitleComponent 
                title="Danh mục" 
                buttonTitle={isOpen ? 'Thu gọn' : 'Xem thêm'} 
                closeTitle="Thu gọn" 
                handleOpen={handleOpen} 
                isOpen={isOpen}
            />
            <div className={`grid ${isOpen ? 'grid-rows-2' : 'grid-rows-1'} grid-cols-5 gap-3`}>
                {
                    data.map((item, index )=> {
                        const checkLastItem = index === data.length - 1;
                        return (
                            <Link
                                href="#"
                                key={item.id}
                                className={`${isOpen ? 'open' : ''} ${checkLastItem ? 'scroll-container' : ''}`}
                            >
                            <CategoryCard item={item} />
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ListCategory