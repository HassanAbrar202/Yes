import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './nav.css';
function Contact() {
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
    const [contact,setcontact]=useState([]);
useEffect(()=>
{
    axios.get('http://localhost:8000/wp-json/wp/v2/contacts/')
    .then(res=>{
        setcontact(res.data);
    })
})
    return (
        <div className='contacts'>
        <div className="container">
        <h1 className='py-5'>Contact Us: </h1>   
        {contact.map((cont)=>{
        return( 
            <div className='box'>
            <p className='title-contacts' dangerouslySetInnerHTML={{ __html:cont.title.rendered}}>
            </p> 
            <p className='content-contacts' dangerouslySetInnerHTML={{ __html:cont.content.rendered}}>
            </p> 
            {/* <Mailto email={cont.acf.email}>MAil us</Mailto> */}
            <a className='mailto-contacts' href={`mailto:${cont.acf.email}`}>Mail us</a>
            </div>
        ); 

})}       
        </div>
        </div>
    )
}

export default Contact
