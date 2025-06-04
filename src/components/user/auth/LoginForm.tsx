'use client'

import React, { useActionState, useEffect } from 'react'
import { Input, InputPassword } from './Input'
import Link from 'next/link'
import { loginAction } from '@/acctions/loginAction'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'


function LoginForm() {
    const [state, formAction] = useActionState( loginAction, null );
    const { handleLogin } = useAuthContext();
    const router = useRouter();
    useEffect(() => {
        if(state && state.status === 200) {
            const fetchCookie = async () => {
                const { data: { email }, tokens } = state.metadata;
                await handleLogin({ email, tokens});
                router.push('/')
            }
            fetchCookie();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <form action={formAction} className='space-y-12'>
            <div className='space-y-3'>
                <Input label="Tên tài khoản" name="email" type="text" />
                <InputPassword label='Mật khẩu'name='password'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent">Đăng nhập</button>
                <div className="text-base">
                    <span>Chưa có tài khoản? </span>
                    <Link 
                        className="text-primary" href="/signup"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm