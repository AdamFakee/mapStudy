'use client'
import React, { useEffect, useState } from 'react'
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { LessonUpdate } from '@/types/definition';
import { useParams } from 'next/navigation';
import { LessonCard } from '../card/LessonCard';

export interface Lesson extends LessonUpdate {
    id: number
}

interface resultFetch extends ApiResponse {
    metadata: {
        lessons: Lesson[];
    };
}

function ListLesson() {
    const [lesson, setLesson] = useState<Lesson[]>([]);
    const params = useParams<{chapterId: string}>();
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + '/lesson/all/' + params.chapterId;
    
            try {
                const res = await fetchApi<resultFetch>({url});
                setLesson(res.metadata.lessons)
            } catch (err) {
                throw err
            }
        }
        fetch();
    }, []);
    return (
        <div className='h-full'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    lesson.map(( item, index ) => {
                        return (
                            <div key={index}>
                                <LessonCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListLesson