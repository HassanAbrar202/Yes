import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './nav.css';
function Privacy() {
    const [tandc,settandc]=useState([]);
useEffect(()=>
{
    axios.get('http://localhost:8000/wp-json/wp/v2/privacy_terms/')
    .then(res=>{
        settandc(res.data);
    })
})
    return (
        <div className='Privacy'>
        <div className="container">
        <h1 className='py-5'>Privacy And Terms: </h1>   
        {tandc.map((tc)=>{
        return(<p class="" dangerouslySetInnerHTML={{ __html: tc.content.rendered}} />  
        );
})}       
        </div>
        </div>
    )
}

export default Privacy
