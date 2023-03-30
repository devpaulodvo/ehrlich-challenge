'use client'
import { useSession } from 'next-auth/react';
import React, {useEffect} from "react";
import styles from './login.module.css';
import Header from "../../components/Header/Header";
import LoginButton from "@/components/LoginButton/LoginButton";
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter()
    const {data: session} = useSession();

    useEffect(()=>{
      console.log(session)
      if(session){
          router.push('/');
      }
    }, [session])

    return(
        <div className={`${styles.container}`}>
        <Header/>
        <div className={`${styles.content}`}>
          {/* {session.user.email} */}
          <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
          <LoginButton/>
        </div>
      </div>
    )
}