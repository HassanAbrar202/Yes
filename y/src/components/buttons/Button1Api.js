import React,{useState,useEffect} from 'react'
import App from '../../App';

function Button1Api(props) {
    const Auth='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTY0MDUzNTcxOSwibmJmIjoxNjQwNTM1NzE5LCJleHAiOjE2NDExNDA1MTksImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.skvruS6XL4w56AlJtZyYXGDmkyThgmDzLd1Ap4CUIDU';
    let form=props.apiRegisterDetails;
    let formData=
    {
                 title:form.Name,
                // content:"1hahahah",
                fields:
                {
                    name:form.Name,
                    fathername:form.fatherName,
                    age:form.Age,
                    institute:form.Institute,
                    whatsappnumber:form.Number,
                    email:form.Email,
                    address:form.Address,
                    applyfor:form.applyFor
                },
                 status: "publish"
    }
    useEffect(()=>
    {
        console.log(props.apiRegisterDetails.Name);
        if(props.apiRegisterDetails.Name.length>0)
        {
        fetch('http://localhost:8000/wp-json/wp/v2/registered_users/',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                "Content-Type":'application/json',
                'Accept':'application/json',
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTY0MjEyMTU5NiwibmJmIjoxNjQyMTIxNTk2LCJleHAiOjE2NDI3MjYzOTYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.VRhan6tlxEKlReanxBninkly-oi-uZyN-dpuFaFtA_0'
            }
        })
        .then((response) => response.json()) //json
        .then((data) => {
            console.log(data)
        })
    }})
    return (
        <div>
            
        </div>
    )
}

export default Button1Api
