import {React} from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import { useSession, signOut } from "next-auth/react";

export default function Header(){
    const {data: session} = useSession();
    return (
      <div className={`${styles.container}`}>
          <div className={`${styles.logo}`}>
            <Image src="/cloud2.avif" alt="logo" width="40" height="40"/>
            <h3>Weather Forecast</h3>
          </div>
          {
            session && 
            <div className={`${styles.logoutbtn}`} onClick={() => signOut("github")}>
              Logout
            </div>
          }
      </div>
    )
}