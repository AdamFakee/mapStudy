import LoginFormAdmin from '@/components/admin/auth/LoginFormAdmin'
import React from 'react'

function page() {
    return (
        <div className='flex-1 w-full flex flex-col items-center justify-center'>
            <h3 className="text-2xl font-semibold text-center mb-8 uppercase">Đăng nhập</h3>
            <div className='w-[400px] mx-auto'>
                <LoginFormAdmin/>
            </div>
        </div>
    )
}

export default page