import React,{useState,useEffect} from 'react';
import './button.css';
// import {useNavigate} from  'react-router-dom';
import Button1Api from './Button1Api';
import axios from 'axios';

function Button1() {
  // let navigate =useNavigate(); 
  const [send,setSend]=useState(false);
  const[registerDetails,setRegisterDetails]=useState({
    Name:'',
    fatherName:'',
    Age:'',
    Institute:'',
    Number:'',
    Email:'',
    Address:'',
    applyFor:'',
  })
  const[apiRegisterDetails,setApiRegisterDetails]=useState({
    Name:'',
    fatherName:'',
    Age:'',
    Institute:'',
    Number:'',
    Email:'',
    Address:'',
    applyFor:'',
  })
  console.log(registerDetails)
  function handleChange(e) {
    const { name, value } = e.target
    setRegisterDetails(prev => {
        return (
            { ...prev, [name]: value }
        )
    })
}
function handleSubmit() {
  setApiRegisterDetails({ ...registerDetails });
  setRegisterDetails({  Name:'',
  fatherName:'',
  Age:'',
  Institute:'',
  Number:'',
  Email:'',
  Address:'',
  applyFor:''});
  setSend(true);
  // navigate('/');
}
console.log(apiRegisterDetails);

  
  // const [Name,setName]=useState('');
  // const [fatherName,setFatherName]=useState('');
  // const [Age,setAge]=useState('');
  // const [Institute,setInstitute]=useState('');
  // const [Number,setNumber]=useState('');
  // const [Email,setEmail]=useState('');
  // const [Address,setAddress]=useState('');
  // const [Apply,setApply]=useState('');
    return (
      <>
        <div className='App'>
            <h1 className='m-5'><u>Competition Registeration Form</u></h1>
    <div>
    <div className="form-group">
    <label>Name: </label>
    <input type="text" name='Name' value={registerDetails.Name} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Name" onChange={handleChange}/>
  </div> <div className="form-group">
    <label>Father Name: </label>
    <input type="text" name='fatherName' value={registerDetails.fatherName} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Father Name" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Age: </label>
    <input type="number" name='Age' value={registerDetails.Age} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Age" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Institute: </label>
    <input type="text" name='Institute' value={registerDetails.Institute} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Institute" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>WhatsApp Number: </label>
    <input type="Number" name='Number' value={registerDetails.Number} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your WhatsApp Number" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" name='Email' value={registerDetails.Email} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter email"onChange={handleChange}/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label>Address: </label>
    <input type="text" name='Address' value={registerDetails.Address} className="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Address" onChange={handleChange}/>
    <small className="form-text text-muted">Street Address</small>
  </div>
  <div className="form-group">
      <label >Apply For:</label>
      <select className="form-control" name='Apply' value={registerDetails.applyFor} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} onChange={handleChange}>
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>

        </div>
        <Button1Api apiRegisterDetails={apiRegisterDetails} send={send}/>
        </>
    )
}

export default Button1
