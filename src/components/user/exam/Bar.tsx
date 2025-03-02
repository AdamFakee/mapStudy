
export const Bar = ({ pos }: { pos: number} ) => {
    return (
        <div className="flex w-full px-5 py-5 bg-white rounded-xl shadow-sm items-center border border-[#0F80CC] cursor-pointer">
            <div className="flex-1 flex flex-col gap-2 md:gap-0.5 relative">
                <div className="text-lg font-semibold text-[#0F80CC]">
                    {pos}. Đề thi số {pos}
                </div>
                <div className="flex gap-2 items-center font-medium text-[13px] text-white justify-center px-2 rounded-xl bg-[#0F80CC] absolute top-[-95%] left-[-2%]">
                    V-ACT
                </div>
            </div>
            <div className="flex shrink-0 gap-3">
                <div className="text-base flex items-center justify-center h-10 px-8 rounded-full font-medium bg-[#12AD50] text-white ">
                    Xem
                </div>
            </div>
        </div>
    )
}