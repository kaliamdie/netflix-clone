import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"



export default function Netflix() {
    const history=useNavigate()
    const NetflixValid=async()=>{
let token =localStorage.getItem("usersdatatoken")
const res= await fetch ("/validUser",{
    method:"GET",
    headers:{
        "Content-Type":"apllication/json",
        "Authorization":token
    }
})
const data=await res.json()

if(data.status ==401 || !data){
 history("*")
}else{
    console.log("user verify")
    history("/netflix")
}
    }

    useEffect(()=>{
        NetflixValid()
    
    },[])
  return (
    <div>
    {/* sample */}
    <h1>user email girma@gmail.com</h1>
    </div>
  )
}
// this is the hompage that the film is goint to display so after they user login or signup make them to go tthis page