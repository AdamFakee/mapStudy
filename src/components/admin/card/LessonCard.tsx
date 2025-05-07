'use client'

import React from 'react'
import Link from 'next/link';
import { Lesson } from '../lesson/ListLesson';

export const LessonCard = ({ item }: { item: Lesson }) => {
    
    return (
        <div className="w-full flex flex-col gap-2">
            <div 
                className="w-full aspect-video rounded-lg relative" 
                style={{ background:'linear-gradient(to bottom right, #112D60,#B6C0C5)' }}
            >
                <p className="font-bold text-xl opacity-40 w-[80%] text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center"> {item.title} </p>
            </div>
            <div className='flex justify-end gap-2'>
                <Link href={`/admin/lesson/edit/${item.id}`}>
                    <span className='inline-block px-3 py-1 hover:bg-red-600 bg-red-300 rounded-md text-lg font-semibold text-white'>
                        Edit
                    </span>
                </Link>
            </div>
            
        </div>
    )
}