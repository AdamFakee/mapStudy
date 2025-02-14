import React from 'react'
import ListCourses from '../ListCourses'
import dataCourses from '@/data/course.json'

function LeftBar() {
    return (
        <div className='bg-[#fff] px-3 py-4 space-y-4 rounded-lg'>
            {/* title */}
            <div className='text-primary font-bold text-md pl-2'>Tất cả khóa học</div>
            {/* list courses */}
            <div>
                <ListCourses items={dataCourses}/>
            </div>
        </div>
    )
}

export default LeftBar