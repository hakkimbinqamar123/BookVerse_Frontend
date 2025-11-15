import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    <>
      <Header />

      <>
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
          <div className="col-span-3">
            <div className="md:grid grid-cols-4 mt-5 md:mt-0">
              <div className='shadow rounded p-3 mx-4 my-3'>
                <img src="https://tse3.mm.bing.net/th/id/OIP.YKMfmtiwurEnx9ertgQg-gHaL6?pid=Api&P=0&h=180" className='w-full h-[300px] object-cover rounded' alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p>Book Title</p>
                  <p>Author</p>
                  <Link to={"/view-book/1"} className='bg-blue-900 text-white p-2 rounded hover:bg-white hover:text-blue-900 hover:border 
                  hover:border-blue-800 w-full text-center mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded p-3 mx-4 my-3'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.mE67IaYI2Di0wwoNE6jSMgHaHa?pid=Api&P=0&h=180" className='w-full h-[300px] object-cover rounded' alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p>Book Title</p>
                  <p>Author</p>
                  <Link to={"/view-book/1"} className='bg-blue-900 text-white p-2 rounded hover:bg-white hover:text-blue-900 hover:border 
                  hover:border-blue-800 w-full text-center mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded p-3 mx-4 my-3'>
                <img src="https://m.media-amazon.com/images/I/51dqGFRhc-L.jpg" className='w-full h-[300px] object-cover rounded' alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p>Book Title</p>
                  <p>Author</p>
                  <Link to={"/view-book/1"} className='bg-blue-900 text-white p-2 rounded hover:bg-white hover:text-blue-900 hover:border 
                  hover:border-blue-800 w-full text-center mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded p-3 mx-4 my-3'>
                <img src="https://tse2.mm.bing.net/th/id/OIP.Kg0kg04Ux-EN3-da92JT4gHaLJ?pid=Api&P=0&h=180" className='w-full h-[300px] object-cover rounded' alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p>Book Title</p>
                  <p>Author</p>
                  <Link to={"/view-book/1"} className='bg-blue-900 text-white p-2 rounded hover:bg-white hover:text-blue-900 hover:border 
                  hover:border-blue-800 w-full text-center mt-2'>View Book</Link>
                </div>
              </div>
            </div>
            <p className='text-red-500'>No Books Available</p>
          </div>
        </div>
        
      </>
      <div className='my-10 flex justify-content items-center flex-col'>
        <img src="https://gifdb.com/images/high/detective-nom-reading-book-e0m5236a4l32oynp.gif" alt="" />
        <p className='font-semibold text-xl mt-5'>Please <Link className='text-blue-700 font-bold' to={'/login'}>Login</Link> to explore more...</p>
      </div>

      <Footer />
    </>
  )
}

export default AllBooks
