import React from 'react'
import errorGif from '../../assets/404-error.gif';
import { Link } from 'react-router-dom';

function Pnf() {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen bg-white'>
        <img src={errorGif} alt="404 Error"/>
        <Link to='/' className='px-4 mt-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer'>← Back</Link>
      </div>
    </>
  )
}

export default Pnf
