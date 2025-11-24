import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

function Profile() {
  const [sellBooksStatus, setSellBooksStatus] = useState(true);
  const [viewBookStatus, setViewBookStatus] = useState(false);
  const [viewPurchaseHistoryStatus, setViewPurchaseHistoryStatus] = useState(false);

  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className='flex items-center'>
          <h1 className="md:text-3xl text-2xl font-bold">Abdul Hakeem</h1>
          <MdVerified className='text-blue-500 ms-3 text-xl' />
        </div>
        <div>
          <button className='flex px-4 font-bold py-3 border border-blue-200 text-blue-600 cursor-pointer rounded'>Edit<FaRegEdit className='mt-1 ms-2' /></button>
        </div>
      </div>
      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius minus nam corporis dolorum numquam asperiores, exercitationem ducimus molestiae neque repellendus. Reiciendis voluptatum placeat eos natus ut? Doloremque, optio labore?</p>

      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={() => { setSellBooksStatus(true), setViewBookStatus(false), setViewPurchaseHistoryStatus(false) }} className={sellBooksStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
        <p onClick={() => { setViewBookStatus(true), setSellBooksStatus(false), setViewPurchaseHistoryStatus(false) }} className={viewBookStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>View Book</p>
        <p onClick={() => { setViewPurchaseHistoryStatus(true), setViewBookStatus(false), setSellBooksStatus(false) }} className={viewPurchaseHistoryStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
      </div>
      {sellBooksStatus &&
        <div className='md:p-20 p-5'>
          <div className="bg-gray-200 md-p-10 p-5 rounded">
            <h1 className="text-center text-3xl font-medium">Book Details</h1>
            <div className='md:grid grid-cols-2'>
              <div className='md:my-10 mt-5 px-2'>
                <div className="mb-3">
                  <input type="text" placeholder='Title' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Author' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='No of Pages' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Image url' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Price' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Discount Price' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <textarea placeholder='abstract' rows={'8'} className='p-2 bg-white rounded w-full'></textarea>
                </div>
              </div>

              <div className="md:my-10 px-2">
                <div className="mb-3">
                  <input type="text" placeholder='Publisher' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Language' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input placeholder='ISBN' className='p-2 bg-white rounded w-full' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Category' className='p-2 bg-white rounded w-full' />
                </div>

                <div className="flex justify-center items-center mt-10 flex-col">
                  <label htmlFor="uploadBookImg">
                    <input id='uploadBookImg' type="file" style={{ display: "none" }} alt='no image' />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" style={{ width: "200px", height: "200px", cursor: "pointer" }} alt="" />
                  </label>
                </div>

                <div className="flex md:justify-end justify-center gap-3 mt-5">
                  <button className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>
                    Reset
                  </button>
                  <button className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {viewBookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className="bg-gray-200 p-5 rounded mt-4">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className="text-2xl">Book Title</h1>
                <h2>Author Name</h2>
                <h3 className="text-blue-600">₹ 599</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisquam deserunt pariatur aliquam quis quia optio iure quas? Facilis commodi voluptatum adipisci nobis, expedita cupiditate minima distinctio doloremque nulla officia.</p>
                <div className="flex mt-5">
                  <img src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" style={{ width: "70px", height: "70px" }} alt="" />
                  <img src="https://static.vecteezy.com/system/resources/previews/027/570/210/original/approved-rubber-stamp-approved-icon-seal-of-approval-tested-and-verified-badge-with-check-mark-accepted-sign-authorized-badge-design-with-grunge-texture-illustration-vector.jpg" style={{ width: "70px", height: "70px" }} alt="" />
                  <img src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-1.png" style={{ width: "70px", height: "70px" }} alt="" />
                </div>
              </div>
              <div className="px-4 mt-4 md:mt-4">
                <img src="https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg" alt="no image" className='w-full' style={{ height: "250px" }} />
                <div className="flex justify-end mt-4">
                  <button type='button' className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="https://i.pinimg.com/originals/ae/bf/f0/aebff0ed085370362da5a37c09fb39ae.jpg" alt="no image" style={{ width: "200px", height: "200px" }} />
            <p className='text-red-600 text-2xl'>No Book Added Yet...!</p>
          </div>
        </div>}
      {viewPurchaseHistoryStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className="bg-gray-200 p-5 rounded mt-4">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className="text-2xl">Book Title</h1>
                <h2>Author Name</h2>
                <h3 className="text-blue-600">₹ 599</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisquam deserunt pariatur aliquam quis quia optio iure quas? Facilis commodi voluptatum adipisci nobis, expedita cupiditate minima distinctio doloremque nulla officia.</p>
              </div>
              <div className="px-4 mt-4 md:mt-4">
                <img src="https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg" alt="no image" className='w-full' style={{ height: "250px" }} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="https://i.pinimg.com/originals/ae/bf/f0/aebff0ed085370362da5a37c09fb39ae.jpg" alt="no image" style={{ width: "200px", height: "200px" }} />
            <p className='text-red-600 text-2xl'>No Book Brought Yet...!</p>
          </div>
        </div>}

      <Footer />
    </>
  )
}

export default Profile
