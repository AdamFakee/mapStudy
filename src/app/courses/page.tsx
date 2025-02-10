import ListCategory from '@/components/user/courses/ListCategory'
import React from 'react'
import dataCategory from '@/data/category.json' 

function page() {
  return (
    <div>
      {/* category */}
      <ListCategory data={dataCategory}/>
      {/* course */}
      <div>
        
      </div>
    </div>
  )
}

export default page