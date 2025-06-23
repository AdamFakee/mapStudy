'use client'
import React, { useEffect, useState } from 'react'
import { CourseCard } from '../card/Card';
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next/client';
import { CourseAdmin } from '@/types/definition';

interface resultFetch extends ApiResponse {
    metadata: {
        courses: CourseAdmin[];
    };
}

function ListCourse() {
    const [courses, setCourses] = useState<CourseAdmin[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + '/course';
            const userEmail = getCookie('userEmail');
            const decodedEmail = userEmail ? decodeURIComponent(userEmail.toString()) : '';
            const header: HeadersInit = {
                "authorization": getCookie('accessToken')?.toString() || '',
                "x-client-email": decodedEmail
            }
            const opts: fetchOptions = {
                header,
            };
    
            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setCourses(res.metadata.courses)
            } catch (err) {
                throw err
            }
        }
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='h-full'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    courses.map(( item, index ) => {
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