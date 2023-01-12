import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Error from '../Component/Error/Error'
import FooterMain from '../Component/Footer/FooterMain'
import Home from '../Component/Home/Home'
import NavbarMain from '../Component/Navbar/NavbarMain'
import News from '../Component/News/News'
import SignIn from '../Component/Registration/SignIn'
import SignUp from '../Component/Registration/SignUp'
import Shop from '../Component/Shop/Shop'
import SportArea from '../Component/SportArea/SportArea'
import Table from '../Component/Table/Table'
import Tickets from '../Component/Tickets/Tickets'

export default function RouterMain() {
    return (
        <div>
            <NavbarMain />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/news' element={<News />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/sportarea' element={<SportArea />} />
                <Route path='/table' element={<Table />} />
                <Route path='/ticket' element={<Tickets />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={<Error />} />

                <Route path='/' element={<Navigate to={'/home'} />} />
            </Routes>
            <FooterMain />
        </div>
    )
}
