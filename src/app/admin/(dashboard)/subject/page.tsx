'use client'
import ListSubject from '@/components/admin/subject/ListSubject';
import { useRouter } from 'next/navigation';
import React from 'react'

function Page() {
  const navigation = useRouter();
  const handleNavigation = () => navigation.push('/admin/subject/create');
  return (
      <div className='h-full space-y-7 flex flex-col'>
          {/* top */}
          <div className='flex justify-between items-center'>
              <h3>
              Danh sách môn học của bạn
              </h3>
              <span 
                  onClick={handleNavigation}
                  className='border-[1px] border-green-300 px-3 py-1 rounded-lg'
              >
                  create subject
              </span>
          </div>
          {/* course list */}
          <div className='flex-1'>
            <ListSubject/>
          </div>
      </div>
  )
}

export default Page