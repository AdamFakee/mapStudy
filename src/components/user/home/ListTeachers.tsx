"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface Teacher {
  id: string;
  name: string;
  thumbnail: string;
}

const TeacherCard = ({ item }: { item: Teacher }) => {
  return (
    <div className="relative w-[180px] h-[230px] flex flex-col items-center">
      <div className="relative w-[140px] h-[155px] overflow-hidden rounded-lg">
        <Image
          src={item.thumbnail}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="absolute bottom-0 w-[140px] h-[49px] bg-white text-[13px] text-[#B21218] font-bold text-center flex items-center justify-center rounded-lg shadow-md">
        {item.name}
      </p>
    </div>
  );
};

const TitleComponent = () => {
    return (
        <div className="flex items-center justify-between uppercase text-[#B21218] pl-[2.5%]">
            <h3 className="font-bold text-lg">Giáo viên Mapstudy</h3>
            <Link className="cursor-pointer" href="#">
                <p className="text-cp font-medium">Xem tất cả</p>
            </Link>
        </div>
    )
}

function ListTeachers({ data }: { data: Teacher[] }) {
  return (
    <div className="relative w-full space-y-3">
        <TitleComponent/>
        <Swiper
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, 
            480: { slidesPerView: 2.5, spaceBetween: 0 },
            750: { slidesPerView: 3.5, spaceBetween: 0 }, 
            1145: { slidesPerView: 4.5, spaceBetween: 0 },
          }}
        >
            {data.map((item) => (
            <SwiperSlide key={item.id}>
                <Link href="#">
                <TeacherCard item={item} />
                </Link>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default ListTeachers;