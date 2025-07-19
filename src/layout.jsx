import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import Footer from './components/Footer'

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