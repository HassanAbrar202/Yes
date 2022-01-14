import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './nav.css';
function About() {
    const [para,setpara]=useState([]);
useEffect(()=>
{
    axios.get('http://localhost:8000/wp-json/wp/v2/about/')
    .then(res=>{
        setpara(res.data);
    })
})
    return (
        <div className='about-page'>
        <div className="container-about">
        <h1 className='my-5'>About Us: </h1>   
        {para.map((par)=>{
        return(<p class="" dangerouslySetInnerHTML={{ __html: par.content.rendered}} />  
        );
})}       
        </div>
        </div>
    )
}

export default About
