'use client';
import { domain } from '@/constants/domain';
import { useAuthContext } from '@/contexts/AuthContext';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import React, { useEffect, useState } from 'react'

interface InforUser {
    name: string,
    thumbnail: null | string,
    email: string,
}
interface resultFetch extends ApiResponse {
    metadata: {
        user: InforUser
    };
}

function InforText (props: {
    text: string | undefined, lable: string
}) {
    return (
        <div className=''>
            <div>{props.lable}</div>
            <div className='h-[30px] w-full rounded-md bg-slate-400 px-3 py-2 flex items-center'>{props.text}</div>
        </div>
    )
}

function Page() {
    const [userInfor, setUserInfor] = useState<InforUser>();
    const { user, handleGetToken } = useAuthContext();
    useEffect(() => {
    const fetch = async () => {
        try {
            const accessToken = await handleGetToken('accessToken');

            const header: HeadersInit = {
                'x-client-email': user?.email || '',
                'authorization': accessToken
            };
            const opts: fetchOptions = {
                header
            }
            const url = domain + '/user';
            const res = await fetchApi<resultFetch>({ url, opts });
            setUserInfor(res.metadata.user);
        } catch (error) {
            console.log(error)
        }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='minHeight w-[40%] mx-auto'>
            <div className='bg-gray-200 px-4 py-2 rounded-md'>
                <div className='flex flex-col items-center gap-3'>
                    <div>Thông tin cá nhân</div>
                    <div className='w-[80px] aspect-square bg-slate-500 rounded-full justify-center items-center flex'>
                        {
                            userInfor?.thumbnail ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={userInfor.thumbnail} alt="User thumbnail" className="w-full aspect-square rounded-full" />
                            ) : (
                                <div className="text-6xl">
                                A
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <InforText lable='name' text={userInfor?.name}/>
                    <InforText lable='email' text={userInfor?.email}/>
                </div>
            </div>
        </div>
    )
}

export default Page

