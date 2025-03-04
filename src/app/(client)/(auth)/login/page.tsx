import LeftbarAuth, { ImageAuth } from '@/components/user/auth/LeftbarAuth'
import React from 'react'
import LoginForm from '@/components/user/auth/LoginForm'

function page() {
  return (
    <div className='flex flex-col lg:flex-row items-center minHeight max-w-[1280] justify-between gap-20 pb-5'>
      {/* left bar */}
      <div className='w-[40%] hidden lg:block'>
        <LeftbarAuth title='Chào mừng trở lại'/>
      </div>
      <div className='w-[40%] lg:hidden block'>
        <ImageAuth/>
      </div>
      {/* line */}
      <div className='w-[1px] h-[55vh] bg-gray-400 hidden lg:block'></div>
      {/* form */}
      <div className='flex-1 w-full'>
        <h3 className="text-2xl font-semibold text-center mb-8 uppercase">Đăng nhập</h3>
        <LoginForm/>
      </div>
    </div>
  )
}

export default page