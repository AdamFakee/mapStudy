'use client'
import ListCourse from '@/components/admin/course/ListCourse'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {
    const navigation = useRouter();
    const handleNavigation = () => navigation.push('/admin/courses/create');
    return (
        <div className='h-full space-y-7 flex flex-col'>
            {/* top */}
            <div className='flex justify-between items-center'>
                <h3>
                Danh sách khóa học của bạn
                </h3>
                <span 
                    onClick={handleNavigation}
                    className='border-[1px] border-green-300 px-3 py-1 rounded-lg'
                >
                    create course
                </span>
            </div>
            {/* course list */}
            <div className='flex-1'>
                <ListCourse/>
            </div>
        </div>
    )
}

export default Page