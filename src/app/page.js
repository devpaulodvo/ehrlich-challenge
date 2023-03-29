'use client';
import React , { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useSession } from "next-auth/react";
import Header from '@/components/Header/Header';
import LoginButton from '@/components/LoginButton/LoginButton';
import SearchBar from '@/components/SearchBar/SearchBar';
import City from '@/components/City/City';


export default function Home() {
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //    fetch('https://weather.com/en-PH/weather/today/l/RPXX0017:1:RP'   
  //   ).then((res) => res.json())

  // },[])

  const {data: session} = useSession();
  return (
    <div className={`${styles.container}`}>
      <Header/>
      {session ?
      <div className={`${styles.content}`}>
        <h5>{session.user.name}</h5>
        <p><a href={`https://www.github.com/${session.user.email.substring(0, session.user.email.lastIndexOf("@"))}`}>www.github.com/{session.user.email.substring(0, session.user.email.lastIndexOf("@"))}</a></p>
        <SearchBar/>
      </div>
      :
      <div className={`${styles.contentLogin}`}>
          <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
          <LoginButton/>
        </div>
      }
    </div>
  )
}
