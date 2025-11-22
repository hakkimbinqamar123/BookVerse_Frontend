import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <>
      <div className="bg-gray-200 w-full md:min-h-screen flex items-center flex-col">
        <div className='my-10'>
          <img style={{width:"170px", height:"170px", borderRadius:"50%"}} src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg" alt="Profile Image" />
        </div>
        <h1 className='text-2xl mb-10'>Abdul Hakeem</h1>
        <div className="mb-10">
          <div className='mb-4 flex'>
            <input type="radio" id='home' readOnly/>
            <Link to={"/admin-home"}><label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label></Link>
          </div>
          <div className='mb-4 flex'>
            <input type="radio" id='books' readOnly/>
            <Link to={"/admin-books"}><label htmlFor="books" className='flex ms-3'><GiBookshelf  className='mt-1 me-1'/>Books</label></Link>
          </div>
          <div className='mb-4 flex'>
            <input type="radio" id='careers' readOnly/>
            <Link to={"/admin-career"}><label htmlFor="careers" className='flex ms-3'><FaGraduationCap  className='mt-1 me-1'/>Careers</label></Link>
          </div>
          <div className='mb-4 flex'>
            <input type="radio" id='settings' readOnly/>
            <Link to={"/admin-settings"}><label htmlFor="settings" className='flex ms-3'><IoIosSettings  className='mt-1 me-1'/>Settings</label></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
