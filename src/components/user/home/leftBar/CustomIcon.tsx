import Image from 'next/image'
import React, { FunctionComponent } from 'react'

interface props {
    icon: React.ReactNode | string,
    title?: string
}

function CustomIcon({ icon, title}: props) {
    return (
        <div className="flex items-center justify-start hover:bg-[rgba(26,79,140,0.06)] gap-1.5 rounded-lg px-[4px] py-2.5 cursor-pointer">
            {icon}
            <p className='font-medium h-full'>{title}</p>
        </div>
    )
}

export function CustomIconMobile ({ icon }: { icon: React.ReactNode }) {
    return (
        <div
            className="flex items-center justify-center rounded-lg px-4 py-2.5 cursor-pointer hover:bg-[rgba(26,79,140,0.06)] transition"
        >
            {icon}
        </div>
    )
}

export function CustomIconMenu ({ icon, handleOpenMenu }: { icon: React.ReactNode, handleOpenMenu: (event?: React.MouseEvent<HTMLDivElement>) => void }) {
    return (
        <div className="w-[64px] block lg:hidden">
            <div onClick={handleOpenMenu}
                className=" flex items-center justify-center rounded-lg px-4 py-2.5 cursor-pointer hover:bg-[rgba(26,79,140,0.06)] transition"
            >
                {icon}
            </div>
        </div>
    )
}


export default CustomIcon