'use client'
import Contex, { MyContex } from '@/Components/helper/Contex'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
function About() {
  const notify=()=>{
    toast('Congratulation')
  }
  const f=useContext(MyContex)
  const[name,Setname]=useState([])
  const getData=async()=>{
    const res= await axios.get("https://jsonplaceholder.typicode.com/users")
    const Data=res.data
    // console.log(Data)
    Setname(Data)
  } 
  useEffect(()=>{
    getData()
  })
    return (
    <div>
      <>
      <h1>you have entered in the About Section</h1>
      <button className="m-10 p-10 border-2 border-green-500 bg-green-200 px-5 py-3 rounded text-center fon font-bold"
      onClick={getData}
      >{f}</button>
      <div>
      <button className="m-10 p-10 border-2 border-red-500 bg-green-200 px-5 py-3 rounded text-center fon font-bold"
      // onClick={toast.success('🦄 Wow so easy!', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      //   })}
      >click</button>
      <ToastContainer/>
      </div>
      <div className='bg-blue-300 p-8 m-2'>
        <ul>
          {name.map((e)=>{
            return(
              <li>{e.email}---<a href={`${e.id}`}>explore</a></li>
            )
          })}
        </ul>
      </div>
      <Contex/>
      </>
    </div>
  )
}

export default About
