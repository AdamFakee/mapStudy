'use client'
import { InputAdmin } from '@/components/admin/Input';
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { ChapterUpdate } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form';


function Page() {
    const params = useParams<{courseId: string}>()
    const { register, handleSubmit } = useForm<ChapterUpdate>()
    const navigation = useRouter();
    const submit = async (data: ChapterUpdate) => {
        const url = domainAdmin + `/chapter/create`;
        const userEmail = await getCookie('userEmail');
        const decodedEmail = userEmail ? decodeURIComponent(userEmail.toString()) : '';
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": decodedEmail
        }
        data = {...data, course_id: parseInt(params.courseId) }
        const opts: fetchOptions = {
            method: 'POST',
            body: { ...data},
            header
        }
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            if(res.status === 200 ) {
                return navigation.back();
            }
        } catch {
            alert('somthing went wrong');
        } 
    }

    return (
        <div>
            <h3>create subject</h3>
            <form onSubmit={handleSubmit(submit)} className='space-y-4'>
                <div className='space-y-3'>
                    <InputAdmin<ChapterUpdate> label='title' name='title' type='text' register={register}/>
                    <InputAdmin<ChapterUpdate> label='position' name='position' type='number' register={register}/>
                    <InputAdmin<ChapterUpdate> label='description' name='description' type='text' register={register}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > create </button>
            </form>
        </div>
    )
}

export default Page