'use client'

import React from 'react'
import { Input, InputPassword } from './Input'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi'
import { Tokens } from '@/types/definition'
import { domain } from '@/constants/domain'

interface resultFetchLogin extends ApiResponse {
    metadata: {
        tokens: Tokens,
        data: {
            name: string,
            email: string
        }
    }
}
function LoginForm() {
    const { handleLogin } = useAuthContext();
    const router = useRouter();
    // useEffect(() => {
        
    //         fetchCookie();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    const fetchCookie = async ({ email, password }: { email: string, password: string }) => {
        try {
            const body = { email, password };
            const opts: fetchOptions = { body, method: 'POST' };
            const url = domain + '/user/login';
            const res = await fetchApi<resultFetchLogin>({ url, opts });

            const { data: { email: userEmail }, tokens } = res.metadata;
            await handleLogin({ email: userEmail, tokens });
            router.push('/');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    return (
        <form className='space-y-12' onSubmit={async (e) => {
    e.preventDefault(); // Ngăn reload trang

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await fetchCookie({ email, password });
}}>
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