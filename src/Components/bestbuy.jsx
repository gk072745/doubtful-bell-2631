
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"

 export default function BestBuy(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/bestBuys"
          }).then((res)=>setData(res.data))
    },[])



   
    return <>
<div className={styles.margins}>
<h1>BEST BUYS</h1>   
   <div className={styles.ExlusiveB}>
     {data?.map((img)=>{
        return <div key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}