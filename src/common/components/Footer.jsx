import React from 'react'
import { FaArrowRight, FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="md:grid grid-cols-3 md:gap-15 bg-gray-900 text-white p-10 text-center">

                <div className="max-w-md">
                    <h3 className="font-bold text-lg mb-3">ABOUT US</h3>
                    <p className="text-justify leading-relaxed">
                        Welcome to <span className="text-yellow-400 font-semibold">BookVerse</span>, your one-stop destination for every kind of book lover.
                        We believe that every page holds the power to inspire, educate, and transport you to new worlds.
                        From timeless classics to modern bestsellers, we offer a wide range of books across all genres.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">NEWSLETTER</h3>
                    <p className="my-4">Stay Updated With Our Latest Trends</p>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Email Id"
                            className="p-2 bg-white text-black placeholder-gray-500 rounded-l-md w-2/3"
                        />
                        <button className="bg-yellow-400 cursor-pointer p-3 rounded-r-md hover:bg-yellow-500 transition">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">FOLLOW US</h3>
                    <p className="my-4">Let us be Social</p>
                    <div className="flex justify-center gap-5 text-2xl">
                        <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                        <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
                        <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
                        <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
                    </div>
                </div>
            </div>
            <div className='bg-black p-3 text-center text-white'>
                <p>© {new Date().getFullYear()} BookVerse  | All Rights Reserved &#10084; by Abdul Hakeem </p>
            </div>
        </>
    );
}

export default Footer;
