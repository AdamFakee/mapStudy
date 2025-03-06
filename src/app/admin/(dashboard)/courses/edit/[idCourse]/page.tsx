'use client'
import { Input, Input_Image } from '@/components/admin/Input'
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface courseInDbType {
  thumbnail: string
}
function Page() {
  const [ selectedFile, setSelectedFile ] = useState<File | undefined>();
  const [ courseInDb, setCourseInDb ] = useState<>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const files = e.target.files;
    if( !files ) return;
    setSelectedFile(files[0]);
  }

  return (
    <div>
      <div className='font-medium text-gray-400 text-xl mb-4'>
        Chỉnh sửa khóa học 
      </div>
      <form 
        action=""
        className='space-y-4'
      >
        <Input name='name' label='tên khóa học'/>
        <Input name='description' label='mô tả khóa học'/>
        <Input_Image name='thumbnail' label='ảnh khóa học' fn={handleFileChange}/>
      </form>
    </div>
  )
}

export default Page