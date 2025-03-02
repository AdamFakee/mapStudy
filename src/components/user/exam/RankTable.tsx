import React from 'react'
import { GiVikingHelmet } from "react-icons/gi";

const Cadidate = ({ pos }: {pos: number}) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='inline-flex items-center gap-3'>
                {/* number pos */}
                <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-red-400 border-[2px] border-blue-400 font-semibold text-xl text-white'>
                    {pos}
                </div>
                <div className='relative w-[40px] h-[40px] rounded-full inline-flex justify-center items-center bg-gray-300 border-[2px] border-yellow-200'>
                    <div className='flex justify-center items-center text-white font-medium uppercase text-xl'>
                        T
                    </div>
                    <div className='absolute top-[-38%]'>
                        <GiVikingHelmet />
                    </div>
                </div>
                <div className='text-sm font-light text-gray-400'>
                    {/* candidate name */}
                    <div>
                        Candidate Name
                    </div>
                    <div >
                        3 phút 26 giây
                    </div>
                </div>
            </div>
            <div className='text-red-200 text-sm font-medium'>
                1190
            </div>
        </div>
    )
}
export default function RankTable() {
    return (
        <div className='space-y-3 w-full px-5 py-3 bg-[#fff] shadow-sm rounded-xl'>
            <div className='text-primary text-xl font-bold'>
                Bảng xếp hạng 
            </div>
            <div className='space-y-6 w-full'>
                <Cadidate pos={1}/>
                <Cadidate pos={2}/>
                <Cadidate pos={3}/>
                <Cadidate pos={4}/>
                <Cadidate pos={5}/>
                <Cadidate pos={6}/>
                <Cadidate pos={7}/>
                <Cadidate pos={8}/>
            </div>
        </div>
    )
}
