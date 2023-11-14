"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { MyContex } from './helper/Contex'
function heder() {
 const forall= useContext(MyContex)
  return (
    <div className='bg-red-400 p-2'>
      <>
      <Nav/>
      <h1>{forall}</h1>
      <Link href={'/About'}>About</Link>
      </>
    </div>
  )
}

export default heder
