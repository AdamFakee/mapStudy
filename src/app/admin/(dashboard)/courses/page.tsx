import ListCourse from '@/components/admin/course/ListCourse'
import React from 'react'

function page() {
    return (
        <div className='h-full space-y-4 flex flex-col'>
            {/* filter */}
            <div className='h-[100px] bg-red-300d'>

            </div>
            {/* course list */}
            <div className='flex-1'>
                <ListCourse/>
            </div>
        </div>
    )
}

export default page