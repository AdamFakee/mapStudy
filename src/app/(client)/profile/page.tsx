import ProfileText from '@/components/user/profile/ProfileText'
import React from 'react'

function page() {
  return (
    <div className='fixedHeight'>
        <div className='w-[300px] mx-auto my-2 flex flex-col gap-2 bg-white rounded-md py-2 px-3'>
            <ProfileText text='Thông tin cá nhân' href='/profile/infor'/>
            <ProfileText text='Khóa học của tôi' href='/profile/myCourses'/>
            <ProfileText text='Kích hoạt thẻ' href='/activeCourse'/>
        </div>
    </div>
  )
}

export default page