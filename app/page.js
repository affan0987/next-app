// import { Bentham } from 'next/font/google'
"use client"
import Link from 'next/link'
import About from './About/page'
import React,{useState} from 'react'
import Header from "@/Components/Header"

const page = () => {
  const[username,setUsername]=useState('Hello World')

  return (
    <div>
      <>
      <About/>
      <h1>hello welcome to React app</h1>
      <form className='justify-center'>
        <input type='text' 
        className='border-2 border-black-500 m-10 text-center w-500 '
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }} />
      </form>
      </>
    </div>
  )
}

export default page

