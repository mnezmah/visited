'use client'
import {connect} from '@/src/dbConfig/dbConfig'
import {NextRequest, NextResponse} from "next/server";
import User from "@/src/models/user.model";
import bcryptjs from "bcryptjs";

connect()

export const POST = async(request: NextRequest) => {
    try {
const requestBody =await request.json()
        const { email, password } = requestBody
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: 'User does not exist'}, {status: 400})
        }
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: 'Invalid password'}, {status: 400})
        }
const tokenData = {
            id: user._id,
    username: user.username,
    email: user.email
}


        // @ts-ignore
    } catch (error: Error){
        return NextResponse.json({error: error.message})
    }
}