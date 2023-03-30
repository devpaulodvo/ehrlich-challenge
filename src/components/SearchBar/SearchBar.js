import React, {useState} from "react";
import styles from './searchbar.module.css';
import cities from '../../pages/api/cities/ph.json';
import Link from "next/link";

export default function SearchBar(){
    const [value, setValue] = useState('');
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchItem, lat, lng) => {
        setValue(searchItem);
        setLat(lat);
        setLng(lng);
        console.log('search', searchItem, lat, lng);
    }

    const checkWeather = (value, lat, lng) => {
        
    }

    return(
        <div className={`${styles.container}`}>
            <input className={`${styles.searchbar}`} type="text" value={value} onChange={onChange}/>
            {cities.filter(item=>{
                const searchItem = value.toLowerCase();
                const city = item.city.toLowerCase();
                const lat = item.lat;
                const lng = item.lng;
                return searchItem && city.startsWith(searchItem) && city !== searchItem;
                }).map((item, index)=>(
                    <div key={index} onClick={()=>{onSearch(item.city, item.lat, item.lng)}}>
                        {item.city}
                    </div>
                ))
            
            }
            <Link className={`${styles.searchbtn}`} onClick={()=>onSearch(value, lat, lng)} href={`/${value}`}>Search</Link>
        </div>
    )
}