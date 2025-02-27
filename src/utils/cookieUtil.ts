import { cookies } from 'next/headers'

export const setCookie = async ( name: string, value: string ): Promise<void>  => {
    const cookieStore = await cookies();
    cookieStore.set(name, value, {
        path: '/',
        expires: new Date( Date.now() + 10 * 60 * 60 * 1000 ),
        secure: true,
    })
} 

export const getCookie = async ( name: string ) => {
    const cookieStore = await cookies();
    return cookieStore?.get(name);
} 

export const delCookie = async ( name: string ): Promise<void> => {
    const cookieStore = await cookies();
    cookieStore.delete(name);
}