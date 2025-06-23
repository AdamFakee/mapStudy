'use client'
import { AuthContextData, Tokens, User } from '@/types/definition';
import { parserJwtToken } from '@/utils/parserJwtToken';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext<AuthContextData>({} as AuthContextData);

export const useAuthContext = () => useContext(Context);
const AuthContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const handleFirstLogin = async () => {
            const accessToken = await getCookie('accessToken');
            const refreshToken = await getCookie('refreshToken');            
            if (accessToken && refreshToken) {
                const parsedAccessToken = parserJwtToken(accessToken);
                const parsedRefreshToken = parserJwtToken(refreshToken);
                const matchObjs: boolean = parsedAccessToken?.email === parsedRefreshToken?.email; // so sánh data trong token 
                setUser(prevUser => {
                    console.log(prevUser)
                    if(matchObjs) {
                        return {
                            email: parsedAccessToken?.email || "",
                            isLogin: true,
                        }
                    } else {
                        return {
                            email: "", isLogin: false
                        }
                    }
                });
                
            } else {
                setUser({ email: "", isLogin: false });
            }
            setIsLoading(true)
        };
        
        handleFirstLogin();

    }, []);
    
    const handleLogin = async ({ email, tokens }: { email: string, tokens: Tokens }): Promise<void> => {
        // set token into cookie 
        try {
            await fetch('/api/cookies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...tokens })
            })
        } catch (error) {
            console.log(error)
        }
        setUser({
            email: email, isLogin: true
        })

        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        deleteCookie('userEmail')

        setUser({
            isLogin: true,
            email: email,
        })
        setCookie('accessToken', tokens.accessToken);
        setCookie('refreshToken', tokens.refreshToken);
        setCookie('userEmail', email)
                    setIsLoading(true)

    }
    const handleLogout = async (): Promise<void> => {
        setUser({
            email: '', isLogin: false
        });
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        deleteCookie('userEmail')
    }

    const handleGetToken = async (key: string): Promise<string> => {
        return await getCookie(key) || '';
    };
    return (
        <Context.Provider value={{ user, isLoading, setUser, handleGetToken, handleLogin, handleLogout }}>
            {children} 
        </Context.Provider>
    )
}

export default AuthContext