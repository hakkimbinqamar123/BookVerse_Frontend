import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'

function AllBooks() {
  return (
    <>
      <Header />

      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='text-3xl font-bold my-5'>Collections</h1>
        <div className='flex my-5'>
          <input type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by title' />
          <button className='cursor-pointer bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800'>Search</button>
        </div>
      </div>
      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-5 ">
        {/* filter */}
        <div className="col-span-1">
          <h1>Filters</h1>
          <div className="mt-5">
            <input type="radio" id='Literary Fiction' />
            <label htmlFor="Literary Fiction" className='ms-2'>Literary Fiction</label>
          </div>
          <div className="mt-5">
            <input type="radio" id='Story' />
            <label htmlFor="Story" className='ms-2'>Story</label>
          </div>
          <div className="mt-5">
            <input type="radio" id='Literary Fiction' />
            <label htmlFor="Literary Fiction" className='ms-2'>Literary Fiction</label>
          </div>
          <div className="mt-5">
            <input type="radio" id='Literary Fiction' />
            <label htmlFor="Literary Fiction" className='ms-2'>Literary Fiction</label>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AllBooks
