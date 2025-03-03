'use client'
import { img } from "@/constants/img"
import { useAuthContext } from "@/contexts/AuthContext"
import Image from "next/image"
import Link from "next/link"

interface mustByCourseType {
    title?: string, subTitle?: string, linkTo?: string
}
export const MustBeByCourse = ({
    title = 'Bạn không có quyền truy cập vào khóa học này', subTitle = 'Đăng ký ngay', linkTo = '/activeCourse'
}: mustByCourseType) => {
    return (
        <div className="w-full h-full bg-transparent flex flex-col justify-center items-center">
            {/* img */}
            <Image
                src={img.signup}
                alt="must be by course"
                className="w-[50%] h-[30%]"
            />
            {/* title */}
            <div className="text-center">
                <div className="mb-2 mt-12 text-center text-2xl font-semibold text-secondary-typo">
                    {title}
                </div>
                <Link
                    href={linkTo}
                >
                    <div className="font-medium text-gray-300 text-xl">{subTitle}</div>
                </Link>
            </div>
        </div>
    )
}


export const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-[#f3f4f5]">
            <Image
                src={img.loading}
                alt="laoding..."
                className="w-[60%] h-[60%]"
            />
        </div>
    )
}
