"use client"
import {useSession} from "next-auth/react";

export default  function Home() {
const {data: session, status} = useSession({
    required: true
})
if(status === "loading"){
    return <>loading...</>
}

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header>
                <p>
                    Visited
                </p>

            </header>
        </main>
    )
}
