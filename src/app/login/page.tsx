'use client'
import React, {ChangeEvent, useState} from "react";
import {Input} from '@/src/components/Input'
import {InputType} from "@/src/enums/InputType.enum";

const SignUpPage = ()=>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:""
    })


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>, ) => {
        const {value, id} = event.currentTarget
        setUser(
            {
                ...user, [id]: value
            }
        )
        console.log({user})
    }

    return (
        <div className='h-[100vh]'>
            <h1 className='text-center text-2xl'>
                Sing up
            </h1>
            <div className='p-2'>
                <Input  id="name"
                        label="Name"
                        value={user.name}
                        onChange={onChangeHandler}
                        placeholder='Enter your name here'
                        className='max-w-[60%]'
                />
                <Input  id="email"
                        label="Email"
                        value={user.email}
                        type={InputType.EMAIL}
                        onChange={onChangeHandler}
                        placeholder='Enter your email here'
                        className='max-w-[60%]'
                />
                <Input  id="password"
                        label="Password"
                        value={user.name}
                        type={InputType.PASSWORD}
                        onChange={onChangeHandler}
                        placeholder='Enter your password here'
                        className='max-w-[60%]'
                />
            </div>

        </div>
    )
}


export default SignUpPage