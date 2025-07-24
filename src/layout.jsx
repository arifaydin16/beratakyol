import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import Footer from './components/Footer'

export const disallowedTopMenu = ['/signin', '/signup', '/forgot-password', '/membership-information', '/change-password', '/orders', '/payments', '/bills', '/support-requests', '/new-request', '/favorites', '/sss', '/security-settings','/add-balance']
const MainLayout = ({ children }) => {
    return (
        <main>
            <Topbar />
            <Navbar />

            <TopMenu />
            {children}
            <Footer />
        </main>
    )
}

export default MainLayout