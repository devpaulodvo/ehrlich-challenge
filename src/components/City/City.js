import Link from "next/link";
import React from "react";

const fetchCity = async () => {
    const res = await fetch("https://openweathermap.org/forecast16#geo16");
    const city = await res.json();
    return city;
}

export default async function City(){
    const city = await fetchCity();

    console.log(city);

    // return(
    //     <>
    //     {city.map((city, index) => (
    //         <p key={index}>
    //             <Link href={`/city/`}></Link>
    //         </p>
    //     ))}
    //     </>
        
    // )
}
  