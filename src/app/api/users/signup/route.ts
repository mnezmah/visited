
import {connect} from '@/src/dbConfig/dbConfig'
import {NextRequest, NextResponse} from "next/server";
import User from "@/src/models/user.model";

connect()

export const POST = async(request: NextRequest)=>{

    try {
    const requestBody = await request.json()
    const {username, email, pasword} = requestBody

    const user = await User.findOne({email})
        if(user){
            return NextResponse.json(
                {error: "User already exists"}, {status: 400})
            }
}// @ts-ignore
    catch(error: Error){
        return NextResponse.json({error: error.message},
            {status: 500}
        )
    }
}
