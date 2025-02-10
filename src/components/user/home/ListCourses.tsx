'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft  } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Course } from '@/types/definition';
import { CourseCard } from '../Card';


const TitleComponent = ({ title, swiperRef }: { title: string, swiperRef: any }) => {
    const handlePrevSlide = () => swiperRef.current?.slidePrev()
    const handleNextSlide = () => swiperRef.current?.slideNext()

    return (
        <div className='flex justify-between items-center'>
            <p className="text-[#B21218] uppercase text-lg font-bold pl-[1.2%]">{title}</p>
            <div className='space-x-3'>
                <button className='' onClick={handlePrevSlide}>
                    <FaLongArrowAltLeft className='text-2xl'/>
                </button>
                <button onClick={handleNextSlide}>
                    <FaLongArrowAltRight className='text-2xl'/>
                </button>
            </div>
        </div>
    )
}

function ListCourses({ data, title }: { data: Course[], title: string }) {
    const swiperRef = useRef<any>(null)
    return (
        <div className='space-y-3'>
            <TitleComponent title={title} swiperRef={swiperRef}/>
            <Swiper
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 }, 
                    480: { slidesPerView: 3, spaceBetween: 10 },
                    950: { slidesPerView: 3, spaceBetween: 0 }, 
                    1240: { slidesPerView: 4, spaceBetween: 0 }
                }}
                className="w-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Gán swiper instance vào ref
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CourseCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ListCourses