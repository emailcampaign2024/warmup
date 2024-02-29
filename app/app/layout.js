import React from 'react'
import Navbar from '../ui/navbar/navbar'
import Sidebar from '../ui/sidebar/sidebar'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col'>
        <div>
            <Navbar />
        </div>
        <div className='flex'>
            <Sidebar />
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Layout