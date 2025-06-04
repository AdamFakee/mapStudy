'use client'
import { InputAdmin } from '@/components/admin/Input';
import { Loading } from '@/components/user/AccessAlter';
import { domainAdmin } from '@/constants/domain';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { Class } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


interface resultFetch extends ApiResponse {
    metadata: {
        class: Class
    };
}


function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams<{ subjectId: string }>();
    const [subject, setSubject] = useState<Class>();
    const { register, handleSubmit } = useForm<Class>()
    const { user } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: Class) => {
        const url = domainAdmin + `/class/edit/${params.subjectId}`;
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
                return navigation.replace('/admin/class');
            }
        } catch {
            alert('somthing went wrong');
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/class/${params.subjectId}`;
            const header: HeadersInit = {
                "authorization": getCookie('accessToken')?.toString() || '',
                "x-client-email": user?.email || ''
            };
            const opts: fetchOptions = {
                header,
            };
    
            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setSubject(res.metadata.class)
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

    return (
        <div>
            <h3>edit course</h3>
            <form onSubmit={handleSubmit(submit)}>
                <div className='space-y-3'>
                    <InputAdmin<Class> label='name' name='name' type='text' register={register} defaultValue={subject?.name}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > Edit </button>
            </form>
        </div>
    )
}

export default Page