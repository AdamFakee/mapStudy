import React from 'react'
import datacourse from '@/data/course.json';
import { CourseCard } from '../Card';

function ListCourse() {
    return (
        <div className='h-full'>
            <div className='grid grid-cols-6 gap-4'>
                {
                    datacourse.map(( item, index ) => {
                        return (
                            <div key={index}>
                                <CourseCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListCourse