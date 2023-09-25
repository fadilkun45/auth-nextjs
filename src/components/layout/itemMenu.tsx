import Link from 'next/link'
import React from 'react'

export interface menuItem {
    url: string,
    title: string
}[]

const ItemMenu = ({item}: {item: menuItem}) => {


    return (
        <Link href={item.url} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"  >
            <span className="text-2xl">
                <i className="bx bx-cart" />
            </span>
            <span>{item.title}</span>
        </Link>
    )
}

export default ItemMenu