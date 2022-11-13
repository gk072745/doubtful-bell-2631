import { useContext, useRef } from "react";
import styles from "../css/singlePAge.module.css"
import { AuthContext } from "../Context/AuthContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping,faTruck } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping,faTruck)


export default function SingleP(){
  const sizeRef=useRef(null)
  const navigate=useNavigate()
    const {singlePageData,isAuth}=useContext(AuthContext)
    const {images,title,subtitle,rating,rating_count,size,discounted_price,discount,strike_price}=singlePageData
  

    return <>
    
      <div className={styles.main}>
      <div className={styles.imgSec}>
        { images.map((img)=>{

            return <div key={img+Math.random(100)}>
                <img src={img} alt="" />
            </div>
        })}
      </div>


      <div className={styles.DeteailDiv}>
           <div className={styles.title}>
            <p>{title}</p>
            <p>{subtitle}</p>
           </div>


           <div className={styles.RtDiv}>
            <div>
              <span>{rating} </span>
              <span style={{color:"#72bfbc"}}>	&#9733;</span>
            </div>
              <span>|</span>
              <span>{rating_count} Ratings</span>
           </div>

          <div className={styles.hr}>
          <hr />
          </div>


          <div className={styles.prcDiv}>
        <div>
        ₹{discounted_price}
        </div>
    
        <div>
      MRP <span>₹{strike_price}   </span>     
        </div>

        <div>
        {discount}
        </div>
          </div>
      <p className={styles.text}>inclusive of all taxes</p>
      <div className={styles.sZ}>
        <p>SELECT SIZE</p>
        <p>SIZE CHART  &#62; </p>
      </div>
        <div className={styles.sizes}>
        <button onClick={()=>{sizeRef.current=size[0]}}  disabled={!size.includes("XS")} >{size[0]}</button>
         <button  onClick={()=>{sizeRef.current=size[1]}}   disabled={!size.includes("S")}>{size[1]}</button>
         <button  onClick={()=>{sizeRef.current=size[2]}}   disabled={!size.includes("M")}>{size[2]}</button>
         <button  onClick={()=>{sizeRef.current=size[3]}}   disabled={!size.includes("L")}>{size[3]}</button>
         <button  onClick={()=>{sizeRef.current=size[4]}}   disabled={!size.includes("XL")}>{size[4]}</button>
         <button  onClick={()=>{sizeRef.current=size[5]}}   disabled={!size.includes("XXL")}>{size[5]}</button>
        </div>

        <div className={styles.cart}>
    
            <div onClick={()=>{
              if(!sizeRef.current) return
              axios({
               method:"post",
               url:"https://pacific-plains-94481.herokuapp.com/api/Checkout",
               data:{
                ...singlePageData,size:sizeRef.current
               }
            }).then((res)=>{
            return navigate("/checkout/cart")

            })

            }}>
            <FontAwesomeIcon  style={{padding:"0px"}} icon="fa-bag-shopping" />
            <p>ADD TO BAG</p>
            </div>
            <div onClick={()=>{
              if(!isAuth)return navigate("/login")
              axios({
               method:"post",
               url:"https://pacific-plains-94481.herokuapp.com/api/Wishlist",
                data:{
                  ...singlePageData
                }
            })

            }}>
               <FontAwesomeIcon style={{padding:"0px"}} icon="fa-heart"/>
               <p>WISHLIST</p>
            </div>
        </div>

        <div className={styles.hr}>
          <hr />
          </div>

          <div className={styles.dlvry}>
            <p>DELIVERY OPTIONS</p>
            <FontAwesomeIcon icon="fa-truck"  />
          </div>

          <div className={styles.pincd}>
            <input type="number" placeholder="Enter pincode" onKeyDown={()=>"return false" }/>
            <button>Check</button>
          </div>
          <p className={styles.pinrqs}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>


          <div className={styles.rtnPolicy}>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try & Buy might be available</p>
          </div>

          <div className={styles.hr}>
          <hr />
          </div>
      <div>
       
      </div>
   <div>

   </div>
      </div>
      </div>
    
    </>
}