import React from 'react'
import './Datadesign.css'


function DataDesign (props) {
    return (
        <div className='main'>
            {props.data.map((data,i)=>{
                return(
                    <div key={i}>
                        <li className="card-container">
                            <div className="image-container">
                                <img className="round" src={data.avatar} alt='img'/>
                            </div>
                            <div className="name-container"> 
                                <span className="firstName">{data.first_name}</span>
                                <span className="lastName">{data.last_name}</span>
                            </div> 
                            <p className="email">{data.email}</p>  
                        </li>
                    </div>
                )
            })}
        </div>
    )
}

export default DataDesign