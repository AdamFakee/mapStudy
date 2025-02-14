import Link from 'next/link';
import React from 'react'
import { PiSealWarning } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { GoCommentDiscussion } from "react-icons/go";

const emojis = [
    '❤️', '😃', '👍', '👎', '😓'
]

function TeacherReview() {
    return (
        <div className='space-y-5 bg-[#fff] px-3 py-2 rounded-lg shadow-md'>
            {/* teacher infor */}
            <div className='flex items-center h-[60px] gap-4'>
                <img 
                    src="https://mapstudy.sgp1.digitaloceanspaces.com/teacher/64b229b5d0a652b97e5ab22d/thay-vu-ngoc-anh-1719903957239.png" 
                    alt="teacher image" 
                    className='aspect-square h-full rounded-full object-cover'
                />
                <p className='text-lg font-bold text-primary'>Giao vien dang tien nghia</p>
            </div>
            {/* login prompt */}
            <div className='mb-6 flex items-center gap-2 px-3 py-2 bg-[#e2ebfc] text-primary rounded-lg whitespace-nowrap'>
                <PiSealWarning/>
                <div className='text-sm'>
                    <p>Bạn cần đăng nhập để đánh giá và bình luận. 
                        <Link href='/login' className='pl-1 underline'>
                            Đăng nhập ngay.
                        </Link>
                    </p>
                </div>
            </div>
            {/* rating */}
            <div>
                <div className='inline-flex gap-2 items-center text-primary-light'>
                    <SlLike/>
                    <p>Đánh giá (0)</p>
                </div>
                {/* emoji */}
                <div className='flex gap-3'>
                    {
                        emojis.map(( emoji, index ) => {
                            return (
                                <div className='flex items-center gap-1 rounded-full cursor-pointer bg-gray-200 px-2 py-1' key={index}>
                                    <span className='hover:scale-150'>{emoji}</span>
                                    <span>0</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* comment */}
            <div>
                <div className='inline-flex gap-2 items-center text-primary-light'>
                    <GoCommentDiscussion/>
                    <p>Đánh giá (0)</p>
                </div>
                {/* main */}
                <div className='min-h-[200px] flex flex-col justify-center items-center text-primary'>
                    <div className='font-semibold'>Chưa có bình luận nào.</div>
                    <div>Hãy là người đầu tiên bình luận!</div>
                </div>
            </div>
        </div>
    )
}

export default TeacherReview