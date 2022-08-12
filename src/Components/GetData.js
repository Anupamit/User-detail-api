import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import './Datadesign.css'
import Loader from './Loader'
import './Getdata.css'

function GetData(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const backHome=()=>{
        window.location.href = '/'
        console.log('you click the back home page');
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetchData()
        },1000)
    }, [])
    const fetchData = async () => {
        let url= `??`;
        let response=await fetch(url);
        let responseJson= await response.json();
        if (responseJson.data) {
            setData(responseJson.data)
            setLoading(false)
        }
        console.log(responseJson.data)
    }

    return (
        <div>
            <Navbar/>
            <div className='button'>
                <button  onClick={backHome}>Back</button>
            </div>
            {loading ? <Loader/> : data.map((dataElement,i)=>{
                return(
                    <div >
                        <li className="card-container" key={i}>
                            <div className="image-container">
                                <img className="round" src={dataElement.avatar} alt='anupam'/>
                            </div>
                            <div className="name-container"> 
                                {dataElement.first_name} {dataElement.last_name}
                            </div>
                            <div className="email">
                                {dataElement.email}
                            </div>
                        </li>
                    </div>
                )
            })}
        </div>
    )
}

export default GetData