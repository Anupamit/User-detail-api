import React, {useState,useEffect} from 'react'
import '../Styles/Getdata.css'
import Loader from './Loader'

function GetData(){
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)

    let removeDetails=(id)=>{
        setData (data.filter(x=>x.id!==id))
        
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetchData()
        },500)
    }, [])
    let fetchData = async () => {
        let url= `https://api.github.com/users`;
        let response=await fetch(url);
        let responseJson= await response.json();
        if (responseJson) {
            setData(responseJson)
            setLoading(false)
        }
        console.log(responseJson)
    }

    return (
        <div className='home'>
            <div style={{display:"flex", flexWrap:"wrap" ,margin:"0 60px "}}>
                {loading ? <Loader/> : data.map((dataElement)=>{
                    return(
                        <div>
                        <li className="card-container" key={dataElement.id}>
                            <div className="image-container">
                                <img className="round" src={dataElement.avatar_url} alt='anupam'/>
                            </div>
                            <div className="deails">
                                <div className="name-container"> 
                                    {dataElement.login}
                                </div>
                                <div className="email">
                                    {<a href={dataElement.html_url}> @ Github Profile</a>}
                                </div>
                                <div className="btn">
                                    <button onClick={()=>removeDetails(dataElement.id)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GetData