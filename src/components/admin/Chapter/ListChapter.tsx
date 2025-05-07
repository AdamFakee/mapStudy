'use client'
import React, { useEffect, useState } from 'react'
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next/client';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { Chapter } from '@/types/definition';
import { useParams } from 'next/navigation';
import { ChapterCard } from '../card/ChapterCard';

interface resultFetch extends ApiResponse {
    metadata: {
        chapters: Chapter[];
    };
}

function ListChapter() {
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const { user } = useAuthAdminContext();
    const params = useParams<{courseId: string}>();
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/chapter/all/${params.courseId}`;
            const header: HeadersInit = {
                "authorization": getCookie('accessToken') || '',
                "x-client-email": user?.email || ''
            };
            const opts: fetchOptions = {
                header,
            };
    
            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setChapters(res.metadata.chapters)
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
                    chapters.map(( item, index ) => {
                        return (
                            <div key={index}>
                                <ChapterCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListChapter