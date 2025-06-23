'use client'

import { domainAdmin } from '@/constants/domain';
import { ApiResponse, fetchOptions, fetchApi } from '@/customLib/fetchApi';
import { getCookie } from 'cookies-next';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

interface User {
    user_email: string;
    enrollment_date: string;
}


interface resultFetch extends ApiResponse {
    metadata: {
        users: User[];
    };
}

function PageInner() {
    const [users, setUsers] = useState<User[]>([]);

    const courseId = useSearchParams().get('courseId');

    
    useEffect(() => {
        const fetch = async () => {
            const url = domainAdmin + `/enroll/userBought/${courseId}`;
            const accessToken = await getCookie('accessToken') || '';
            const userEmail = await getCookie('userEmail')
            const decodedEmail = userEmail ? decodeURIComponent(userEmail.toString()) : '';
            console.log(decodedEmail)
            const header: HeadersInit = {
                "authorization": accessToken,
                "x-client-email": decodedEmail
            }
            console.log(header)
            const opts: fetchOptions = {
                header,
            };

            try {
                const res = await fetchApi<resultFetch>({url, opts});
                setUsers(res.metadata.users)
            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courseId]);

    const handleDelete = async (data:{
        courseId: string, userEmail: string
    }) => {
        const url = domainAdmin + `/enroll/del/${data.courseId}/${data.userEmail}`;
        const userEmail = await getCookie('userEmail');
        const decodedEmail = userEmail ? decodeURIComponent(userEmail.toString()) : '';
        const header: HeadersInit = {
            "authorization": getCookie('accessToken')?.toString() || '',
            "x-client-email": decodedEmail
        }
        const opts: fetchOptions = {
            method: 'DELETE',
            header
        }
        try {
            const res = await fetchApi<ApiResponse>({ url, opts })
            if(res.status === 200) {
                setUsers(preValue => {
                    return preValue.filter(user => user.user_email != data.userEmail)
                })
            }

        } catch {
            alert('somthing went wrong');
        }
    }

    if(!courseId) {
        return <>
            
        </>
    }

    if (users.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-8 text-lg">
                Not found
            </div>
        );
    }
    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-200 rounded-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border-b text-left">STT</th>
                        <th className="px-4 py-2 border-b text-left">User Email</th>
                        <th className="px-4 py-2 border-b text-left">Enrollment Date</th>
                        <th className="px-4 py-2 border-b text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b">{index + 1}</td>
                            <td className="px-4 py-2 border-b">{user.user_email}</td>
                            <td className="px-4 py-2 border-b">{new Date(user.enrollment_date).toLocaleDateString()}</td>
                            <td className="px-4 py-2 border-b">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                                    onClick={() => handleDelete({userEmail: user.user_email, courseId: courseId})}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default function Page() {
    return (
        <Suspense fallback={<div className="text-gray-500 text-center mt-10">Loading...</div>}>
            <PageInner />
        </Suspense>
    );
}