import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header flex justify-center'>
            <div className='flex' onClick={() => document.getElementById('home').scrollIntoView()}>Home</div>
            <div className='flex' onClick={() => document.getElementById('info').scrollIntoView()}>Info</div>
            <div className='flex'>Contact</div>
        </div>
    )
}

export default Header