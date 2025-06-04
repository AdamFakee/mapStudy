/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface props {
    thumbnail: string,
    title: string
}

function Banner({ thumbnail, title }: props) {
    return (
        <div className="relative rounded-lg overflow-hidden">
            <div className="relative w-full flex justify-center items-center aspect-video text-white text-2xl font-medium">
                <div className="absolute w-full h-full bg-[rgb(26,75,138,0.25)]"></div>
                <div className="relative w-full h-full flex md:flex-row flex-col items-center md:p-8 p-4 md:gap-8 gap-4 mb-0 sm:mb-3">
                    <img className=" md:h-[200px] h-[150px] aspect-square rounded-lg shadow-md" src={thumbnail} alt={title}/>
                    <div className="">
                        <h1 className="font-medium text-xl">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner