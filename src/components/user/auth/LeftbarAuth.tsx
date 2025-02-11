import { img } from '@/constants/img'
import Image from 'next/image'
import React from 'react'

interface props {
    title: string,
    subTitle?: string
}

export function ImageAuth ( ) {
    return (
        <Image
            alt='sigup img'
            src={img.signup}
            className='w-full aspect-[500/300]'
        />
    )
}

function LeftbarAuth({ title, subTitle }: props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="w-full mb-8 flex flex-col items-center justify-center">
                <h2 className="lg:text-[2.5rem] text-[2rem] font-bold mb-2">{title}</h2>
                {
                    subTitle && <p className="opacity-70 text-md block w-full text-center"> {subTitle} </p>
                }
            </div>
            <ImageAuth/>
        </div>
    )
}

export default LeftbarAuth