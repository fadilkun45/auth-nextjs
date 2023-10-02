'use client'
import React, { useEffect } from 'react'
import { useAuthContext } from '../context/auth/authProvider'
import { getDatabase } from "firebase/database";
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../service/firebase';

const Page = () => {
  
  const { user } = useAuthContext()


  useEffect(() => {
    const q = query(collection(db, 'note'));
    const unsubscribe = onSnapshot(q, (res) => {
      console.log(res)
    })

  },[])


  return (
    <div className='container bg-white px-4 py-5 rounded-md flex flex-col'>
    <h1 className="text-center text-xl font-bold">  Welcome {user?.displayName} </h1>

      </div>
  )
}

export default Page