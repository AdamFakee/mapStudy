import Link from 'next/link'
import React from 'react'

type props = {
    text: string,
    href: string,
}
function ProfileText(props: props) {
  return (
    <div className='hover:bg-slate-500 rounded-md'>
        <Link href={props.href}>
            <div className='text-[20px] px-2 py-1'>{props.text}</div>
        </Link>
    </div>
  )
}

export default ProfileText