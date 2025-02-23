'use client'
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { Chapter } from './LeftBar';
import Link from 'next/link';


function ListExam({ chapter }: { chapter: Chapter}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`overflow-hidden rounded-lg space-y-2 ${isOpen ? '' : 'shadow-md'}`}>
            <div 
                onClick={handleOpen}
                className='bg-[#ebebeb] px-3 py-2 rounded-md grow flex justify-between items-center'
            >
                <p>{chapter.title}</p>
                <IoIosArrowUp className='rotate'/>
            </div>
            <div className='bg-white space-y-3 w-full duration-150 rounded-lg cursor-pointer' style={{display: isOpen ? 'block' : 'none'}}>
                {
                    chapter.lessons.map(( lesson, index ) => {
                        return (
                            <Link
                                href='#'
                                key={index}
                            >
                                <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                                    <div className="pt-3">
                                        <span>#{index}. </span><span>{lesson.lessonTitle}</span>
                                    </div>
                                    <div className='w-full border-b border-gray-300'></div>
                                </div>
                            </Link>
                        )
                    })
                }
                {/* <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                    <div className="pt-3">
                        <span>#1. </span><span>Đề phát triển minh hoạ - Môn Tiếng Anh - Đề số 11</span>
                    </div>
                    <div className='w-full border-b border-gray-300'></div>
                </div>
                <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                    <div className="pt-3">
                        <span>#1. </span><span>Đề phát triển minh hoạ - Môn Tiếng Anh - Đề số 11</span>
                    </div>
                    <div className='w-full border-b border-gray-300'></div>
                </div>
                <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                    <div className="pt-3">
                        <span>#1. </span><span>Đề phát triển minh hoạ - Môn Tiếng Anh - Đề số 11</span>
                    </div>
                    <div className='w-full border-b border-gray-300'></div>
                </div>
                <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                    <div className="pt-3">
                        <span>#1. </span><span>Đề phát triển minh hoạ - Môn Tiếng Anh - Đề số 11</span>
                    </div>
                    <div className='w-full border-b border-gray-300'></div>
                </div> */}
            </div>
        </div>
    )
}

export default ListExam