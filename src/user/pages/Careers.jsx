import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function Careers() {
  const [modalStatus, setModalStatus] = useState(false);
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
            <button onClick={() => setModalStatus(true)} className="bg-blue-900 text-white p-3 ms-5 flex items-center">
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

      {modalStatus && <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-md shadow-lg w-full max-w-xl">
          <div className="flex items-center justify-between px-5 py-3 border-b">
            <h2 className="text-lg font-semibold">Application Form</h2>
            <button className='text-2xl font-bold cursor-pointer' onClick={()=> setModalStatus(false)}>×</button>
          </div>

          <div className="px-5 py-4">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Qualification"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm "
                />
              </div>

              <textarea
                rows="4"
                placeholder="Cover Letter"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none "
              />

              <div className="space-y-1">
                <p className="text-sm font-medium">Upload Resume:</p>
                <label className="inline-block">
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
                  file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="reset"
                  className="px-5 py-2 rounded text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded text-sm font-semibold bg-green-600 text-white hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      }
      <Footer />
    </>
  )
}

export default Careers
