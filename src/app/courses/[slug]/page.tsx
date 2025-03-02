import React from 'react'
import { BreakCrumTypes } from '@/types/definition'
import BreakCrum from '@/components/user/BreakCrum'
import LeftBar from '@/components/user/courses/slug/LeftBar'
import TeacherReview from '@/components/user/courses/slug/TeacherReview'

const dataBreackCrum: BreakCrumTypes[] = [
  {
    href: '/courses',
    title: 'courses'
  },
  {
    href: '',
    title: 'detail'
  }
]

export default function page() {
  return (
    <div>
      <BreakCrum data={dataBreackCrum}/>
      <div className='lg:flex gap-4'>
        <div className='lg:w-[70%] w-full'>
          <LeftBar/>
        </div>
        <div className='lg:flex-1 mt-8 lg:mt-0'>
          <TeacherReview/>
        </div>
      </div>
    </div>
  )
}
