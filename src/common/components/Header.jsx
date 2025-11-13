import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaRegUser, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";

function Header() {
    const [listStatus, setListStatus] = useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                <div className='flex items-center'>
                    <Link className='flex items-center'>
                        <img width={"80px"} src="https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-book-logo-template-vector-illustration-studying-sign-page-vector-png-image_39898376.png" alt="" />
                        <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKVERSE</h1>
                    </Link>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <Link><h1 className='text-3xl font-bold'>BOOKVERSE</h1></Link>
                </div>
                <div className="md:flex justify-end items-center hidden gap-3 text-xl">
                    <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                    <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
                    <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
                    <Link to={"/login"}><button className='flex justify-between items-center border border-black rounded cursor-pointer px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaRegUser className='me-2' />Login</button></Link>
                </div>
            </div>
            <nav className='w-full bg-gray-900 text-white p-5'>
                <div className='flex justify-between items-center md:hidden'>
                    <button onClick={()=>setListStatus(!listStatus)}><TiThMenu  className='text-2xl'/></button>
                    <Link to={"/login"}><button className='flex justify-between items-center border border-black rounded cursor-pointer px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaRegUser className='me-2' />Login</button></Link>
                </div>
                <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden'}>
                    <li className='md:mx-4 mt-3 md:mt-0'>  <Link to={"/"} >Home</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/all-books"}>Books</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/careers"}>Careers</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
