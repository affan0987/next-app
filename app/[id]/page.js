'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// const page = ({params}) => {
//   const {id}=params
//   const[name,Setname]=useState([])
//   const getData=async()=>{
//     const res= await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
//     const Data=res.data
//     Setname(Data)
//     useEffect(()=>{
//       getData()
//     })
//     console.log(name)
//   return (

//     <div>
//       <h1></h1>
//     </div>
//   )
// }
// }
// export default page


const page = ({params}) => {
  const[email,setEmail]=useState([])
    const {id}=params
    const getData=async()=>{
      const res= await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
      const Data=res.data
      // console.log(Data)
      setEmail(Data)
    }
    useEffect(()=>{
      getData()
    })
    // console.log(id)
  return (
    <h1>{JSON.stringify(email)}</h1>
  )
}

export default page
