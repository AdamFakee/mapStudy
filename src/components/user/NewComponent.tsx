import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";
import { New } from '@/types/definition'

export const NewComponent = ({ item, ortherStyle }: { item:New, ortherStyle?: string }) => {
    return (
        <div className={`flex items-center rounded-md cursor-pointer ${ortherStyle}`}>
            <Image
                src={item.thumbnail}
                alt={item.date}
                width={66}
                height={66}
                className='rounded-md'
            />
            <div className="flex-1 min-h-[4.75rem] h-full ml-4 flex flex-col justify-center">
                <p className="text-[#692626] font-medium">{item.title}</p>
                <div className="flex items-center gap-1">
                    <CiCalendarDate/>
                    <p className='text-sm text-[#692626] opacity-50'>{item.date}</p>
                </div>
            </div>
        </div>
    )
}