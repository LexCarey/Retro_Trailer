import React from 'react'
import Booking from '../components/Booking/Booking'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Fade from '../components/Fade/Fade'

const Main = () => {
    return (
        <div>
            <Header/>
            <Booking/>
            <Fade color1="rgb(255, 252, 241)" color2="rgb(228, 245, 221)"/>
            <Info/>
            <Fade color1="rgb(228, 245, 221)" color2="rgb(250, 225, 252)"/>
        </div>
    )
}

export default Main