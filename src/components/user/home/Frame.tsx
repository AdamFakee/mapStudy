import React from 'react'

function Frame({ children }: { children: React.ReactNode}) {
    return (
        <div className=" m-[3px] !bg-[#fff2e061] rounded-lg backdrop-blur-sm p-3  shadow-sm">
            {children}
        </div>
    )
}

export default Frame