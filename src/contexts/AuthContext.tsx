'use client'
import { AuthContextData, Tokens, User } from '@/types/definition';
import { parserJwtToken } from '@/utils/parserJwtToken';
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext<AuthContextData>({} as AuthContextData);

export const useAuthContext = () => useContext(Context);
const AuthContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>();
    useEffect(() => {
        const handleFirstLogin = async () => {
            let accessToken = "", refreshToken = "";
            try {
                const res_at = await fetch("/api/cookies?query=accessToken");
                const res_rf = await fetch("/api/cookies?query=refreshToken");
    
                const [result_at, result_rf] = await Promise.all([
                    res_at.json(),
                    res_rf.json(),
                ]);
    
    
                if (!result_at.data || !result_rf.data) {
                    console.error("Lỗi: API không trả về dữ liệu hợp lệ");
                    return;
                }
    
                accessToken = result_at.data.accessToken;
                refreshToken = result_rf.data.refreshToken;
    
            } catch (error) {
                console.error("Lỗi khi lấy token:", error);
            }
            if (accessToken && refreshToken) {
                const parsedAccessToken = parserJwtToken(accessToken);
                const parsedRefreshToken = parserJwtToken(refreshToken);
                const matchObjs: boolean = parsedAccessToken?.email === parsedRefreshToken?.email; // so sánh data trong token 
                setUser(prevUser => {
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
    }
    const handleLogout = async (): Promise<void> => {
        // delete token into cookie 
        try {
            await fetch('/api/cookies', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'refreshToken' })
            })
            await fetch('/api/cookies', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'accessToken' })
            })
        } catch (error) {
            console.log(error)
        }
        setUser({
            email: '', isLogin: false
        });
    }

    const handleGetToken = async (key: string): Promise<string> => {
        let token: string = '';
        try {
            const res = await fetch(`/api/cookies?query=${key}`);

            const result = await res.json();
            token = result.data[key];

        } catch (error) {
            console.log(error)
        }
        return token ? token : '';
    };
    return (
        <Context.Provider value={{ user, setUser, handleGetToken, handleLogin, handleLogout }}>
            {children} 
        </Context.Provider>
    )
}

export default AuthContext