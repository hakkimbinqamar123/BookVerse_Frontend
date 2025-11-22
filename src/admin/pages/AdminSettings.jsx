import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar />
        </div>
        <div className="p-4">
          <h1 className='text-3xl text-center font-semibold my-5'>Settings</h1>
          <div className="md:grid grid-cols-2 mt-10">
            <div className='md:px-10 px-5'>
              <p className="justify-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, temporibus unde dolorum nostrum molestiae eaque consequuntur dicta alias assumenda a cum voluptatem doloribus modi deleniti saepe veniam omnis quidem dolor?
                Dolorem minus officiis nihil, expedita optio quia cum voluptates necessitatibus eum beatae vitae commodi quisquam atque tenetur eos cumque. Nemo consequatur blanditiis corrupti illo tenetur iure atque sint aut minus?
              </p>
              <p className="justify-text mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus, porro officiis perferendis distinctio dignissimos fugiat quidem fugit libero quis provident quae cupiditate dolorum maxime natus suscipit ex ad asperiores.
                Officiis tempore nostrum ea omnis rem sint fugiat rerum enim doloribus iusto, natus sunt expedita assumenda deleniti excepturi nisi vitae laboriosam est. Nam dolorum blanditiis, necessitatibus accusamus non odit quo?
              </p>
            </div>
            <div className="md:px-10 px-5">
              <form action="" className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0'>
                <div className='flex justify-center items-center my-5'>
                  <label htmlFor="editUserProfile">
                    <input id='editUserProfile' type="file" style={{ display: "none" }} />
                    <img className='cursor-pointer' style={{ width: "170px", height: "170px", borderRadius: "50%" }} src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg"
                      alt="Profile Image" />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='Username' className='bg-white rounded w-full p-2' />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder='Password' className='bg-white rounded w-full p-2' />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" placeholder='Confirm Password' className='bg-white rounded w-full p-2' />
                </div>
                <div className="flex justify-between mt-10">
                  <button className='bg-amber-500 text-white rounded p-4 w-1/2 hover:border hover:border-amber-700 hover:text-amber-600 hover:bg-white'>Reset</button>
                  <button className='bg-green-500 text-white rounded p-4 w-1/2 hover:border hover:border-green-700 hover:text-green-600 hover:bg-white ms-2'>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
