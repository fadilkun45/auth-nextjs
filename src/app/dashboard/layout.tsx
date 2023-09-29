"use client"
import Navbar from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import React, { ReactNode, useState } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <main className="w-full overflow-hidden h-screen bg-gray-100 text-gray-700" >

      <Navbar toggle={() => setToggleMenu(!toggleMenu)} />
      <div className="flex h-screen">
       
        <Sidebar showSidebar={toggleMenu} />

        <div className="w-full p-4 overflow-y-auto">
          {children}
        </div>

      </div>
    </main>
  )
}

export default Layout