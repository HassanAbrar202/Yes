import React,{useState,useEffect} from 'react';
import Button3certificate from './Button3certificate';
import './button.css'
function Button3() {
    const[submit,setSubmit]=useState(false);
    const [selectedFile,setSelectedFile]=useState();
    const[certificateDetails,setCertificateDetails]=useState({
        Name:'',
        fatherName:'',
        Age:'',
        degreeProgram:'',
        University:'',
        Semester:'',
        currentCGPA:'',
        Contact:'',
      })
      const[apiCertificateDetails,setApiCertificateDetails]=useState({
        Name:'',
        fatherName:'',
        Age:'',
        degreeProgram:'',
        University:'',
        Semester:'',
        currentCGPA:'',
        Contact:'',
      })
      function handleChange(e) {
        const { name, value } = e.target
        setCertificateDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }
    console.log(certificateDetails)
    function handleSubmit() {
    {
        // if(certificateDetails.Name.length<=0 || certificateDetails.fatherName.length<=0 || certificateDetails.Age.length<=0 || certificateDetails.degreeProgram.length<=0 ||
        //  certificateDetails.University.length<=0 || certificateDetails.Semester.length<=0 || certificateDetails.currentCGPA.length<=0 || certificateDetails.Contact.length<=0)
        //  {
        //      alert("KIndly Enter All the fields")
        //  }
        //  else
          {
    setApiCertificateDetails({ ...certificateDetails });
    setCertificateDetails({  
      Name:'',
      fatherName:'',
      Age:'',
      degreeProgram:'',
      University:'',
      Semester:'',
      currentCGPA:'',
      Contact:'',});
      setSubmit(true);
      // navigate('/');
    }
    }
}
    function onFileChange(e)
    {
        setSelectedFile(e.target.files[0]);
    }
    return (
        <div>
        
        {submit==false?
        (
        <div className='App'>
            <h1 className='m-5'><u>Student Talent Award</u></h1>
    <div>
    <div className="form-group">
    <label>Name: </label>
    <input type="text" name='Name' value={certificateDetails.Name} className={certificateDetails.Name.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Name" onChange={handleChange} required="true"/>
  </div> <div className="form-group">
    <label>Father Name: </label>
    <input type="text" name='fatherName' value={certificateDetails.fatherName} className={certificateDetails.fatherName.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Father Name" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Age: </label>
    <input type="number" name='Age' value={certificateDetails.Age} className={certificateDetails.Age.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Age" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Degree Program: </label>
    <input type="text" name='degreeProgram' value={certificateDetails.degreeProgram} className={certificateDetails.degreeProgram.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Degree Program" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>University: </label>
    <input type="text" name='University' value={certificateDetails.University} className={certificateDetails.University.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your University" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Semester: </label>
    <input type="number" name='Semester' value={certificateDetails.Semester} className={certificateDetails.Semester.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Semester"onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label>Current CGPA: </label>
    <input type="text" name='currentCGPA' value={certificateDetails.currentCGPA} className={certificateDetails.currentCGPA.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Current CGPA" onChange={handleChange}/>
  </div>
  <div className="form-group">
      <label >Contact: </label>
      <input type="number" name='Contact' value={certificateDetails.Contact} className={certificateDetails.Contact.length<=0 ?'form-control error-input':'form-control success-input'} style={{width:"50%",textAlign:'center',marginLeft:"25%"}} placeholder="Enter Your Contact Info" onChange={handleChange}/>
    </div>
    <div>
        <label>Upload your Transcript: </label>
        <input type="file" onChange={onFileChange}/>    
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>

        </div>
        ):
(
    <Button3certificate apiCertificateDetails={apiCertificateDetails}/>
)}
 </div>
    )
}

export default Button3
