'use client';
import React from 'react'
import ListCourses from '../ListCourses'
import { useParams } from 'next/navigation'

function LeftBar() {
    const params: {slug: string} = useParams();
    const slug = params.slug;

    return (
        <div className='bg-[#fff] px-3 py-4 space-y-4 rounded-lg'>
            {/* title */}
            <div className='text-primary font-bold text-md pl-2'>Tất cả khóa học</div>
            {/* list courses */}
            <div>
                <ListCourses api={`/course/category/${slug}`}/>
            </div>
        </div>
    )
}

export default LeftBar