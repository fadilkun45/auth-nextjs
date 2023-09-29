import React from 'react'
import ItemMenu from './itemMenu'

const Sidebar = ({showSidebar}: {showSidebar: boolean}) => {

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
        <aside
            className={` ${showSidebar ? "hidden md:flex" : "flex md:hidden"} absolute w-full transition  md:static md:w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2`}
            style={{ height: "90.5vh" }}
        >
           {
            menuItem?.map((x, index) => (
                <ItemMenu item={x} key={index} />
            ))
           }
        </aside>
    )
}

export default Sidebar