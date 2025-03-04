import LeftBarLayOut from '@/components/admin/LeftBarLayOut';

function DashBoardLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-full flex bg-background gap-2'>
            {/* left bar */}
            <div className='w-[5%] fixedHeightAdmin py-2'>
                    <LeftBarLayOut/>
                </div>
                {/* content */}
                <div className='minHeightAdmin bg-[#f3f4f5] border-l-[1px] border-[#222] flex-1 px-3 py-2'>
                    {children}
                </div>
        </div>
    )
}

export default DashBoardLayout;