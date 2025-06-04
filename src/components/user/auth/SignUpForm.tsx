'use client'

import React, { useActionState, useEffect } from 'react'
import { signUpAction, State } from '@/acctions/signUpAction'
import { Input, InputPassword, InputSelect } from './Input'
import { SelectOption } from '@/types/definition'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

const selectOptions: SelectOption[] = [
    {
        label: 'Nam',
        value: 'male'
    }, 
    {
        label: 'Nữ',
        value: 'female'
    }
]

const item = { label: "Giới tính", name: "gender" };

function SignUpForm() {
    const initialState: State = { message: '', errors: {}}
    const [state, formAction] = useActionState( signUpAction, initialState );
     const { handleLogin } = useAuthContext();
    const router = useRouter();
    useEffect(() => {
        if(state && state.status === 201) {
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
                <Input label="Họ và Tên" name="fullName" type="text" warn={state?.error?.fullName}/>
                <Input label="Email" name="email" type="text"  warn={state?.error?.email}/>
                <InputPassword label='Mật khẩu'name='password' warn={state?.error?.password}/>
                <InputPassword label='Xác nhận lại mật khẩu'name='confirmPassword'  warn={state?.error?.confirmPassword}/>
                <Input label="Số điện thoại" name="phone" type="text"  warn={state?.error?.phone}/>
                <Input label="Năm sinh" name="birthYear" type="text"  warn={state?.error?.birthYear}/>
                <InputSelect item={{ ...item, warn: state?.error?.gender }} options={selectOptions}/>
                <Input label="Link Facebook" name="facebook" type="text"  warn={state?.error?.facebook}/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <button type="submit" className="px-10 py-3 whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2 duration-150 ease-out text-white bg-primary hover:bg-primary-light border-transparent">Tạo tài khoản</button>
                <div className="text-base">
                    <span>Đã có tài khoản? </span>
                    <Link 
                        className="text-primary" href="/login"
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm