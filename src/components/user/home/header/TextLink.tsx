import { useAuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import React from 'react'

interface textLinkProps {
    href: string,
    text: string,
    icon?: React.ReactNode,
    isEnd: boolean,
    otherStyles?: string
}

function TextLink({ href, text, icon = null, isEnd, otherStyles = '' }: textLinkProps) {
    return (
        <Link
            href={href}
            className='whitespace-nowrap'
        >
            <div className={`text-[#b21218] hover:text-[#9c3135] flex gap-3 ${otherStyles}`}>
                {icon}
                <p className='font-medium'>{text}</p>

                {!isEnd && <div className='border-[1px] border-[#b21]'></div>
                }
                
            </div>
        </Link>
    )
}

export default TextLink


export function TextLink_Logout({ text, icon = null, isEnd, otherStyles = '' }: textLinkProps) {
    const { user, handleGetToken, handleLogout } = useAuthContext();
    const logout = async (): Promise<void> => {
        if(!user || !user.email || !user.isLogin) return;
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'x-client-email': user.email,
            "authorization": await handleGetToken('accessToken'),
        }
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'DELETE',
                headers: headers,
            })
            const result =  await res.json();
            if(result.status === 200) {
                await handleLogout();
            }
            return;
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div 
            onClick={() => logout()}
            className={`text-[#b21218] hover:text-[#9c3135] flex gap-3 whitespace-nowrap ${otherStyles}`}
        >
            {icon}
            <p className='font-medium'>{text}</p>

            {!isEnd && 
                <div className='border-[1px] border-[#b21]'></div>
            }
            
        </div>
    )
}