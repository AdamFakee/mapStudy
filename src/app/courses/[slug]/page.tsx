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
    title: 'news'
  }
]

export default function page() {
  return (
    <div>
      <BreakCrum data={dataBreackCrum}/>
      <div className='flex gap-4'>
        <div className='w-[70%]'>
          <LeftBar/>
        </div>
        <div>
          <TeacherReview/>
        </div>
      </div>
    </div>
  )
}
