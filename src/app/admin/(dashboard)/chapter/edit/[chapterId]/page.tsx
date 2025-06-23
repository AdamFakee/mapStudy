'use client'
import { InputAdmin } from '@/components/admin/Input';
import { Loading } from '@/components/user/AccessAlter';
import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { ChapterUpdate } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


interface resultFetch extends ApiResponse {
    metadata: {
        chapter: ChapterUpdate
    };
}


function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams<{ chapterId: string }>();
    const [chapter, setChapter] = useState<ChapterUpdate>();
    const { register, handleSubmit } = useForm<ChapterUpdate>()
    const navigation = useRouter();
    const submit = async (data: ChapterUpdate) => {
        const url = domainAdmin + `/chapter/edit/${params.chapterId}`;
        const userEmail = await getCookie('userEmail');
        const decodedEmail = userEmail ? decodeURIComponent(userEmail.toString()) : '';
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": decodedEmail
        }
        const opts: fetchOptions = {
            method: 'PATCH',
            body: data,
            header
        }
        setIsLoading(true);
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            if(res.status === 200 ) {
                return navigation.back();
            }
        } catch {
            alert('somthing went wrong');
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/chapter/${params.chapterId}`;
            console.log(url)
            const userEmail = await getCookie('userEmail');
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
                setChapter(res.metadata.chapter)
            } catch (err) {
                throw err
            } finally {
                setIsLoading(false)
            }
        }
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isLoading) {
        return <div>
            <Loading/>
        </div>
    }
    console.log(chapter)

    return (
        <div>
            <h3>edit course</h3>
            <form onSubmit={handleSubmit(submit)}>
                <div className='space-y-3'>
                  <InputAdmin<ChapterUpdate> label='name' name='title' type='text' register={register} defaultValue={chapter?.title}/>
                  <InputAdmin<ChapterUpdate> label='position' name='position' type='number' register={register} defaultValue={chapter?.position}/>
                  <InputAdmin<ChapterUpdate> label='description' name='description' type='text' register={register} defaultValue={chapter?.description}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > Edit </button>
            </form>
        </div>
    )
}

export default Page