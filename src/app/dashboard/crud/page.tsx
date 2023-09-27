'use client'
import React, {useState} from 'react'
import Modal from './modal'


const Page = () => {
    const [modalAdd, setModalAdd] = useState(true)

  return (
    <div className='flex'>
        <Modal showModal={modalAdd} hideModal={() => setModalAdd(!modalAdd)} />
        <h1 className="text-2xl">Table Example with Input</h1>
        
    </div>
  )
}

export default Page