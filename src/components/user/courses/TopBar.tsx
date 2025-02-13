'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
    title: string;
    classNumber: string
}

const defaultItem: Props[] = [
    { title: 'Tất cả', classNumber: 'all' },
    { title: 'Lớp 12', classNumber: '12' },
    { title: 'Lớp 11', classNumber: '11' },
    { title: 'Lớp 10', classNumber: '10' },
    { title: 'Lớp 9', classNumber: '9' }
];

function TopBar({ items = defaultItem }: { items?: Props[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const classQuery = searchParams.get('class'); 
    const [classPage, setClassPage] = useState<string>(classQuery ? classQuery : 'all');

    useEffect(() => {
        // Cập nhật classPage khi URL thay đổi
        setClassPage(classQuery ? classQuery : 'all');
    }, [classQuery]);

    // cập nhật url
    const handleSetClassSearchQuery = (classNumber: string) => {
        const queryParams = new URLSearchParams(searchParams.toString());
        if (classNumber.trim()) {
            queryParams.set('class', classNumber.trim());
        }
        router.push(`/courses?${queryParams.toString()}`, { scroll: false });
    };

    return (
        <div className='flex items-center border-b-[0.5px] border-gray-300 mb-4'>
            {items.map((item, index) => {
                const isActive = classPage === item.classNumber; 
                return (
                    <div 
                        key={index} 
                        className={`px-3 py-2 cursor-pointer ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`} 
                        onClick={() => handleSetClassSearchQuery(item.classNumber)}
                    >
                        <p className="text-md text-center">{item.title}</p>
                        {isActive && <div className='h-1 rounded-sm bg-blue-600 w-full'></div>}
                    </div>
                )
            })}
        </div>
    );
}

export default TopBar;
