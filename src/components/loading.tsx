import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {
  return (
        <div className="fixed top-0 w-full flex justify-center items-center h-screen bg-white z-20 opacity-80">
            <HashLoader color="#36d7b7" size={120} />
        </div>
    )
}

export default Loading