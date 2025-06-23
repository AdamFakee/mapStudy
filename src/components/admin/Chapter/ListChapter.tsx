'use client'
import React, { useEffect, useState } from 'react'
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next/client';
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
    const params = useParams<{courseId: string}>();
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/chapter/all/${params.courseId}`;
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
                setChapters(res.metadata.chapters)
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