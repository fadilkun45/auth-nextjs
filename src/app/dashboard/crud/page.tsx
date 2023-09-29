'use client'
import React, { useState } from 'react'
import Modal from './modal'


const Page = () => {
  const [modalAdd, setModalAdd] = useState(false)

  return (
    <div className='flex flex-col'>
      <Modal showModal={modalAdd} hideModal={() => setModalAdd(!modalAdd)} />
      <h1 className="text-2xl">Table Example with Input</h1>
      <button onClick={() => setModalAdd(true)} className='bg-indigo-600 text-white w-1/6 mt-10 rounded-lg px-4 py-1'>Modal</button>
      <div className="bg-white px-6 py-5 min-w-full mt-6 overflow-auto rounded-md" >
        <table >
          <thead>
            <tr>
              <th className='border border-indigo-500 text-center px-2 py-1'>No</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>Data</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
              <th className='border border-indigo-500 text-center px-2 py-1'>ewe2323endfhejbrjvhb3wrmbv3v qhbvrh3j45vw3ergjq3m4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-indigo-500 text-center px-2 py-1">1</td>
              <td className="border border-indigo-500 text-center px-2 py-1">Test Data</td>
              <td className="border border-indigo-500 text-center px-2 py-1">ewe2323endfhejbrjvhb3wrmbv3v</td>
            </tr>
        </tbody>
        </table>

      </div>

    </div>
  )
}

export default Page