import React from 'react'
import { FaPowerOff } from "react-icons/fa";

function AdminHeader() {
  return (
    <>
      <div className='px-5 py-3 flex items-center'>
        <div className='flex items-center'>
          <img width={"80px"} src="https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-book-logo-template-vector-illustration-studying-sign-page-vector-png-image_39898376.png" alt="" />
          <h1 className='font-bold flex text-2xl ms-4'>BOOKVERSE</h1>
        </div>


        <div className="ms-auto">
          <button className='flex justify-between items-center border border-black rounded cursor-pointer px-3 py-2 ms-3
           hover:bg-black hover:text-white'><FaPowerOff className='me-3'/>Logout</button>
        </div>
      </div>
    </>
  )
}

export default AdminHeader
