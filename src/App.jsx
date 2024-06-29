import { Children, useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import ReDirect from './pages/redirect'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<ReDirect/>
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
