'use client'
import { selectStyles } from "@/customLib/reactSelect";
import { SelectOption } from "@/types/definition";
import { useState } from "react";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { LiaMehRollingEyesSolid } from "react-icons/lia";
import Select from 'react-select'
import { PiSealWarning } from "react-icons/pi";



interface InputType {
    label: string,
    name: string,
    type?: string,
    warn?: string[]
}

export default function Frame({ children, warn, label } : { children: React.ReactNode, warn: InputType['warn']
 ,label: string } ) {
    return (
        <div className="w-full text-cp">
            <div className="mb-1 flex gap-4 justify-between items-end">
                <label htmlFor="name" className="relative w-fit shrink-0">
                    {label}
                    <span className="text-red-500 absolute -right-3 -top-1 text-md">*</span>
                </label>
                <div className="shrink text-right text-sm text-red-500 font-medium"></div>
            </div>
            <div className="w-full h-11 rounded-lg bg-[#F2F5F9] border text-secondary-typo shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex items-center border-transparent">
                {children}
            </div>
            {
                warn?.length && (
                    <div className="flex items-center gap-2 mt-0.5">
                        <PiSealWarning className="text-red-500"/>
                        <p className="text-sm text-red-500 first-letter:uppercase">
                        {warn[0]}
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export function Input({label, name, type, warn }: InputType ) {
    return (
        <Frame label={label} warn={warn}>
            <input
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 px-4"
                placeholder={label}
                id={name}
                name={name}
                type={type}
            />
        </Frame>
    );
  }

export function InputPassword({ label, name, warn }: InputType ) {
    const [ isShow, setIsShow ] = useState<boolean>(false)

    const handleShowPassword = () => setIsShow( !isShow )

    return (
        <Frame label={label} warn={warn}>
            <input
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 pl-4"
                placeholder={label}
                id={name}
                name={name}
                type= { isShow ? 'text' : 'password' }
            />
            {
                isShow ? <PiSmileyXEyesLight className="mr-4" onClick={handleShowPassword}/> : <LiaMehRollingEyesSolid className="mr-4" onClick={handleShowPassword}/>
            }
        </Frame>
    );
}



export function InputSelect({ item, options }: { item: InputType, options: SelectOption[]} ) {
    return (
        <Frame label={item.label} warn={item.warn}>
            <Select 
                options={options} 
                placeholder={item.label}
                name={item.name}
                styles={selectStyles}
            />
        </Frame>
    );
}
  



  