import Link from 'next/link'
import React from 'react'

interface Category {
    id: number,
    title: string
}

const Component = ({ item }: { item: Category }) => {
    return (
        <div className="px-4 py-2 text-cp text-[#844E0D] bg-[#F4D0A4] rounded-xl">
            {item.title}
        </div>
    )
}

function SearchCategories({ data }: { data: Category[]}) {
    return (
        <div className="px-6 py-3 space-y-5">
            <h3 className="font-medium text-xl bg-gradient-to-b from-[#f9e2a7] via-[#f9e2a7] to-[#f9e2a7] text-transparent bg-clip-text">Bạn đang tìm kiếm gì ?</h3>
            <div className='flex gap-3 flex-wrap'>
                {
                    data.map(item => {
                        return (
                            <Link
                                href='#'
                                key={item.id}
                            >
                                <Component item={item}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchCategories