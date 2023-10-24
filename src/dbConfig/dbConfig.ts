import * as mongoose from "mongoose";


export async function connect(){
    try{
await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log('MongoDB connected successfully')
        })
        connection.on('error', (err)=>{
            console.error('MongoDB connection error. Please make sure MongoDB is up and running', err)
            process.exit()
        })


    }catch(error){
        console.error('Something went wrong', {error})


}