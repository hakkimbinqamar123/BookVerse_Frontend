import React from 'react'
import preloader from "../../assets/preloader.gif"
import preloader2 from "../../assets/preloader2.gif"

function PreLoader() {
  return (
    <div className='w-full h-full flex h-screen justify-center items-center'>
      <img src={preloader2} alt="" className='h-150 w-150'/>
    </div>
  )
}

export default PreLoader
