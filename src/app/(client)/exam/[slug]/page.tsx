import Quiz from '@/components/user/exam/Quiz'
import RankTable from '@/components/user/exam/RankTable'
import React from 'react'

function page() {
    return (
        <div className='minHeight flex lg:flex-row flex-col gap-3'>
            {/* rank */}
            <div className='xl:w-[30%] lg:w-[40%] h-full order-2 lg:order-1'>   
                <RankTable/>
            </div>
            {/* exam quiz */}
            <div className='flex-1 h-full order-1 lg:order-2'>
                <Quiz/>
            </div>
        </div>
    )
}

export default page