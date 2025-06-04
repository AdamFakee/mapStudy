'use client'

import React, { useState } from 'react'
import { SubjectAdmin } from '@/types/definition';
import { domainAdmin } from '@/constants/domain';
import { fetchOptions, fetchApi, ApiResponse } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { Loading } from '../../user/AccessAlter';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const SubjectCard = ({ item }: { item: SubjectAdmin }) => {
    const { user} = useAuthAdminContext();
    const [isLoading, setIsLoading] = useState<boolean>();
    const navigation = useRouter();
    const handleDelete = async (subjectId: SubjectAdmin['id']) => {
        const url = domainAdmin + `/subject/delete/${subjectId}`;
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": user?.email || ''
        }
        const opts: fetchOptions = {
            method: 'DELETE',
            header
        }
        setIsLoading(true);
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            console.log(res)
            navigation.refresh();

        } catch {
            alert('somthing went wrong');
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading === true) return <div>
        <Loading/>
    </div>
    return (
        <div className="w-full flex flex-col gap-2">
            <div 
                className="w-full aspect-video rounded-lg relative" 
                style={{ background:'linear-gradient(to bottom right, #112D60,#B6C0C5)' }}
            >
                <p className="font-bold text-xl opacity-40 w-[80%] text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center"> {item.name} </p>
            </div>
            <div className='flex justify-end gap-2'>
                <Link href={`/admin/subject/edit/${item.id}`}>
                    <span className='inline-block px-3 py-1 hover:bg-red-600 bg-red-300 rounded-md text-lg font-semibold text-white'>
                        Edit
                    </span>
                </Link>
                <span className='inline-block px-3 py-1 bg-red-300 hover:bg-red-600 rounded-md text-lg font-semibold cursor-pointer text-white' onClick={() => handleDelete(item.id)}>
                    Delete
                </span>
            </div>
            
        </div>
    )
}