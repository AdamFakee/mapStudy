'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

function QuizInfor() {
    const pathName = usePathname();
    const params = useParams();
    const slug = params.slug;
    return (
        <div className='bg-[#fff] shadow-sm rounded-xl px-5 py-3'>
            <div className="mb-5 text-xl font-bold text-primary">
                Đề thi số {slug}
            </div>
            <div className='md:flex md:space-y-0 justify-between items-center'>
                <div>
                    <div>
                        Tổng số câu: 120
                    </div>
                    <div>
                        Thời gian làm bài: 150 phút
                    </div>
                </div>
                <Link href={pathName + '/start'} className="bg-primary md:mt-0 mt-3 inline-block px-3 py-2 text-white rounded-full cursor-pointer">
                    Bắt đầu làm bài 
                </Link>  
            </div>
        </div>
    )
}

export default QuizInfor