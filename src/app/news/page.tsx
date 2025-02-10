import ListNews from '@/components/user/news/ListNews'
import React from 'react'
import dataNews from '@/data/news.json'
import { BreakCrumTypes } from '@/types/definition'
import BreakCrum from '@/components/user/BreakCrum'

const dataBreackCrum: BreakCrumTypes[] = [
    {
        href: '',
        title: 'news'
    }
]

function page() {
    return (
        <div
            style={{
                maxHeight: 'calc(-56px + 100vh)',
            }}
            className='space-y-5 overflow-y-auto scroll-y-hidden sm:mb-0 mb-[15%]'
        >
            {/* breck crum */}
            <BreakCrum data={dataBreackCrum}/>
            {/* list news */}
            <ListNews data={dataNews}/>
        </div>
    )
}

export default page