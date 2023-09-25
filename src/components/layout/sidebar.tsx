import React from 'react'
import ItemMenu from './itemMenu'

const Sidebar = ({showSidebar}: {showSidebar: boolean}) => {

    const menuItem = [
        {
            url: "#",
            title: "Dashboard"
        },
        {
            url: "#",
            title: "Detail"
        },
        {
            url: "#",
            title: "Detail 2"
        }
    ]

    return (
        <aside
            className="flex absolute w-full transition  md:static md:w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
            style={{ height: "90.5vh" , display: showSidebar ? "" : "none"}}
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