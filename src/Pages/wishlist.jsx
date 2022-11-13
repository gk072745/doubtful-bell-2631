import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContextProvider"
import styles from "../css/wishlist.module.css"



export default function Wishlist(){
    const [items,setItems]=useState([])
  const {setBag}=useContext(AuthContext)

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/Wishlist"
        }).then((res)=>setItems(res.data))
    },[])

const deleteFunc=(id)=>{
    axios({
        method:"delete",
        url:"https://pacific-plains-94481.herokuapp.com/api/Wishlist/"+id
    }).then((res)=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/Wishlist"
        }).then((res)=>setItems(res.data))
    })
}

const moveTobag=(data,id)=>{
  delete data.id
  axios({
    method:"post",
    url:"https://pacific-plains-94481.herokuapp.com/api/Checkout",
    data:{
        ...data
    }
  }).then((res)=>{
    deleteFunc(id)
    setBag((count)=>count+1);

  })
}





    return <>
    
     <div className={styles.main}>
        <div>
            <h3>My Wishlist</h3>
            <h3>{items.length} item</h3>
        </div>
        <div className={styles.wishlists}>
  {items?.map(({id,images,discount,discounted_price,strike_price,subtitle},i)=>{
    
    return <div key={i} className={styles.singleW}>
        <div>
            <img src={images[0]} alt="" />
            <div onClick={()=>deleteFunc(id)} className={styles.delete}>
            &#x2718; 
            </div>
        </div>
        <div className={styles.dtl}>
          <div>
            <p>{subtitle}</p>
          </div>
         
          <div className={styles.prc}>
            <p>Rs.{discounted_price}</p>
            <span>Rs.{strike_price}</span>
            <p>{discount}</p>
          </div>

          <div className={styles.checkout} onClick={()=>moveTobag(items[i],id)}>
            MOVE TO BAG
          </div>

        </div>
    </div>
  })}
        </div>
     </div>
    
    </>
}