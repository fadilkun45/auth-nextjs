'use client'
import React, { useState } from 'react'
import Modal from './modal'


const Page = () => {
  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)


  return (
    <div className='flex flex-col'>
      <Modal showModal={modalAdd} hideModal={() => setModalAdd(!modalAdd)} />
      <Modal showModal={modalEdit} hideModal={() => setModalEdit(!setModalEdit)} />

      <h1 className="text-2xl">Table Example with Input</h1>
      <button onClick={() => setModalAdd(true)} className='bg-indigo-600 text-white w-1/6 mt-10 rounded-lg px-4 py-1'>Modal</button>
      <div className="bg-white px-6 py-5 min-w-full mt-6 overflow-auto rounded-md" >
        <table className='min-w-full' >
          <thead>
            <tr>
              <th className='border border-indigo-500 text-center px-2 py-1'>No</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Username</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Role</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Author</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Active</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-indigo-500 text-center px-2 py-1">1</td>
              <td className="border border-indigo-500 text-center px-2 py-1">elaina</td>
              <td className="border border-indigo-500 text-center px-2 py-1">admin</td>
              <td className="border border-indigo-500 text-center px-2 py-1">admin</td>
              <td className="border border-indigo-500 text-center px-2 py-1"><input type="checkbox" name="" id="" /></td>
              <td className="border border-indigo-500 text-center px-2 py-1"><button className="px-2 py-2 bg-indigo-600 focus:bg-indigo-500 hover:bg-indigo-500 text-white w-4/6 rounded-lg">edit</button></td>
            </tr>
        </tbody>
        </table>

      </div>

    </div>
  )
}

export default Page