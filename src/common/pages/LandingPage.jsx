import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Header />
      {/* landing */}
      <div className="flex flex-col justify-center items-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/046/246/631/small_2x/a-library-with-many-books-wood-and-metal-shelves-in-a-city-or-settlement-photo.jpeg')] bg-no-repeat bg-cover bg-center text-white min-h-screen">
        <div className="w-full flex flex-col justify-center items-center min-h-screen bg-black/50 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Wonderful Gifts</h1>
          <p className="text-lg text-center mt-2">Give your family and friends a book</p>
          <div className="mt-9 flex items-center bg-white rounded-2xl overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Search Books"
              className="flex-grow p-3 text-black placeholder-gray-500 focus:outline-none"
            />
            <HiMiniMagnifyingGlass className="text-gray-600 text-2xl mr-3" />
          </div>
        </div>
      </div>
      {/* new arrivals */}
      <section className='md:px-40 p-4 flex flex-col justify-center items-center'>
        <h1 className='font-bold'>NEW ARRIVALS</h1>
        <h1>Explore Our Latest Collection</h1>
        <div className='md:grid grid-cols-4 w-full mt-4'>
          <div className="p-3">
            <div className='shadow p-3 rounded'>
              <img height={"300px"} width={"100%"} src="https://books.bizmandala.com/media/books/9789389931440/image_CrV0jID.jpeg" alt="" />
              <div className='text-center mt-3'>
                <p className='text-2xl font-bold'>Book Name</p>
                <p className='text-xl font-bold'>Author</p>
                <p className='font-bold'>₹599</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center my-5'>
          <Link to={"/all-books"}><button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900
          hover:text-blue-900 hover:bg-white cursor-pointer'>Explore More</button></Link>
        </div>
      </section>

      {/* featured Authors */}
      <section className='md:px-40 p-4 flex justify-center items-center mt-9'>
        <div className='md:grid grid-cols-2 w-full'>
          <div className='flex flex-col mx-5'>
            <p className='text-center'>FEATURED AUTHORS</p>
            <h1 className='text-3xl text-center'>Captivates with every word</h1>
            <p className='my-4 text-justify'>At BookVerse, we celebrate the voices that inspire generations of readers. From timeless literary legends to modern-day storytellers, each author brings a unique perspective, weaving words that spark imagination and touch hearts. Whether you love thrilling mysteries, inspiring biographies, or heartwarming tales, these authors have shaped the way we read and think.
              <br /><br /> We also take pride in promoting emerging writers who bring fresh ideas and bold narratives to the world of books. Through exclusive interviews, curated collections, and author spotlights, we aim to connect readers directly with the minds behind their favorite stories.
            </p>
          </div>
          <div>
            <img width={"100%"} height={"300px"} src="https://drsw10gc90t0z.cloudfront.net/AcuCustom/Sitename/DAM/444/Eleanor_Catton_credit_Murdo_MacLeod.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Testimonials */}/
      <section className='md:px-40 p-4 flex flex-col justify-center items-center mt-9'>
        <h1 className='font-bold'>TESTIMONIALS</h1>
        <h1>See What Others Are Saying</h1>
        <div className='md:grid grid-cols-3 w-full mt-4 '>
          <div className="p-3 transition-all duration-300 hover:-translate-y-1">
            <div className='shadow p-3 rounded flex flex-col justify-content items-center'>
              <img className='rounded-full' height={"150px"} width={"150px"} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" />
              <p className='text-xl font-bold mt-2'>Author</p>
              <div className='text-center'>
                <p>“BookVerse has completely transformed my reading experience. The collection is vast, beautifully categorized, and the recommendations are always spot-on. I’ve discovered so many amazing authors I wouldn’t have found elsewhere. It feels like a personal library built just for me!”</p>
              </div>
            </div>
          </div>
          <div className="p-3 transition-all duration-300 hover:-translate-y-1">
            <div className='shadow p-3 rounded flex flex-col justify-content items-center'>
              <img className='rounded-full' height={"150px"} width={"150px"} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" />
              <p className='text-xl font-bold mt-2'>Author</p>
              <div className='text-center'>
                <p>“BookVerse has completely transformed my reading experience. The collection is vast, beautifully categorized, and the recommendations are always spot-on. I’ve discovered so many amazing authors I wouldn’t have found elsewhere. It feels like a personal library built just for me!”</p>
              </div>
            </div>
          </div>
          <div className="p-3 transition-all duration-300 hover:-translate-y-1">
            <div className='shadow p-3 rounded flex flex-col justify-content items-center'>
              <img className='rounded-full' height={"150px"} width={"150px"} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" />
              <p className='text-xl font-bold mt-2'>Author</p>
              <div className='text-center'>
                <p>“BookVerse has completely transformed my reading experience. The collection is vast, beautifully categorized, and the recommendations are always spot-on. I’ve discovered so many amazing authors I wouldn’t have found elsewhere. It feels like a personal library built just for me!”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage;
