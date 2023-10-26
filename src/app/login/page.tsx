'use client'
import React, {ChangeEvent, useState} from "react";
import {Input} from '@/src/components/Input'
import {InputType} from "@/src/enums/InputType.enum";
import {Button} from "@/src/components/Button";
import {ButtonType} from "@/src/enums/ButtonType.enum";
import Link from "next/link";


const LoginUpPage = ()=>{
    const [user, setUser] = useState({
        name: "",
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

    const onLoginHandler = ():void=> {

    }

    return (
        <div className='h-[100vh]'>
            <h1 className='text-center text-2xl'>
                Log in
            </h1>
            <div className='p-2'>
                <Input  id="name"
                        label="Name"
                        value={user.name}
                        onChange={onChangeHandler}
                        placeholder='Enter your name here'
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
                <Button onClick={onLoginHandler} title='Submit' type={ButtonType.SUBMIT}/>
            </div>

            <Link href="/signup">Not registered yet? Click to register</Link>
        </div>
    )
}


export default LoginUpPage