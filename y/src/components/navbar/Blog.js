import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './nav.css';
function Blog() {
    const [blog,setblog]=useState([]);
useEffect(()=>
{
    axios.get('http://localhost:8000/wp-json/wp/v2/blogs/')
    .then(res=>{
        setblog(res.data);
    })
})
    return (
        <div className='Blog'>
        <div className="container">
        <h1 className='py-5'>Blog: </h1>   
        {blog.map((blo)=>{
        return(<p class="" dangerouslySetInnerHTML={{ __html: blo.content.rendered}} />  
        );
})}       
        </div>
        </div>
    )
}

export default Blog
