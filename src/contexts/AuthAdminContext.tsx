'use client'
import { AuthAdminContextData, User } from '@/types/definition';
import { parserJwtToken } from '@/utils/parserJwtToken';
import { getCookie, setCookie } from 'cookies-next/client';
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext<AuthAdminContextData>({} as AuthAdminContextData);

export const useAuthAdminContext = () => useContext(Context);
const AuthAdminContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>({
        isLogin: false,
        email: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const handleLogin: AuthAdminContextData['handleLogin'] = ({ email, tokens }) => {
        setUser({
            isLogin: true,
            email: email,
        })
        setCookie('accessToken', tokens.accessToken, {
            path: '/admin'
        });
        setCookie('refreshToken', tokens.refreshToken, {
            path: '/admin'
        });
    }

    useEffect(() => {
        setIsLoading(true);
        const accessToken = getCookie('accessToken');
        if(accessToken) {
            const parserToken = parserJwtToken(accessToken);

            setUser({
                email: parserToken?.email || '',
                isLogin: true
            })
        }
        setIsLoading(false);
    }, [])
    return (
        <Context.Provider value={{ user, isLoading, setUser, handleLogin }}>
            {children} 
        </Context.Provider>
    )
}

export default AuthAdminContext