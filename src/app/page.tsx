'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {

  const {push} = useRouter()

 return   push('/dashboard')

}