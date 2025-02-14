'use client'
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function ListExam() {
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
                <p>dde paht thirne minh hoa</p>
                <IoIosArrowUp className='rotate'/>
            </div>
            <div className='bg-white space-y-3 w-full duration-150 rounded-lg cursor-pointer' style={{display: isOpen ? 'block' : 'none'}}>
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
                </div>
                <div className="w-full px-3 hover:bg-[#f3f3f3] duration-150 rounded-lg cursor-pointer flex justify-between flex-col gap-y-3">
                    <div className="pt-3">
                        <span>#1. </span><span>Đề phát triển minh hoạ - Môn Tiếng Anh - Đề số 11</span>
                    </div>
                    <div className='w-full border-b border-gray-300'></div>
                </div>
            </div>
        </div>
    )
}

export default ListExam