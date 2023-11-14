'use client'
import React, { Children, createContext } from 'react'
export const MyContex=createContext()

const Contex = ({children}) => {
    const username='shiak Mohammad Affan'
  return (
    <div>
      <MyContex.Provider value={username}>
        {children}
      </MyContex.Provider>
    </div>
  )
}

export default Contex
