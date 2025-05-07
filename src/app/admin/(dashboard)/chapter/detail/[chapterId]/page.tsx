'use client'
import ListLesson from '@/components/admin/lesson/ListLesson';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function Page() {
    const navigation = useRouter();
    const params = useParams<{chapterId: string}>();
    const handleNavigation = (chapterId : number) => navigation.push('/admin/lesson/create/' + chapterId);
    return (
        <div className='h-full space-y-7 flex flex-col'>
            {/* top */}
            <div className='flex justify-between items-center'>
                <h3>
                Danh sách các bài học trong khóa học của bạn
                </h3>
                <span 
                    onClick={() => handleNavigation( parseInt(params.chapterId))}
                    className='border-[1px] border-green-300 px-3 py-1 rounded-lg'
                >
                    create lesson
                </span>
            </div>
            {/* course list */}
            <div className='flex-1'>
                <ListLesson/>
            </div>
        </div>
    )
}

export default Page