'use client'
import React, {ChangeEvent, useState} from "react";
import {Input} from '@/src/components/Input'
import {InputType} from "@/src/enums/InputType.enum";
import {Button} from "@/src/components/Button";
import {ButtonType} from "@/src/enums/ButtonType.enum";
import Link from "next/link";

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

     const onSignupHandler = async ()=>{

     }

return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-center text-2xl'>
            Sign up
        </h1>
        <div className='p-3'>
            <Input  id="name"
                    label="Name"
                    value={user.name}
                    onChange={onChangeHandler}
                    placeholder='Enter your name here'

            />
            <Input  id="email"
                    label="Email"
                    value={user.email}
                    type={InputType.EMAIL}
                    onChange={onChangeHandler}
                    placeholder='Enter your email here'
            />
            <Input  id="password"
                    label="Password"
                    value={user.name}
                    type={InputType.PASSWORD}
                    onChange={onChangeHandler}
                    placeholder='Enter your password here'
            />
            <Button onClick={onSignupHandler} title='Submit' type={ButtonType.SUBMIT}/>

            <Link href="/login">Already registered? Go to Login</Link>

        </div>

    </div>
)
}


export default SignUpPage