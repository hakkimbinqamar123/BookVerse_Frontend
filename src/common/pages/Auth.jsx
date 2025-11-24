import React, { useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import { registerAPI } from '../../services/allAPI';

function Auth({ register }) {
  const [viewPassword, setViewPassword] = useState(false)
  const [useDetails, setUseDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = async () =>{
    const {username, email, password} = useDetails;
    if(!email || !password || (register && !username)){
      alert("Please fill all the fields")
    } else {
      const result = await registerAPI(useDetails);
      console.log(result)
    }
  }

  return (
    <>
      <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[url(https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg)] bg-cover bg-center'>
        <div className="p-5 sm:p-10">
          <h1 className='text-3xl font-bold text-center text-white'>BOOKVERSE</h1>
          <div className='w-[90%] sm:w-[400px] bg-black/50 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mb-3 flex justify-center items-center'>
              <FaRegCircleUser className='text-6xl' />
            </div>
            <h1 className='text-2xl'>{register ? "Register" : "Login"}</h1>
            <form>
              {register && <div className='my-4'>
                <label>Username</label>
                <input value={useDetails.username} onChange={(e)=> setUseDetails({...useDetails, username: e.target.value})} type="text" placeholder='Username' className='w-full bg-white p-2 mt-2 rounded placeholder-gray-500 text-black' />
              </div>}
              <div className='my-4'>
                <label>Email</label>
                <input value={useDetails.email} onChange={(e)=> setUseDetails({...useDetails, email: e.target.value})} type="email" placeholder='Email' className='w-full bg-white p-2 mt-2 rounded placeholder-gray-500 text-black' />
              </div>
              <div className='my-4'>
                <label>Password</label>
                <input value={useDetails.password} onChange={(e)=> setUseDetails({...useDetails, password: e.target.value})}  type={viewPassword ?"text" : "password"} placeholder='Password' className='w-full bg-white p-2 mt-2 rounded placeholder-gray-500 text-black' />
               { viewPassword ?
                <button type='button'><IoEye onClick={()=>setViewPassword(false)} className='text-gray-500 cursor-pointer mt-2' style={{marginLeft: "-30px"}}/></button>
               :
                <button type='button'><IoMdEyeOff  onClick={()=>setViewPassword(true)} className='text-gray-500 cursor-pointer mt-2' style={{marginLeft: "-30px"}}/></button>
                }
              </div>
              <p className='text-xs text-orange-400 mt-2'>Never share your password with others</p>
              <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded mt-4'>
                {register ? "Register" : "Login"}
              </button>
              <div className='mt-3'>
                {register ? (
                  <p>Already a user? <Link className='text-blue-400' to={"/login"}>Login <span className='text-white'> |</span> <Link className='text-blue-400' to={"/"}>Home</Link></Link></p> 
                ) : (
                  <p>Are you a new user? <Link className='text-blue-400' to={"/register"}>Register <span className='text-white'> |</span> <Link className='text-blue-400' to={"/"}>Home</Link></Link></p> 
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Auth
