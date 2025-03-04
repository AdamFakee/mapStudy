import React from 'react'
import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <button 
            onClick={() => {
                const headerSearchPopUp = document.querySelector('div[data-header-search-popup="pop-up"]');
                if(headerSearchPopUp) {
                    headerSearchPopUp.classList.toggle('hidden');
                }
            }}
            className='h-[38.5px] w-[38.5px] xl:w-[208px] rounded-full bg-[rgba(26,79,140,0.06)] flex gap-[6px] lg:px-[6px] lg:py-[4px] justify-center items-center lg:rounded-lg'
        >
            <div className='flex-1 text-start text-[#a3b6c6] xl:block hidden'>Tìm kiếm</div>
            <CiSearch className='text-xl'/>
        </button>
    )
}

export default Search



export function SearchMobile() {
    return (
        <button 
            onClick={() => {
                const headerSearchPopUp = document.querySelector('div[data-header-search-popup-mobile="pop-up"]');
                if(headerSearchPopUp) {
                    headerSearchPopUp.classList.toggle('hidden');
                }
            }}
            className='h-[38.5px] w-[38.5px] xl:w-[208px] rounded-full bg-[rgba(26,79,140,0.06)] flex gap-[6px] lg:px-[6px] lg:py-[4px] justify-center items-center lg:rounded-lg'
        >
            <div className='flex-1 text-start text-[#a3b6c6] xl:block hidden'>Tìm kiếm</div>
            <CiSearch className='text-xl'/>
        </button>
    )
}
