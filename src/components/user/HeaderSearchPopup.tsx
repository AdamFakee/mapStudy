'use client'
import { domain } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';
import { Course } from '@/types/definition';
import Link from 'next/link';
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { CourseCard } from './Card';


interface resultFetch extends ApiResponse {
    metadata: {
        courses: Course[];
    };
}
function HeaderSearchPopup() {
    // ref tới thẻ cha 
    const popupRef = useRef(null);
    const [searchValue, setSearchValue] = useState<string>();
    const [searchResult, setSearchResult] = useState<Course[]>();

    // đóng pop-up khi click bên phần nền back-drop 
    const handleParentClickToExit = (e: React.MouseEvent) => {
        const clickedElement = e.target; 
        const popupElement = popupRef.current;
        // check clickedElement có nằm trong popupElement hay không
        if (popupElement && !popupElement.contains(clickedElement)) {
            const headerSearchPopUp = document.querySelector('div[data-header-search-popup="pop-up"]'); // thẻ cha của thẻ pop-up 
            if(headerSearchPopUp) {
                headerSearchPopUp.classList.add('hidden');
            }
        }
    };

    // đóng pop-up khi click nút exist 
    const handleExitButton = () => {
        const headerSearchPopUp = document.querySelector('div[data-header-search-popup="pop-up"]');  // thẻ cha của thẻ pop-up 
        if(headerSearchPopUp) {
            headerSearchPopUp.classList.add('hidden');
        }
    }

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            const url = domain + `/course/search?search=${searchValue}`;
            const res: resultFetch = await fetchApi({url});
            setSearchResult(res.metadata.courses);
        }
            
    }
    return (
        <div onClick={(e) => handleParentClickToExit(e)} className='w-full h-full flex pl-8 pt-5'>
            <div className='lg:w-[60%] md:w-[80%] h-[80%] bg-[#fff] rounded-lg px-3 py-4' ref={popupRef} >
                {/* header */}
                <div className='flex items-center gap-3 border-gray-200 border-b-[1px] pb-3'>
                    {/* icon */}
                    <div className=''>
                        <AiOutlineClose className='text-lg hover:opacity-40' onClick={() => handleExitButton()}/>
                    </div>
                    {/* search */}
                    <div className='flex-1'>
                        <input 
                            type="text" 
                            placeholder='Tìm kiếm'
                            value={searchValue}
                            onChange={(e) => handleChangeText(e)}
                            className='w-full px-2 py-3 rounded-md outline-none bg-[#f3f4f5]'
                            onKeyDown={(e) => handleSearch(e)}
                        />
                    </div>
                </div>
                {/* result */}
                <div>
                    <div className='text-black font-medium pb-1.5 pt-3 font-bold"'>
                        Hiển thị kết quả tìm kiếm: 
                    </div>
                    {/* list result */}
                    <div className='grid grid-cols-3 gap-2 overflow-y-auto max-h-[450px]'>
                        {
                            searchResult?.map((result, index) => {
                                return (
                                    <div key={index} onClick={() => handleExitButton()}>
                                        <CourseCard item={result}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearchPopup



export function HeaderSearchPopupMobile() {
    // ref tới thẻ cha 
    const popupRef = useRef(null);
    const [searchValue, setSearchValue] = useState<string>();
    const [searchResult, setSearchResult] = useState<Course[]>();
    // đóng pop-up khi click bên phần nền back-drop 
    const handleParentClickToExit = (e: React.MouseEvent) => {
        const clickedElement = e.target; 
        const popupElement = popupRef.current;
        // check clickedElement có nằm trong popupElement hay không
        if (popupElement && !popupElement.contains(clickedElement)) {
            const headerSearchPopUp = document.querySelector('div[data-header-search-popup-mobile="pop-up"]'); // thẻ cha của thẻ pop-up 
            if(headerSearchPopUp) {
                headerSearchPopUp.classList.add('hidden');
            }
        }
    };

    // đóng pop-up khi click nút exist 
    const handleExitButton = () => {
        const headerSearchPopUp = document.querySelector('div[data-header-search-popup-mobile="pop-up"]');  // thẻ cha của thẻ pop-up 
        if(headerSearchPopUp) {
            headerSearchPopUp.classList.add('hidden');
        }
    }
    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            const url = domain + `/course/search?search=${searchValue}`;
            const res: resultFetch = await fetchApi({url});
            setSearchResult(res.metadata.courses);
        }
            
    }
    return (
        <div onClick={(e) => handleParentClickToExit(e)} className='w-full h-full'>
            <div className='w-[80%] h-full bg-[#fff] rounded-tr-lg rounded-br-lg px-3 py-4' ref={popupRef} >
                {/* header */}
                <div className='flex items-center gap-3 border-gray-200 border-b-[1px] pb-3'>
                    {/* icon */}
                    <div className=''>
                        <AiOutlineClose className='text-[#bbbec1] text-lg hover:opacity-40' onClick={() => handleExitButton()}/>
                    </div>
                    {/* search */}
                    <div className='flex-1'>
                        <input 
                            type="text" 
                            placeholder='Tìm kiếm'
                            className='w-full px-2 py-3 rounded-md bg-[#F3f4f5] text-black outline-none'
                            autoFocus={true}
                            onChange={(e) => handleChangeText(e)}
                            onKeyDown={(e) => handleSearch(e)}
                        />
                    </div>
                </div>
                {/* result */}
                <div>
                    <div className='text-black font-medium pb-1.5 pt-3 font-bold"'>
                        Hiển thị kết quả tìm kiếm: 
                    </div>
                    {/* list result */}
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 overflow-y-auto max-h-[80vh]'>
                        {
                            searchResult?.map((result, index) => {
                                return (
                                    <div key={index} onClick={() => handleExitButton()}>
                                        <CourseCard item={result}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}