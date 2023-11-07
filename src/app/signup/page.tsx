'use client'
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Input } from '@/src/components/Input'
import { InputType } from "@/src/enums/InputType.enum";
import { Button } from "@/src/components/Button";
import { ButtonType } from "@/src/enums/ButtonType.enum";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";


const SignUpPage = () => {
    const router = useRouter()
     const [user, setUser] = useState({
         username: "",
         email: "",
         password:""
     })
    const [isLoading, setIsLoading] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
     const onChangeHandler = (event:ChangeEvent<HTMLInputElement>, ) => {
         const {value, id} = event.currentTarget
         setUser(
             {
                 ...user, [id]: value
             }
         )
         console.log({user})
     }

     const onSignupHandler = async (): Promise<void> => {
         try {
             setIsLoading(true)
            const response = await axios.post('api/users/signup', user)
             console.warn({response: response.data})
             router.push('/login')
         }
// @ts-ignore
catch (error: Error){
    toast.error(error.message)
}
         finally{
setIsLoading(false)
}
     }

     useEffect(()=>{
         if(user.email.length &&  user.username.length && user.password.length) setIsButtonDisabled(false)
         else setIsButtonDisabled(true)
     }, [user.email, user.username , user.password])

    {console.warn({user})}

return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-center text-2xl'>
            { isLoading ? "Processing" : "Sign up" }
        </h1>
        <div className='p-3'>
            <Input  id="username"
                    label="username"
                    value={user.username}
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
                    value={user.password}
                    type={InputType.PASSWORD}
                    onChange={onChangeHandler}
                    placeholder='Enter your password here'
            />
            <Button onClick={onSignupHandler}
                    title='Singn up'
                    type={ButtonType.SUBMIT}
                    disabled={isButtonDisabled}
                   />

            <Link href="/login">Already registered? Go to Login</Link>

        </div>

    </div>
)
}


export default SignUpPage