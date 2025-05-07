'use client'
import { selectStyles } from "@/customLib/reactSelect";
import { useState } from "react";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { LiaMehRollingEyesSolid } from "react-icons/lia";
import { PiSealWarning } from "react-icons/pi";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";



interface InputType<T extends FieldValues> {
    label: string,
    name: Path<T>,
    type?: string,
    warn?: string[],
    register: UseFormRegister<T>,
    defaultValue?: string | number
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

export function InputAdmin<T extends FieldValues>({label, name, type, warn, register, defaultValue}: InputType<T> ) {
    return (
        <Frame label={label} warn={warn}>
            <input
                {...register(name)}
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 px-4"
                placeholder={label}
                defaultValue={defaultValue}
                type={type}
            />
        </Frame>
    );
  }

export function InputPasswordAdmin<T extends FieldValues>({label, name, warn, register }: InputType<T> ) {
    const [ isShow, setIsShow ] = useState<boolean>(false)

    const handleShowPassword = () => setIsShow( !isShow )

    return (
        <Frame label={label} warn={warn}>
            <input
                className="grow bg-transparent rounded-lg h-full placeholder:text-[#99AEBE] outline-0 pl-4"
                placeholder={label}
                {...register(name)}
                type= { isShow ? 'text' : 'password' }
            />
            {
                isShow ? <PiSmileyXEyesLight className="mr-4" onClick={handleShowPassword}/> : <LiaMehRollingEyesSolid className="mr-4" onClick={handleShowPassword}/>
            }
        </Frame>
    );
}


export interface OptionsAdmin {
    id: number,
    name: string,
}

interface selectProps<T extends FieldValues,> extends InputType<T> {
    options: OptionsAdmin[]
}

export function InputSelectAdmin<T extends FieldValues,>(props: selectProps<T>) {
    console.log(props)
    return (
        <Frame label={props.label} warn={props.warn}>
            <select 
                {...props.register(props.name)}
                name={props.name}
                defaultValue={props.defaultValue}
            >
                {
                    props.options.map(item => {
                        return (
                            <option key={item.id} value={item.id} defaultValue={props.defaultValue}>
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>
        </Frame>
    );
}


export function InputRatioAdmin<T extends FieldValues>({label, name, warn, register, defaultValue}: InputType<T> ) {
    return (
        <Frame label={label} warn={warn}>
            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input
                        {...register(name)}
                        className="bg-transparent outline-0"
                        type="radio"
                        value={"true"}
                        defaultChecked={defaultValue === "true"}
                    />
                    yes
                </label>
                <label className="flex items-center gap-2">
                    <input
                        {...register(name)}
                        className="bg-transparent outline-0"
                        type="radio"
                        value="false"
                        defaultChecked={defaultValue === "false"}
                    />
                    no
                </label>
            </div>
        </Frame>
    );
  }
  



  