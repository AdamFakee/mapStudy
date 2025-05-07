'use client'
import ListChapter from '@/components/admin/Chapter/ListChapter';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function Page() {
    const navigation = useRouter();
    const params = useParams<{courseId: string}>();
    const handleNavigation = (courseId : number) => navigation.push('/admin/chapter/create/' + courseId);
    return (
        <div className='h-full space-y-7 flex flex-col'>
            {/* top */}
            <div className='flex justify-between items-center'>
                <h3>
                Danh sách các chương trong khóa học của bạn
                </h3>
                <span 
                    onClick={() => handleNavigation( parseInt(params.courseId))}
                    className='border-[1px] border-green-300 px-3 py-1 rounded-lg'
                >
                    create chapter
                </span>
            </div>
            {/* course list */}
            <div className='flex-1'>
                <ListChapter/>
            </div>
        </div>
    )
}

export default Page