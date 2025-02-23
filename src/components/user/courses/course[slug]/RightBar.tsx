'use client';
import { domain } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { Category } from '@/types/definition';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface resultFetch extends ApiResponse {
    metadata: {
        category: Category;
    };
}
function RightBar() {
    const [ category, setCategory ] = useState<Category>();
    const params: {slug: string} = useParams();
    // call api
    useEffect(() => {
        const url: string = domain + '/category/detail/' + params.slug;
        console.log(url);
        const fetchCategory = async () => {
            try {
                const res: resultFetch = await fetchApi<resultFetch>({ url });
                setCategory(res?.metadata?.category);
            } catch (error) {
                console.error("Failed to fetch category:", error);
            }
        }

        fetchCategory();
    }, [params.slug])

    return (
        <div className='h-[400px] space-y-2 bg-[#fff] rounded-lg p-4 w-full'>
            {/* banner */}
            <div className='bg-black h-2/5 w-full text-[#fff] font-semibold text-lg flex justify-center items-center rounded-lg'>
                {category?.name}
            </div>
            {/* title */}
            <div className='text-black font-medium text-xl'>
                {category?.name}
            </div>
        </div>
    )
}

export default RightBar