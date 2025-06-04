'use client'
import { InputAdmin } from '@/components/admin/Input';
import { Loading } from '@/components/user/AccessAlter';
import { domainAdmin } from '@/constants/domain';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { LessonUpdate } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


interface resultFetch extends ApiResponse {
    metadata: {
        lesson: LessonUpdate
    };
}


function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams<{ lessonId: string }>();
    const [lesson, setLesson] = useState<LessonUpdate>();
    const { register, handleSubmit } = useForm<LessonUpdate>()
    const { user } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: LessonUpdate) => {
        const url = domainAdmin + `/lesson/edit/${params.lessonId}`;
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": user?.email || ''
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
            const url = domainAdmin + `/lesson/${params.lessonId}`;
            console.log(url)
            const header: HeadersInit = {
                "authorization": getCookie('accessToken')?.toString() || '',
                "x-client-email": user?.email || ''
            };
            const opts: fetchOptions = {
                header,
            };
    
            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setLesson(res.metadata.lesson)
            } catch (err) {
                throw err
            } finally {
                setIsLoading(false)
            }
        }
        fetch();
    }, [params.lessonId, user?.email]);

    if(isLoading) {
        return <div>
            <Loading/>
        </div>
    }

    return (
        <div>
            <h3>edit lesson</h3>
            <form onSubmit={handleSubmit(submit)}>
                <div className='space-y-3'>
                  <InputAdmin<LessonUpdate> label='name' name='title' type='text' register={register} defaultValue={lesson?.title}/>
                  <InputAdmin<LessonUpdate> label='position' name='position' type='number' register={register} defaultValue={lesson?.position}/>
                  <InputAdmin<LessonUpdate> label='video_link' name='video_link' type='text' register={register} defaultValue={lesson?.video_link}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > Edit </button>
            </form>
        </div>
    )
}

export default Page