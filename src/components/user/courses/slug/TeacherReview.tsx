/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Comment from '../../Comment'



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
            {/* comment */}
            <div>
                <Comment/>
            </div>
        </div>
    )
}

export default TeacherReview