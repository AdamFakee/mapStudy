import Image from 'next/image'
import Link from 'next/link';
import { CiCalendarDate } from "react-icons/ci";

interface New {
    id: number,
    thumbnail: string,
    title: string, 
    date: string
}

const NewComponent = ({ item }: { item:New }) => {
    return (
        <div className="flex items-center rounded-md cursor-pointer">
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

export function ListNews ( { data }: { data: New[]} ) {
    return (
        <div className='space-y-1.5'>
            {
                data.map((item) => {
                    return (
                        <Link key={item.id} href='#'>
                            <NewComponent item={item}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}