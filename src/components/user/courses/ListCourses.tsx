import { Course } from '@/types/definition'
import Link from 'next/link'
import React from 'react'
import { CourseCard } from '../Card'
import Pagination from '../Pagination'

function ListCourses({ items }: { items: Course[] }) {
    return (
        <div>
            {/* list courses */}
            <div className='grid grid-cols-4 gap-x-3 gap-y-6'>
                {
                    items.map(( item ) => {
                        return (
                            <div
                                key={item.id}
                            >
                                <CourseCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
            {/* pagintion */}
            <Pagination totalPage={5}/>
        </div>
    )
}

export default ListCourses