import React from 'react'

export interface ModalProps {
    hideModal: () => void,
    showModal: boolean,
    parseData?: () => void,
}


const Modal = ({hideModal, showModal, parseData}: ModalProps) => {
  return (
    <div className='h-screen w-full z-2 absolute left-0 top-0 flex justify-center items-center bg-gray-100 opacity-90'>
        <div className="bg-white w-3/6 h-auto py-4 rounded-xl border-indigo-500 border text-black">
            
        </div>
    </div>
  )
}

export default Modal