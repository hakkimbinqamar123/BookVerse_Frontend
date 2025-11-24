import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaEye } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

function ViewBook() {

  const [modalStatus, setModalStatus] = useState(false);
  return (
    <>
      <Header />
      <div className="md:p-20 p-5">
        <div className="shadow w-full md:p-10 p-5">
          <div className="flex justify-end">
            <FaEye onClick={() => setModalStatus(true)} />
          </div>
          <div className="md:grid grid-cols-[1fr_3fr] w-full">
            <div>
              <img src="https://m.media-amazon.com/images/I/81tFwEZOFcL._SL1500_.jpg" className='w-full h-100' alt="" />
            </div>
            <div className="px-4">
              <h1 className="text-center font-medium text-2xl">
                Crooked Plow
              </h1>
              <p className='text-center text-blue-500'>- Itamar Vieira Junior (Author)</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher: </p>
                <p>Languages: </p>
                <p>No. of Pages: </p>
              </div>
              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail: </p>
                <p>Real Price: </p>
                <p>ISBN: </p>
              </div>
              <p className='text-justify mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, blanditiis alias. Culpa optio nostrum commodi ullam quo saepe minus doloribus modi, vel veniam aperiam veritatis
                recusandae asperiores quia accusantium nobis!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, consectetur ab, illo harum quas exercitationem provident vitae perferendis a doloremque blanditiis rerum ullam! Incidunt,
                sed! Similique aliquid recusandae unde voluptas.</p>
              <div className='mt-10 flex justify-end'>
                <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border
                    hover:border-blue-800'><FaBackward className='mt-1 me-2' />Back</button>
                <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border
                    hover:border-green-800 ms-5'>Buy ₹</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalStatus &&
        <div onClick={() => setModalStatus(false)} className="relative z-10 overflow-y-hidden">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen scroll-auto">
              <div className="bg-white rounded-2xl md:w-250 w-100">
                <div className="bg-black text-white flex justify-between items-center p-3">
                  <h3>Book Images</h3>
                  <button onClick={() => setModalStatus(false)} className='font-bold text-xl'>X</button>
                </div>
                <div className='relative p-5'>
                  <p className='text-blue-600'>Camera click of the book in the hand of seller</p>
                </div>
              <div className='md:flex flex-wrap my-4 overflow-y-hidden'>
                <img height={"250px"} width={"250px"} className='mx-2 md:mb-0 mb-2' src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" alt="" />
                <p className="font-bold text-red-700 ms-5">User uploaded book images are unavailable...</p>
              </div>
            </div>
            </div>
          </div>
        </div>}
      <Footer />

    </>
  )
}

export default ViewBook
