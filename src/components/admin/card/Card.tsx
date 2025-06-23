'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CourseAdmin } from '@/types/definition';
import { domainAdmin } from '@/constants/domain';
import { fetchOptions, fetchApi, ApiResponse } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { Loading } from '../../user/AccessAlter';
import { useRouter } from 'next/navigation';

export const CourseCard = ({ item }: { item: CourseAdmin }) => {
    const { user} = useAuthAdminContext();
    const [isLoading, setIsLoading] = useState<boolean>();
    const navigation = useRouter();
    const handleDelete = async (courseId: CourseAdmin['category_id']) => {
        const url = domainAdmin + `/course/delete/${courseId}`;
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
        <div
            className="w-full text-secondary-typo outline-none px-2 tab:px-3 lap:px-4 inline-block"
        >
            <Link href={`/admin/courses/detail/${item.id}`}>
                <div className="relative rounded-[16px] overflow-hidden">
                    {/* Ảnh khóa học */}
                    <div>
                    <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width={128}
                        height={128}
                        className="w-full rounded-[16px] aspect-square object-cover p-[0.5px]"
                    />
                    </div>
                </div>
            </Link>

            {/* Thông tin khóa học */}
            <div className="mt-2.5 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-md uppercase text-[#692626] font-medium line-clamp-2">
                        {item.name}
                    </span>
                </div>
            </div>

            {/* button */}
            <div className='flex justify-end gap-2'>
                <Link href={`/admin/courses/edit/${item.id}`}>
                    <span className='inline-block px-3 py-1 hover:bg-red-600 bg-red-300 rounded-md text-lg font-semibold text-white'>
                        Edit
                    </span>
                </Link>
                <span className='inline-block px-3 py-1 bg-red-300 hover:bg-red-600 rounded-md text-lg font-semibold cursor-pointer text-white' onClick={() => handleDelete(item.id)}>
                    Delete
                </span>
                <Link href={`/admin/enroll?courseId=${item.id}`}>
                    <span className='inline-block px-3 py-1 bg-primary-light rounded-md text-lg font-semibold text-white'>
                        user
                    </span>
                </Link>
            </div>
        </div>
    )
}