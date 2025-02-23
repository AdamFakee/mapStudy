'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Course, Category } from '@/types/definition';

export const CourseCard = ({ item }: { item: Course }) => {
    return (
        <Link
            href={`/courses/${item.courseId}`}
            className="w-full text-secondary-typo outline-none px-2 tab:px-3 lap:px-4 inline-block"
        >
            <div className="relative rounded-[16px] overflow-hidden">
                {/* Ảnh khóa học */}
                <div>
                <Image
                    src={item.courseThumbnail}
                    alt={item.courseName}
                    width={128}
                    height={128}
                    className="w-full rounded-[16px] aspect-square object-cover p-[0.5px]"
                />
                </div>
            </div>

            {/* Thông tin khóa học */}
            <div className="mt-2.5 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-md uppercase text-[#692626] font-medium line-clamp-2">
                        {item.courseName}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    {/* Icon giáo viên */}
                    <svg className="-ml-1 w-5 h-5" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99998 1.83335C6.25331 1.83335 4.83331 3.25335 4.83331 5.00002C4.83331 6.71335 6.17331 8.10002 7.91998 8.16002C7.97331 8.15335 8.02665 8.15335 8.06665 8.16002C8.07998 8.16002 8.08665 8.16002 8.09998 8.16002C8.10665 8.16002 8.10665 8.16002 8.11331 8.16002C9.81998 8.10002 11.16 6.71335 11.1666 5.00002C11.1666 3.25335 9.74665 1.83335 7.99998 1.83335Z" fill="#b21217"></path>
                        <path d="M11.3866 9.93336C9.52664 8.69336 6.49331 8.69336 4.61997 9.93336C3.77331 10.5 3.30664 11.2667 3.30664 12.0867C3.30664 12.9067 3.77331 13.6667 4.61331 14.2267C5.54664 14.8534 6.77331 15.1667 7.99997 15.1667C9.22664 15.1667 10.4533 14.8534 11.3866 14.2267C12.2266 13.66 12.6933 12.9 12.6933 12.0734C12.6866 11.2534 12.2266 10.4934 11.3866 9.93336Z" fill="#b21217"></path>
                    </svg>
                    <span className="flex-1 text-cp truncate text-[#692626]">{item.teacherName}</span>
                </div>
            </div>
        </Link>
    )
}

export const CategoryCard = ({ item }: { item: Category }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div 
                className="w-full aspect-video rounded-lg relative" 
                style={{ background:'linear-gradient(to bottom right, #112D60,#B6C0C5)' }}
            >
                <p className="font-bold text-xl opacity-40 w-[80%] text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center"> {item.name} </p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-medium line-clamp-2 text-secondary-typo"> {item.name} </p>
            </div>
        </div>
    )
}