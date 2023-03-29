import React from "react";
import styles from './searchbar.module.css';
export default function SearchBar(){
    return(
        <input className={`${styles.searchbar}`} placeholder="Search" name="seachcity" id="searchcity"/>
    )
}