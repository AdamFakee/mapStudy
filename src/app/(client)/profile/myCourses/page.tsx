'use client'
import { CourseCard } from '@/components/user/Card';
import { domain } from '@/constants/domain';
import { useAuthContext } from '@/contexts/AuthContext';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { Course } from '@/types/definition';
import React, { useEffect, useState } from 'react'


interface resultFetch extends ApiResponse {
    metadata: {
        courses: Course[];
    };
}
function Page() {
  const [courses, setCourses] = useState<Course[]>();
  const {user, handleGetToken} = useAuthContext();
  // call api
  useEffect(() => {
    const url: string = domain + '/enrollment/courseBought';
    
    const fetchCourse = async () => {
      const accessToken = await handleGetToken('accessToken');
      if(!accessToken) {
          return;
      }
      const header: HeadersInit = {
          'x-client-email':  user ? user.email : '',
          'authorization': accessToken
      };
      const opts: fetchOptions = {
          header
      }
      try {
          const res = await fetchApi<resultFetch>({ url, opts });
          setCourses(res?.metadata?.courses || []);
      } catch (error) {
          console.log('err::::',error)
      } 
    }
    fetchCourse();
  }, [handleGetToken, user])
  return (
    <div className='minHeight'>
      <div>
        <div>
          {/* list courses */}
          <div className='grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-6'>
              {
                  courses?.map(( item ) => {
                      return (
                          <div
                              key={item.courseId}
                          >
                              <CourseCard item={item}/>
                          </div>
                      )
                  })
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page