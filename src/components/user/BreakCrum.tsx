import { BreakCrumTypes } from '@/types/definition'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { RiHome9Line } from "react-icons/ri";


function BreakCrum({ data }: { data: BreakCrumTypes[] }) {
    return (
        <div className='inline-flex items-center gap-2'>
            <div className='inline-flex items-center gap-1.5'>
                <Link
                    href='#'
                    key={'xxx'}
                >
                    <RiHome9Line/>
                </Link>
                <IoIosArrowForward className='text-primary'/>
            </div>
            {
                data.map(( item, index ) => {
                    const isLastItem = index === data.length - 1;
                    return (
                        <div
                            key={index}
                            className='inline-flex items-center gap-1.5'
                        >
                            <Link
                                href='#'
                            >
                                <span className={`${isLastItem ? 'text-primary' : ''}`}>{item.title}</span>
                            </Link>
                            {
                                isLastItem === false && <IoIosArrowForward className='text-primary'/>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BreakCrum