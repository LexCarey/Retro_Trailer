import React from 'react'
import Booking from '../components/Booking/Booking'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Fade from '../components/Fade/Fade'
import Contact from '../components/Contact/Contact'

const Main = () => {
    return (
        <div>
            <Header/>
            <Booking/>
            <Fade color1="#ece6c2" color2="#DDE7C7"/>
            <Info/>
            <Fade color1="#DDE7C7" color2="#e7cfc7"/>
            <Contact/>
        </div>
    )
}

export default Main