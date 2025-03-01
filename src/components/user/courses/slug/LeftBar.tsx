'use client'
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import ListExam from './ListExam'
import { ApiResponse, fetchApi } from '@/customLib/fetchApi'
import { Course } from '@/types/definition'
import { domain } from '@/constants/domain'
import { useParams } from 'next/navigation'

interface Lesson {
    lessonId: number;
    lessonTitle: string;
}

export interface Chapter {
    title: string;
    lessons: Lesson[];
}

interface Metadata {
    detail_chapter: Chapter[];
    detail_course: Course;
}
interface resultFetch extends ApiResponse {
    metadata: Metadata
}

function LeftBar() {
    const [ results, setResult ] = useState<Metadata>();
    const params: { slug: string } = useParams();

    useEffect(() => {
        const url = domain + '/course/detail/' + params.slug;
        const fetchData = async () => {
            try {
                const result = await fetchApi<resultFetch>({ url });
                console.log(result)
                setResult(result?.metadata || { detail_chapter: [], detail_course: []});

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [params.slug])


    return (
        <div className='space-y-6'>
            <Banner thumbnail={results?.detail_course.courseThumbnail} title={results?.detail_course.courseName}/>
            <div className='space-y-3 bg-[#f3f4f5]'>
                {
                    results && results.detail_chapter.map(( chapter, index ) => {
                        return (
                            <div
                                key={index}
                            >
                                <ListExam chapter={chapter}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeftBar