'use client'
import React, { useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";

function HeaderSearchPopup() {
    // ref tới thẻ cha 
    const popupRef = useRef(null);

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
                            className='w-full px-2 py-3 rounded-md outline-none bg-[#f3f4f5]'
                        />
                    </div>
                </div>
                {/* result */}
                <div>
                    <div className='text-black font-medium pb-1.5 pt-3 font-bold"'>
                        Hiển thị kết quả tìm kiếm: 
                    </div>
                    {/* list result */}
                    <div>

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
                        />
                    </div>
                </div>
                {/* result */}
                <div>
                    <div className='text-black font-medium pb-1.5 pt-3 font-bold"'>
                        Hiển thị kết quả tìm kiếm: 
                    </div>
                    {/* list result */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}