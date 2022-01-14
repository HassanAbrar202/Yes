import React from 'react';
import './button.css';
import img from './button_img/Yes_certifcate.jpg';
// import { Document, Page } from 'react-pdf';
// const ref = React.createRef();          

function Button3certificate(props) {
    let form=props.apiCertificateDetails;
    let name=form.Name;
    let cgpa=form.currentCGPA;
    let degree=form.degreeProgram;
    let uni=form.University;

    //var img = require('./button_img/Yes_certificate.jpg');
    return (
        <div className='App'>
        <div className='' >
        <div className='certificate'>
            <img src={img}  alt='certificate'/>
        </div>
            <div className='certificate_name'>{name}</div>
            <div className='certificate_cgpa'>{cgpa}</div>
            <div className='certificate_degree'>{degree}</div>
            <div className='certificate_uni'>{uni}</div>
        </div>
        {/* <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf> */}
        </div>
    )
}

export default Button3certificate
