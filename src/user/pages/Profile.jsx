import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

function Profile() {
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
          <button className='flex px-4 font-bold py-3 border border-blue-200 text-blue-600 cursor-pointer rounded'>Edit<FaRegEdit className='mt-1 ms-2'/></button>
        </div>
      </div>
      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius minus nam corporis dolorum numquam asperiores, exercitationem ducimus molestiae neque repellendus. Reiciendis voluptatum placeat eos natus ut? Doloremque, optio labore?</p>
      <Footer />
    </>
  )
}

export default Profile
