import React,{useRef,useEffect,useState} from 'react';
//import SignaturePad from "react-signature-drawing";
//import Button2Api from './Button2Api';
import './button.css';
import SignaturePad from 'react-signature-pad-wrapper';
function Button2() {
    const [image,setImage]=useState('');
    const [signature,setSignature]=useState('');
    const[signatoryDetails,setSignatoryDetails]=useState({
        Name:'',
        fatherName:'',
        Age:'',
        City:'',
        Country:'',
        Email:'',
      })
    const[apiSignatoryDetails,setApiSignatoryDetails]=useState({
        Name:'',
        fatherName:'',
        Age:'',
        City:'',
        Country:'',
        Email:'',
      })
      function handleChange(e) {
        const { name, value } = e.target
        setSignatoryDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }
    function handleSubmit() {
        setApiSignatoryDetails({ ...signatoryDetails });
        setSignatoryDetails({  
            Name:'',
            fatherName:'',
            Age:'',
            City:'',
            Country:'',
            Email:'',
        });
        // navigate('/');
      }
    let sigpad=useRef({});
    let data='';
    let test='';
    const clear=()=>
    {
        sigpad.current.clear();
    }
    const save=()=>
    {
        setSignature(sigpad.current.toDataURL());
        setImage(sigpad.current.fromDataURL(signature))

    }
    // useEffect(()=>{

    // })
    //console.log(fromDataURL(data))
    const show=()=>
    {
        sigpad.current.fromDataURL(signature);
        console.log(signature)
    }
    let formData=
    {
                 title:apiSignatoryDetails.Name,
                // content:"1hahahah",
                fields:
                {
                    name:apiSignatoryDetails.Name,
                    fathername:apiSignatoryDetails.fatherName,
                    age:apiSignatoryDetails.Age,
                    institute:apiSignatoryDetails.City,
                    whatsappnumber:apiSignatoryDetails.Country,
                    email:apiSignatoryDetails.Email,
                    signature:{
                        url:image
                    }
                },
                 status: "publish"
    }

    console.log({formData})
    useEffect(()=>
    {
        if(apiSignatoryDetails.Name.length>0)
        {

        }
    })
    return (
        <>
        <div className='App'>
        <h1 className='m-5'><u>Signatory Compaign Form </u></h1>
        <div className='test'>{image}</div>
<div class="form-group">
<label>Name: </label>
<input type="text" name='Name' value={signatoryDetails.Name} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Name" onChange={handleChange}/>
</div> <div class="form-group">
<label>Father Name: </label>
<input type="text" name='fatherName' value={signatoryDetails.fatherName} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Father Name" onChange={handleChange}/>
</div>
<div class="form-group">
<label>Age: </label>
<input type="number" name='Age' value={signatoryDetails.Age} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Age" onChange={handleChange}/>
</div>
<div class="form-group">
<label>City: </label>
<input type="text" name='City' value={signatoryDetails.City} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your City" onChange={handleChange}/>
</div>
<div class="form-group">
<label>Country: </label>
<input type="text" name='Country' value={signatoryDetails.Country} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your City" onChange={handleChange}/>
</div>
<div class="form-group">
<label>Email address</label>
<input type="email" name='Email' value={signatoryDetails.Email} class="form-control" style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter email" onChange={handleChange}/>
<small class="form-text text-muted">We'll never share your email with anyone else.</small>
<div className='signature'>
<button onClick={clear}>Clear</button>
<button onClick={save}>Save</button>
<button onClick={show}>Show</button><br/>
<div className="sigCanvas">
<SignaturePad 
height={200}
ref={sigpad}    
options={{penColor: 'rgb(66, 133, 244)', className:'sigCanvas'}}
/>
</div>
</div>
<button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>
    </div>
 {/* <Button2Api apiSignatoryDetails={apiSignatoryDetails} signature={signature} sigpad={sigpad} /> */}
    </>
    )
}

export default Button2
