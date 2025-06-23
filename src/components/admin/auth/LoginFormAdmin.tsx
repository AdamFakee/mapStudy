'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { InputAdmin, InputPasswordAdmin } from '../Input';
import { useForm } from 'react-hook-form';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { domainAdmin } from '@/constants/domain';
import { Tokens } from '@/types/definition';
import { useAuthAdminContext } from '@/contexts/AuthAdminContext';

type loginProps = {
    email: string,
    password: string
}

interface resultFetch extends ApiResponse {
    metadata: {
        tokens: Tokens,
        data: {
            name: string,
            email: string,
            thumbnail: string
        }
    }
}

function LoginFormAdmin() {
    const { register, handleSubmit } = useForm<loginProps>();
    const { handleLogin } = useAuthAdminContext();
    const navigation = useRouter();
    const submit = async (data: loginProps) => {
        try {
            const url = domainAdmin + '/teacher/login'
            const opts: fetchOptions = {
                method: 'POST',
                body: data,
            }
            const res = await fetchApi<resultFetch>({url, opts})
            handleLogin({email: res.metadata.data.email, tokens: res.metadata.tokens})
            if(res.status === 200) {
                navigation.replace('/admin/courses')
            }
        } catch (e){
            console.log(e)
            alert('login fail')
        }
    }
    return (
        <form className='space-y-12' onSubmit={handleSubmit(submit)}>
            <div className='space-y-3'>
                <InputAdmin<loginProps> label="Tên tài khoản" name="email" type="text" register={register}/>
                <InputPasswordAdmin<loginProps> label='Mật khẩu'name='password' register={register}/>
            </div>
            <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent" >Đăng nhập</button>
        </form>
    )
}

export default LoginFormAdmin