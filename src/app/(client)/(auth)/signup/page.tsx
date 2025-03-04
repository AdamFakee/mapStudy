import LeftbarAuth from '@/components/user/auth/LeftbarAuth'
import React from 'react'
import SignUpForm from '@/components/user/auth/SignUpForm'

function page() {
    return (
        <div className='flex items-center minHeight max-w-[1280] justify-between gap-20 pb-5 lg:m-0 sm:mx-5 mx-3'>
            {/* left bar */}
            <div className='w-[40%] lg:block hidden'>
                <LeftbarAuth title='Tạo tài khoản' subTitle='Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.'/>
            </div>
            {/* line */}
            <div className='w-[1px] minHeight bg-gray-400 lg:block hidden'></div>
            {/* form */}
            <div className='flex-1'>
                <h3 className="text-2xl font-semibold text-center mb-8 uppercase">Đăng ký</h3>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default page