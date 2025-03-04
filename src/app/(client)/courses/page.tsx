import ListCategory from '@/components/user/courses/ListCategory'
import React from 'react'
import FilterSideBar from '@/components/user/courses/FilterSideBar'
import TopBar from '@/components/user/courses/TopBar'
import ListCourses from '@/components/user/courses/ListCourses'


function page() {
  return (
    <div>
      {/* category */}
      <ListCategory/>
      {/* course */}
      <div className='minHeight space-y-3'>
        <p className="font-semibold text-xl text-secondary-typo pt-4">KHOÁ HỌC</p>
        <div className='lg:flex gap-6 h-full'>
          {/* left bar */}
          <div className='lg:w-[25%] sticky top-[56px] backdrop-blur-xl z-10'>
            <FilterSideBar/>
          </div>
          {/* right bar */}
          <div className='flex-1'>
            <TopBar/>
            <ListCourses api='/course/search'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page