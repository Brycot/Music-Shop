import React, { children } from 'react'
import Header from '@containers/Header/Header';
function Layout({ children }) {
  return (
    <div className='Layout'>
        {/* <Header /> */}
        {children}
    </div>
  )
}

export default Layout;