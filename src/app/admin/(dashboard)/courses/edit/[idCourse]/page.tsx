'use client'
import { InputAdmin, InputSelectAdmin, OptionsAdmin } from '@/components/admin/Input';
import { Loading } from '@/components/user/AccessAlter';
import { domainAdmin } from '@/constants/domain';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { CourseAdmin, CourseAdminUpdate } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


interface resultFetch extends ApiResponse {
    metadata: {
        course: CourseAdmin;
        class: OptionsAdmin[],
        category: OptionsAdmin[],
        subject: OptionsAdmin[]
    };
}


function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams<{ idCourse: string }>();
    const [data, setData] = useState<resultFetch['metadata']>({} as resultFetch['metadata']);
    const { register, handleSubmit } = useForm<CourseAdminUpdate>()
    const { user } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: CourseAdminUpdate) => {
        const url = domainAdmin + `/course/edit/${params.idCourse}`;
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
                return navigation.replace('/admin/courses');
            }
        } catch (error) {
            console.log(error)
            alert('somthing went wrong');
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/course/${params.idCourse}`;
            const header: HeadersInit = {
                "authorization": getCookie('accessToken')?.toString() || '',
                "x-client-email": user?.email || ''
            };
            const opts: fetchOptions = {
                header,
            };
    
            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setData(res.metadata)
            } catch (err) {
                throw err
            } finally {
                setIsLoading(false)
            }
        }
        fetch();
    }, [params.idCourse, user?.email]);

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
                    <InputAdmin<CourseAdminUpdate> label='name' name='name' type='text' register={register} defaultValue={data.course.name}/>
                    <InputAdmin<CourseAdminUpdate> label='desc' name='description' type='text' register={register} defaultValue={data.course.description}/>
                    <InputAdmin<CourseAdminUpdate> label='price' name='price' type='number' register={register} defaultValue={data.course.price}/>
                    <InputSelectAdmin<CourseAdminUpdate> label='subject' name='subject_id' type='text' register={register} options={data.subject} defaultValue={data.course.subject_id}/>
                    <InputSelectAdmin<CourseAdminUpdate> label='class' name='class_id' type='text' register={register} options={data.class} defaultValue={data.course.class_id}/>
                    <InputSelectAdmin<CourseAdminUpdate> label='category' name='category_id' type='text' register={register} options={data.category} defaultValue={data.course.category_id}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > Edit </button>
            </form>
        </div>
    )
}

export default Page