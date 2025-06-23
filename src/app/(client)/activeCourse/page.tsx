'use client'
import { domain } from '@/constants/domain';
import { useAuthContext } from '@/contexts/AuthContext';
import { ApiResponse, fetchApi, fetchOptions } from '@/customLib/fetchApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { PiSealWarning } from 'react-icons/pi';

interface resultFetch extends ApiResponse {
    metadata: {
        courseId: string;
    }
}
function Page() {
    const { user, handleGetToken } = useAuthContext();
    const [key, setKey] = useState<string>('');
    const [err, setErr] = useState<string>();
    const router = useRouter();

    const fetchKeyAction = async () => {
        if(!key) {
            setErr('Vui lòng nhập mã kích hoạt');
            return;
        }
        const accessToken = await handleGetToken('accessToken');            
        const header:HeadersInit ={
            'x-client-email': user?.email || '',
            'authorization': accessToken,
        }
        const opts: fetchOptions = {
            method: 'POST',
            body: {key},
            header
        }
        const url = domain + '/enrollment/create';
        const res: resultFetch = await fetchApi({url, opts});
        if(res.status === 200) {
            router.replace(`/courses/${res.metadata.courseId}`);
            return;
        } else {
            setErr(res.message);
        }
    }
    return (
        <div className='fixedHeight'>
            <div className='md:w-[80%] h-[60%] rounded-lg text-center space-y-6 bg-[#fff] pt-14 mx-auto'>
                <h2 className='text-primary font-semibold text-xl'>Nhập mã kích hoạt</h2>
                <div className='flex flex-col items-center gap-5'>
                    <input
                        className="grow py-3 rounded-lg bg-gray-200 md:w-[400px] w-[90%] placeholder:text-[#99AEBE] outline-0 pl-4"
                        placeholder='Nhập mã kích hoạt'
                        name='key'
                        value={key}
                        onChange={e => setKey(e.target.value)}
                        autoFocus={true}
                    />
                    {
                        err && (
                            <div className="flex items-center gap-2 mt-0.5">
                                <PiSealWarning className="text-red-500"/>
                                <p className="text-sm text-red-500 first-letter:uppercase">
                                    {err}
                                </p>
                            </div>
                        )
                    }
                    <button 
                        className='bg-primary-light text-white h-[38px] w-[100px] rounded-lg hover:bg-primary-typo-hover'
                        onClick={() => fetchKeyAction()}
                    >
                        Kích hoạt
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page