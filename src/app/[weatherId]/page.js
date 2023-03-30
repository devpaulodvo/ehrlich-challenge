'use client'
import React, {useEffect} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function weatherPage({params: {value}}) {
    const router = useRouter()
    const {data: session} = useSession();

    useEffect(()=>{
        if(!session){
            router.push('/login');
        }
    }, [])
    return(
        <div>
        </div>
    )
}