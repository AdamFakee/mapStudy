'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo, useState } from 'react';

const CreateArray = ( range: number ) => {
    return Array.from({ length: range }, (_, index) => index + 1); // array have length = range
}

function Pagination({ totalPage }: { totalPage: number }) {
    const [pages, setPages] = useState<number[]>([]);
    const searchParams = useSearchParams();
    const currentPage: string = searchParams.get('page') || '1';
    const router = useRouter();
    useMemo(() => {
        setPages(CreateArray(totalPage)); // Update the pages state
    }, [totalPage])

    const handleSearch = ( page: number ) => {
        const queryParams = new URLSearchParams(searchParams.toString())
        if(page) {
            queryParams.set('page', page + '')
        };
        router.push(`/courses?${queryParams}`)
    }
    return (
        <div className={`items-center mt-6 justify-center ${totalPage <= 1 ? 'hidden' : 'flex'}`}>
            <nav className="relative z-0 flex justify-end rounded-md -space-x-px flex-wrap" aria-label="Pagination">
                <div className="flex items-center gap-1.5">
                
                    {/* Previous Button */}
                    <div className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-[#eeeeee] active:bg-[#e0e0e0] cursor-pointer duration-100 pointer-events-none opacity-25">
                        <svg className="w-4.5 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#333333" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    
                    {/* Page Number Elements */}
                    {pages.map((page) => {
                        const isPage:boolean = page === parseInt(currentPage);
                        
                        return (
                            <div
                                key={page}
                                onClick={() => handleSearch(page)}
                                className={`border rounded-md relative flex items-center justify-center h-9 text-md cursor-pointer duration-100 w-9 font-medium hover:opacity-80`}
                                style={{
                                    color: isPage ? "#128ce9" : "#222",
                                    borderColor: isPage ? "#128ce9" : "transparent"
                                }}
                            >
                                {page}
                            </div>
                        );
                    })}


                    {/* Next Button */}
                    <div className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-[#eeeeee] active:bg-[#e0e0e0] cursor-pointer duration-100 pointer-events-none opacity-25">
                        <svg className="w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#333333" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                
                </div>
            </nav>
        </div>
    );
}

export default Pagination;
