'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";

function LeftHeaderChapter () {
    const router = useRouter();
    const title = useSearchParams().get('title');
    const handleBackToPrePage = () => {
        router.back();
    }
    return (
        <div className='text-primary-light text-[20px] font-[500] inline-flex gap-3 items-center'>
            {/* button back to pre-page */}
            <div
                onClick={handleBackToPrePage}
            >
                <FaArrowLeft/>
            </div>
            {/* title */}
            <div className=' whitespace-nowrap'>
                {title}
            </div>
        </div>
    )
}


function HeaderChapter() {
    return (
        <div className='flex justify-between items-center bg-transparent'>
            <LeftHeaderChapter />
        </div>
    )
}

export default HeaderChapter