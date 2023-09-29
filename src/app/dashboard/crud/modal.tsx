import React from 'react'
import { motion } from 'framer-motion'

export interface ModalProps {
    hideModal: () => void,
    showModal: boolean,
    parseData?: () => void,
}


const Modal = ({ hideModal, showModal, parseData }: ModalProps) => {
    return (
        showModal &&
        <div  className='h-screen w-full z-0 absolute left-0 top-0 flex justify-center items-center'>
            <div className="w-full h-full  bg-gray-100 opacity-90" onClick={hideModal}></div>

            <motion.div
             initial={{  scale: 0.5 }}
             animate={{  scale: 1 }}
             transition={{
               duration: 0.3,
               ease: [0, 0.71, 0.2, 1.01]
             }}
            className="bg-white opacity-100 w-3/6 h-auto p-4 rounded-lg border-indigo-500 border text-black z-20 absolute cursor-default">
                <h1 className='text-xl font-bold'>Tambah Data</h1>
                <hr className='border-gray-500 mb-3 mt-1' />
                <div className="border border-indigo-500 px-4 py-4 rounded-md mt-4">
                    <label htmlFor="nama" className='mb-1 block'>Nama</label>
                    <input id='nama' className='border  outline-none w-full rounded-md px-3 py-2 text-sm text-gray-500 border-indigo-500 focus:border-indigo-400' />
                </div>
                <div className="border border-indigo-500 px-4 py-4 rounded-md mt-4">
                    <label htmlFor="nama" className='mb-1 block'>Username</label>
                    <input id='nama' className='border  outline-none w-full rounded-md px-3 py-2 text-sm text-gray-500 border-indigo-500 focus:border-indigo-400' />
                </div>
                <button
                    type="submit"
                    className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            onClick={parseData}
                >
                    Log In
                </button>
            </motion.div>

        </div>
    )
}

export default Modal