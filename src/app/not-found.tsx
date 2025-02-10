import Link from 'next/link'
 
export default function NotFound() {
    return (
        <div 
            className='fixedHeight flex flex-col justify-center items-center gap-4'
        >
            <div 
                className="text-[88px] md:text-[130px] lg:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CB356B] to-[#CB356B]"
            >
                404
            </div>

            <div className="-mt-4 sm:-mt-10 ml-2 text-xl sm:text-2xl font-bold">Trang không tồn tại</div>
            <Link 
                href="/"
                className="mt-24 bg-[#CB356B] px-6 py-3 sm:px-8 sm:py-3 text-white font-medium sm:text-md lg:text-lg rounded-full cursor-pointer hover:opacity-90"
            >
                Quay lại trang chủ
            </Link>
        </div>
    )
}