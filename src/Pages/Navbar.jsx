import "../Components/styles.css";
import Myntra from "../Images/Myntra.png"
import styles from "../css/Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
import { Navigate, useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import "../Components/styles.css"
library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping)


export default function Navbar(){
 const focusRef=useRef(null)
 const [dropdwn,setdropdwn]=useState(false)
 const navigate=useNavigate()
 const activeB=(x)=>{
   if(x){
      focusRef.current.className=styles.activeB
   }else{
      focusRef.current.className=null
   }
 }




return <>

<div className={styles.main}>

  <div>
       <div>
           <img src={Myntra} onClick={()=>navigate("/")} width="45px" height={"45px"} alt="" />
       </div>
       <div>
          <div  onClick={()=>navigate("/men")} className={styles.navpadding}>
            
            MEN
          </div>
          <div onClick={()=>navigate("/women")}  className={styles.navpadding}>
            WOMEN
          </div>
          <div onClick={()=>navigate("/kids")} className={styles.navpadding}>
            KIDS
          </div>
          <div onClick={()=>navigate("/home&living")} className={styles.navpadding}>
            HOME & LIVING
          </div>
          <div onClick={()=>navigate("/beauty")} className={styles.navpadding}>
            BEAUTY
          </div>
          <div onClick={()=>navigate("/studio")} className={styles.navpadding}>
            STUDIO <sup style={{color:"#ff3f6c",fontWeight:"600",fontSize:"10px"}}>NEW</sup>
          </div>
       </div>

  </div>

  <div>
            <div ref={focusRef}>
                  <div>
                  <FontAwesomeIcon className={styles.icon} icon="fa-magnifying-glass" />
                  <input onMouseEnter={()=>activeB(true)} onMouseLeave={()=>activeB(false)} type="text" placeholder="Search for products, brands and more" />
                  </div>
            </div>
            <div>
                <div onMouseEnter={()=>setdropdwn(true)} onMouseLeave={()=>setdropdwn(false)} className={styles.profile}>
<FontAwesomeIcon  icon="fa-user" />
<p>Profile</p>

<div  className={dropdwn?styles.dropDown:styles.dropDown_hidden}>
<div>
  <div>
    <b>Welcome</b>
    <p style={{fontWeight:"400"}}>
    To access account and manage orders
    </p>
   
   </div>
  <button onClick={()=>navigate("/login")}>LOGIN/SIGNUP</button>
</div>

   <div onClick={()=>navigate("/bag")}>
    <p>Orders</p>
   </div>
   <div onClick={()=>navigate("/wishlish")}>
        <p>Wishlist</p>
   </div>
   <div>
       <p>Gift Cards</p>
   </div>
   <div>
    <p>Contect Us</p>
   </div>
   <div>Myntra Insider <span>NEW</span></div>
   <div></div>
</div>
          </div>

                <div  onClick={()=>navigate("/wishlist")} className={styles.navpadding}>
                <FontAwesomeIcon icon="fa-heart" />
<p>Wishlist</p>
                </div>
                <div  onClick={()=>navigate("/bag")} className={styles.navpadding}>
                <FontAwesomeIcon icon="fa-bag-shopping" />
                <sup style={{padding:"2px 7px",fontSize:"10px",background:"#f16565",color:"white",borderRadius:"50px"}}>1</sup>
<p>Bag</p>
                </div>
            </div>
          
  </div>

</div>












</>
}