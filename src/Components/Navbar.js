import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'


function Navbar() {
    let [backName, setBackname]=useState(true)
    return (
        <div className='combinenav'>
            <div className='logo'>User Details</div>
            <nav className='item'>
                <ul>
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
                        <Link to={`${backName?'/getdata':"/"}`} onClick={()=>setBackname(!backName)}>{backName?"Get Data":"Back Home"}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar