import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className='combinenav'>
            <div className='logo'>Advertyzement</div>
            <nav className='item'>
                <ul className='ul'>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/getdata'>Get Data</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar