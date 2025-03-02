'use client';
import { Course } from '@/types/definition'
import React, { useEffect, useState } from 'react'
import { CourseCard } from '../Card'
import Pagination from '../Pagination'
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { useQueryParams } from '@/hooks/useQueryParams';
import { domain } from '@/constants/domain';

interface resultFetch extends ApiResponse {
    metadata: {
        courses: Course[];
        pagination: {
            totalPages: number;
            currentPage: number;
        }
    };
}

function ListCourses({ api }: { api: string }) {
    const [totalPages, setTotalPages] = useState<number>(1);
    const [courses, setCourses] = useState<Course[]>();

    // call api
    const query: string = useQueryParams();
    useEffect(() => {
        const url: string = domain + `${api}?${query}`;
        const fetchCourse = async () => {
            try {
                const res = await fetchApi<resultFetch>({ url });
                setCourses(res?.metadata?.courses || []);
                setTotalPages(res?.metadata?.pagination?.totalPages || 1);
            } catch (error) {
                console.log('err::::',error)
            } 
        }
        fetchCourse();
    }, [query, api])

    return (
        <div>
            {/* list courses */}
            <div className='grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-6'>
                {
                    courses?.map(( item ) => {
                        return (
                            <div
                                key={item.courseId}
                            >
                                <CourseCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
            {/* pagintion */}
            <Pagination totalPage={totalPages}/>
        </div>
    )
}

export default ListCourses