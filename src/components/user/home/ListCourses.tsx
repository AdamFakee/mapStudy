'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft  } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Course } from '@/types/definition';
import { CourseCard } from '../Card';
import { domain } from '@/constants/domain';
import { ApiResponse, fetchApi } from '@/customLib/fetchApi';


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

interface resultFetch extends ApiResponse {
    metadata: {
        courses: Course[];
    }
}

function ListCourses({ isNew, isHot, title }: { isNew: boolean, isHot: boolean, title: string }) {
    // ref to swiper
    const swiperRef = useRef<any>(null)

    // call api
    const [ courses, setCourses ] = useState<Course[]>(); 
    const url: string = domain + `/course/filter?isNew=${isNew}&isHot=${isHot}`;
      
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const result = await fetchApi<resultFetch>({ url });
                setCourses(result.metadata.courses);
            } catch (error) {
                throw new Error('Fetch error: ' + error);
            }
        };

        fetchCourse();
    }, [url]);
    
    // still loading
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
                {courses?.map((item) => (
                    <SwiperSlide key={item.courseId}>
                        <CourseCard item={item} />
                    </SwiperSlide>
                ))}        
            </Swiper>
        </div>
    )
}

export default ListCourses