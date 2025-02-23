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
                <div className="relative w-full h-full flex items-center p-8 gap-8">
                    <img className="col-span-4 justify-self-end h-[200px] aspect-square rounded-lg shadow-md" src={thumbnail} alt={title}/>
                    <div className="col-span-8">
                        <h1 className="font-medium text-xl">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner