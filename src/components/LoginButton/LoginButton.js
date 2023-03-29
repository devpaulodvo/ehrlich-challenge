import React from "react";
import styles from './loginbutton.module.css';
import { signIn } from "next-auth/react";

export default function LoginButton(){
    return(
        <div className={`${styles.loginbtn}`} onClick={() => signIn("github")}>Login</div>
    )
}