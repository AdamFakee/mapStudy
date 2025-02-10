import Link from 'next/link'
import React from 'react'

interface textLinkProps {
    href: string,
    text: string,
    icon?: React.ReactNode,
    isEnd: boolean
}

function TextLink({ href, text, icon = null, isEnd }: textLinkProps) {
    return (
        <Link
            href={href}
            className='whitespace-nowrap'
        >
            <div className='text-[#b21218] hover:text-[#9c3135] flex gap-3'>
                {icon}
                <p className='font-medium'>{text}</p>

                {!isEnd && <div className='border-[1px] border-[#b21]'></div>
                }
                
            </div>
        </Link>
    )
}

export default TextLink