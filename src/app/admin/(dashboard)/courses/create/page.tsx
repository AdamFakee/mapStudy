'use client'
import { InputAdmin, InputRatioAdmin, InputSelectAdmin, OptionsAdmin } from '@/components/admin/Input';
import { Loading } from '@/components/user/AccessAlter';
import { domainAdmin } from '@/constants/domain';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { CourseAdminUpdate } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


interface resultFetch extends ApiResponse {
    metadata: {
        class: OptionsAdmin[],
        category: OptionsAdmin[],
        subject: OptionsAdmin[]
    };
}

interface CourseAdminCeate extends CourseAdminUpdate {
    isNew: boolean,
    isHot: boolean,
    thumbnail: string;
}

function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<resultFetch['metadata']>({} as resultFetch['metadata']);
    const { register, handleSubmit } = useForm<CourseAdminCeate>()
    const { user } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: CourseAdminCeate) => {
        const url = domainAdmin + `/course/create`;
        const header: HeadersInit = {
            "authorization": getCookie('accessToken') || '',
            "x-client-email": user?.email || ''
        }
        const opts: fetchOptions = {
            method: 'POST',
            body: { ...data, thumbnail: 'https://mapstudy.sgp1.digitaloceanspaces.com/course/3sdbeif008ax/2k9-xuat-phat-som-mon-toan---lop-11-1742810895159.png'},
            header
        }
        setIsLoading(true);
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            if(res.status === 200 ) {
                return navigation.replace('/admin/courses');
            }
        } catch {
            alert('somthing went wrong');
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/course/create/relational`;
            try {
                const res = await fetchApi<resultFetch>({url});
                setData(res.metadata)
            } catch (err) {
                throw err
            } finally {
                setIsLoading(false)
            }
        }
        fetch();
    }, []);

    if(isLoading) {
        return <div>
            <Loading/>
        </div>
    }
    return (
        <div>
            <h3>create course</h3>
            <form onSubmit={handleSubmit(submit)} className='space-y-4'>
                <div className='space-y-3'>
                    <InputAdmin<CourseAdminCeate> label='name' name='name' type='text' register={register}/>
                    <InputAdmin<CourseAdminCeate> label='desc' name='description' type='text' register={register}/>
                    <InputAdmin<CourseAdminCeate> label='price' name='price' type='number' register={register}/>
                    <InputSelectAdmin<CourseAdminCeate> label='subject' name='subject_id' type='text' register={register} options={data.subject}/>
                    <InputSelectAdmin<CourseAdminCeate> label='class' name='class_id' type='text' register={register} options={data.class}/>
                    <InputSelectAdmin<CourseAdminCeate> label='category' name='category_id' type='text' register={register} options={data.category}/>
                    <InputRatioAdmin<CourseAdminCeate> label='isHot' name='isHot' register={register}/>
                    <InputRatioAdmin<CourseAdminCeate> label='isNew' name='isNew' register={register}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > create </button>
            </form>
        </div>
    )
}

export default Page