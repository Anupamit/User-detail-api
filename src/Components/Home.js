import React from 'react'
import Navbar from './Navbar'
import './Home.css'

function Home(){
    return (
        <div>
            <Navbar/>
            <div class="typewriter">
                <h1>Click the GetData to fetch the api data.</h1>
            </div>
        </div>
    )   
}

export default Home