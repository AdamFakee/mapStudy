import React from 'react'
import { ListNews } from './rightBar/ListNews'
import data from '@/data/news.json'
import Image from 'next/image'
import { icon } from '@/constants/icon'

function RightBar() {
    return (
        <div className='w-[22%] hidden xl:block space-y-10 overflow-y-auto sticky scroll-y-hidden' style={{ maxHeight: "calc(-56px + 100vh)"}}>
            {/* button */}

            {/* banner */}
            <div>
                <Image
                    src={icon.bannerHome}
                    alt='banner'
                    className='aspect-square h-auto w-full rounded-lg'
                />
            </div>
            {/* news */}
            <ListNews data={data}/>
        </div>
    )
}

export default RightBar