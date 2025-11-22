import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

function AdminCareers() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center text-3xl font-bold">Careers</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p className='p-4 border-b border-gray-200 cursor-pointer'>Book List</p>
            <p className='p-4 border-b border-gray-200 cursor-pointer'>Users</p>
          </div>

          <div>
            Booklist
          </div>
          <div>
            user list
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminCareers
