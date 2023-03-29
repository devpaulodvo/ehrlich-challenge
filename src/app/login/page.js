'use client'
import React from "react";
import styles from './login.module.css';
import Header from "../../components/Header/Header";
import { useSession } from 'next-auth/react';
import LoginButton from "@/components/LoginButton/LoginButton";

export default function Login(){
    const {data: session} = useSession();
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