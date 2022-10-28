import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
   return (
      <div className='wrapper'>
         <Header />
         <div className='container'>
            <Sidebar />
            <div className="container__main">
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default MainLayout
