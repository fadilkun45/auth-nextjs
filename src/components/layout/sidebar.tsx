import React from 'react'
import ItemMenu from './itemMenu'
import { motion } from 'framer-motion'

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {

    const menuItem = [
        {
            url: "/dashboard",
            title: "Dashboard"
        },
        {
            url: "/dashboard/crud",
            title: "CRUD Page"
        },
        {
            url: "#",
            title: "Detail 2"
        }
    ]

    console.log(showSidebar)

    return (
      showSidebar ? <motion.div
            
            initial={{ translateX:"-100%" }}
            animate={{ translateX: 0 }}
            transition={{
                duration: 0.1,
                ease: [0, 0.3, 0.5, 1]

            }}
            data-isOpen={showSidebar}
            className={`sidebar absolute w-full  md:static md:w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2`}
            style={{ height: "90.5vh" }}
        >
            {
                menuItem?.map((x, index) => (
                    <ItemMenu item={x} key={index} />
                ))
            }
        </motion.div> : null
    )
}

export default Sidebar

// ${showSidebar ? "hidden md:flex" : "flex md:hidden"} 