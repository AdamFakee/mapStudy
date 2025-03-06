import React, { ChangeEvent } from 'react'

interface inputType {
    name: string;
    label: string;
    value?: string; // nếu add thì k cần value còn edit thì thêm value 
}
export function Frame({ children, label } : { children: React.ReactNode ,label: string } ) {
    return (
        <div className="w-full text-cp">
            <div className="mb-1 flex gap-4 justify-between items-end">
                <label htmlFor="name" className="relative w-fit capitalize">
                    {label}
                </label>
                <div className="shrink text-right text-sm text-red-500 font-medium"></div>
            </div>
            <div className="w-full h-11 rounded-lg bg-[#Fff] border text-secondary-typo shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex items-center border-transparent">
                {children}
            </div>
        </div>
    );
}

export function Input({label, name, value }: inputType ) {
    return (
        <Frame label={label}>
            <input
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 px-4"
                id={name}
                name={name}
                value={value}
            />
        </Frame>
    );
  }


interface input_img_type extends inputType{
    fn: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function Input_Image({label, name, value, fn }: input_img_type ) {
    return (
        <Frame label={label}>
            <input
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 px-4"
                id={name}
                name={name}
                value={value}
                type="file"
                onChange={(e) => fn(e)}
            />
        </Frame>
    );
  }