import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsSend } from "react-icons/bs";

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-40 p-4'>
        <h1 className='text-2xl text-center font-bold my-4'>Contacts</h1>
        <div>
          <p className='text-justify'>
            We’d love to hear from you! Whether you have a question about your order, want to recommend a new title, or simply wish to share your reading experience, the BookVerse team is here to help. Our mission is to make your reading journey smooth, inspiring, and unforgettable — and your feedback helps us do just that. Feel free to reach out for inquiries about books, author collaborations, or general support.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-5 my-7'>
          <div className='flex gap-3 items-center'>
            <FaMapLocationDot className='text-3xl' />
            <p>123 Main Street, Apt 4B,<br />Anytown CA 91234</p>
          </div>
          <div className='flex gap-3 items-center'>
            <FaPhoneAlt className='text-2xl' />
            <p>+91 987461230</p>
          </div>
          <div className='flex gap-3 items-center'>
            <MdEmail className='text-3xl' />
            <p>bookverse@gmail.com</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 justify-center items-center gap-8'>
          <div className='bg-gray-300 w-full'>
            <h3 className='text-center mt-5'>Send me Message</h3>
            <form action="" className='flex flex-col p-5'>
              <div className='flex flex-col'>
                <input className='border border-white rounded bg-white my-2 p-1.5' type="text" placeholder='Name' />
                <input className='border border-white rounded bg-white my-2 p-1.5' type="email" placeholder='Email' />
                <textarea className='border border-white rounded bg-white my-2 h-40 p-1.5' rows={"6"} type="textarea" placeholder='Message'></textarea>
              </div>
              <button className='w-full bg-gray-800 flex justify-center items-center gap-2 rounded text-white p-2 hover:bg-gray-900 transition'>
                Send <BsSend className='text-white text-xl' />
              </button>
            </form>
          </div>

          <div className='w-full'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31477.898955458128!2d76.8811937!3d9.5315315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763008659111!5m2!1sen!2sin"
              className="w-full h-[400px] md:h-[415px]"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BookVerse Location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
