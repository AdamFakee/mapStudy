'use client'
import ListClass from '@/components/admin/class/ListClass';
import { useRouter } from 'next/navigation';
import React from 'react'

function Page() {
  const navigation = useRouter();
  const handleNavigation = () => navigation.push('/admin/class/create');
  return (
      <div className='h-full space-y-7 flex flex-col'>
          {/* top */}
          <div className='flex justify-between items-center'>
              <h3>
              Danh sách lớp học của bạn
              </h3>
              <span 
                  onClick={handleNavigation}
                  className='border-[1px] border-green-300 px-3 py-1 rounded-lg'
              >
                  create class
              </span>
          </div>
          {/* course list */}
          <div className='flex-1'>
            <ListClass/>
          </div>
      </div>
  )
}

export default Page