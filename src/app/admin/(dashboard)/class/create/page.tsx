'use client'
import { InputAdmin } from '@/components/admin/Input';
import { domainAdmin } from '@/constants/domain';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { Class } from '@/types/definition';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form';


function Page() {
    const { register, handleSubmit } = useForm<Class>()
    const { user } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: Class) => {
        const url = domainAdmin + `/class/create`;
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": user?.email || ''
        }
        const opts: fetchOptions = {
            method: 'POST',
            body: { ...data},
            header
        }
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            if(res.status === 200 ) {
                return navigation.replace('/admin/class');
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
                    <InputAdmin<Class> label='name' name='name' type='text' register={register}/>
                </div>
                
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" > create </button>
            </form>
        </div>
    )
}

export default Page