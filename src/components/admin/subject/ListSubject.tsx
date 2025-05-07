'use client'
import React, { useEffect, useState } from 'react'
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { SubjectAdmin } from '@/types/definition';
import { ClassCard } from '../card/ClassCard';
import { SubjectCard } from '../card/SubjectCard';

interface resultFetch extends ApiResponse {
    metadata: {
        subjects: SubjectAdmin[];
    };
}

function ListSubject() {
    const [subject, setSubject] = useState<SubjectAdmin[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + '/subject';
    
            try {
                const res = await fetchApi<resultFetch>({url});
                setSubject(res.metadata.subjects)
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
                    subject.map(( item, index ) => {
                        return (
                            <div key={index}>
                                <SubjectCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListSubject