import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'


function RootLayout() {
  return (
    <div>
      <Header />
    <Outlet />
    </div>
  )
}

export default RootLayout