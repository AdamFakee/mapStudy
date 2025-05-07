'use client'
import React, { useEffect, useState } from 'react'
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { Class } from '@/types/definition';
import { ClassCard } from '../card/ClassCard';

interface resultFetch extends ApiResponse {
    metadata: {
        classes: Class[];
    };
}

function ListClass() {
    const [_class, setClass] = useState<Class[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + '/class';
    
            try {
                const res = await fetchApi<resultFetch>({url});
                setClass(res.metadata.classes)
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
                    _class.map(( item, index ) => {
                        return (
                            <div key={index}>
                                <ClassCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListClass