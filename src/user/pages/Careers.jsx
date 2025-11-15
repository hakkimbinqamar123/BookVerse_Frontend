import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function Careers() {
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className="text-center my-5">
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p className='text-justify'>At BookVerse, we believe that stories have the power to connect, inspire, and transform lives. Behind every great book is a passionate team — and we’re always looking for creative, driven, and curious individuals to join us on this journey.
            Whether you’re a tech enthusiast, a literature lover, or a marketing expert, BookVerse offers a dynamic environment where your ideas can shape the future of reading. We value innovation, collaboration, and a shared love for books that bring people together.</p>
        </div>
        <div className='my-10'>
          <h1 className='text-2xl font-bold' >Current Openings</h1>
          <div className='flex my-10 justify-center items-center'>
            <input type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by job title' />
            <button className='cursor-pointer bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800'>Search</button>
          </div>
        </div>
        {/* job listing */}
        <div className="border border-gray-200 p-5 shadow my-5">
          <div className="flex mb-5">
            <div className="w-full">
              <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
              <hr />
            </div>
            <button className="bg-blue-900 text-white p-3 ms-5 flex items-center">
              Apply
              <FaArrowUpRightFromSquare className='ms-2' />
            </button>
          </div>
          <p className='flex'><IoLocation className='me-2 mt-1' /> Kochi</p>
          <p className='text-lg my-2'>Job Type: FULL TIME</p>
          <p className='text-lg my-2'>Salary: 20000 - 30000/month</p>
          <p className='text-lg my-2'>Qualification: BCA/MCA/B-Tech</p>
          <p className='text-lg my-2'>Experience: 1-2 yrs</p>
          <p className='text-lg my-2 text-justify'>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab inventore, quibusdam quas quos distinctio, ut in eveniet quaerat laboriosam eius odio quam placeat voluptatem veritatis reiciendis dolore fugiat! Quia, obcaecati.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers
