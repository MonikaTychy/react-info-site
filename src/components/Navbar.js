import React from 'react'
import logo from '../images/logo.png'

export default function Navbar(props) {

    console.log(props.lightMode)
    
    return (
        <nav className={props.lightMode ? "light" : ""}>
            <img src={logo} alt='react sign' className='navbar-logo'/>
            <h2 className='navbar-title'>ReactFacts</h2>
            <div className='toggler'>
                <p className='toggler-txt-light'>Light</p>
                <div className='toggler-slider' onClick={props.toggleLightMode}>
                  <div className='toggler-slider-circle'></div>
                </div>
                <p className='toggler-txt-dark'>Dark</p>
            </div>
        </nav>
    )
}