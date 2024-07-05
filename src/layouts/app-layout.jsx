import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <main className='min-h-screen container'>
                <Header />
                <Outlet />
            </main>

            <div className="p-10 text-center bg-gray-100 mt-10">
                Made with Tailwind CSS & Shadcn Ui
            </div>
        </div>
    )
}

export default AppLayout