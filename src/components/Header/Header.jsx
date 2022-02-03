import React from 'react'
import Header1 from '../../images/header1.png'
import Header2 from '../../images/header2.jpg'
import './styles.css'

const Header = () => {
    return (
        
        <>          
            <div className='header'>
                <img src={Header1} alt="header" />
            </div>

            <h1 className='header'>- ZAPATILLAS PREMIUM -</h1>

            <div className='header'>
                <img src={Header2} alt="header" />
            </div>
        </>

    )
}

export default Header
