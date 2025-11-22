import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { LiaBookSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

function AdminHome() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className='p-4'>
          <div className="md:grid grid-cols-3 text-white">
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4">
                <div className='flex justify-center items-center'><LiaBookSolid className='text-5xl'/></div>
                <div>
                  <h1>Total No:of books</h1>
                  <h1>85</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4">
                <div className='flex justify-center items-center'><FaUsers  className='text-5xl'/></div>
                <div>
                  <h1>Total No:of Users</h1>
                  <h1>85</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4">
                <div className='flex justify-center items-center'><FaUserGraduate  className='text-5xl'/></div>
                <div>
                  <h1>Total No:of Applicants</h1>
                  <h1>85</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome
