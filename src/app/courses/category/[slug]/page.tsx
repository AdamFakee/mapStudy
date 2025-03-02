import React from 'react'
import { BreakCrumTypes } from '@/types/definition'
import BreakCrum from '@/components/user/BreakCrum'
import RightBar from '@/components/user/courses/course[slug]/RightBar'
import LeftBar from '@/components/user/courses/course[slug]/LeftBar'

const dataBreackCrum: BreakCrumTypes[] = [
  {
    href: '/courses',
    title: 'courses'
  },
  {
    href: '#',
    title: 'category'
  },
  {
    href: '#',
    title: 'khoa hoc moi nhat'
  }
]

export default function page() {
  return (
    <div className='space-y-2'>
      <BreakCrum data={dataBreackCrum}/>
      <div className='flex gap-4'>
        <div className='md:w-[70%]'>
          <LeftBar/>
        </div>
        <div className='flex-1 md:block hidden'>
          <RightBar/>
        </div>
      </div>
    </div>
  )
}
