import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './common/pages/LandingPage'
import Contact from './common/pages/Contact'
import Auth from './common/pages/Auth'
import Pnf from './common/pages/Pnf'
import AllBooks from './user/pages/AllBooks'
import Careers from './user/pages/Careers'
import Profile from './user/pages/Profile'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import { useEffect, useState } from 'react'
import PreLoader from './common/pages/PreLoader'

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    }, 4000)
  }, [])

  return (
    <>
      <Routes>
        {/* common */}
        <Route path='/' element={loader ? <PreLoader/> : <LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/*' element={<Pnf />}/>

        {/* users */}
        <Route path='/all-books' element={<AllBooks/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/view-book/:id' element={<LandingPage/>}/>

        {/* admin */}
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='/admin-books' element={<AdminBooks/>}/>
        <Route path='/admin-career' element={<AdminCareers/>}/>
        <Route path='/admin-settings' element={<AdminSettings/>}/>
      </Routes>
    </>
  )
}

export default App
