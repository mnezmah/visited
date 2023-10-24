import {InputType} from "@/src/enums/InputType.enum";
import React, {ChangeEvent, useState} from "react";

interface InputProps {
    id?: string
    type?: InputType
    value: string
    onChange?: (event:ChangeEvent<HTMLInputElement>)=>void
    placeholder?: string
    label?: string
    className?: string
}
export const Input = ({id, type=InputType.TEXT, value, onChange, placeholder, label, className}: InputProps)=>{
    const [inputValue, setInputValue] = useState(value)

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement> )=>{
        const {value} = event.currentTarget
        setInputValue(value)
        if (onChange) onChange(event)
    }

    return(
        <div className={`${className} p-2.5 flex flex-col`}>
            {label && <label className='text-[0.9rem]' htmlFor={id}>{label}</label>}
            <input className='p-2 rounded-lg text-[0.9rem] text-gray-600' id={id} type={type} value={inputValue} onChange={onChangeHandler} placeholder={placeholder}/>
        </div>

    )
}