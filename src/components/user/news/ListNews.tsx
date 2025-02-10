import { New } from '@/types/definition'
import Link from 'next/link'
import React from 'react'
import { NewComponent } from '../NewComponent'

function ListNews({ data }: { data: New[] }) {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4'>
            {
                data.map(( item ) => {
                    return (
                        <Link
                            href='#'
                            key={item.id}
                        >
                            <NewComponent item={item} ortherStyle='hover:shadow-lg bg-[#fff] duration-150 px-2'/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ListNews