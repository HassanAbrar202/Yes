import React,{useState,useEffect} from "react";
function SignupAuto(props) {
    const [urlToLogin, setUrlToLogin] = useState('')
    console.log(props.APIDetailsSignUp);
    useEffect(()=>
        {   
            let email=props.APIDetailsSignUp.email;
            let password=props.APIDetailsSignUp.pass;
            let user_login=props.APIDetailsSignUp.user;
            const AUTH_KEY='abc123';
            let formData={email,password,user_login,AUTH_KEY};
            const url = 'http://localhost:8000/wp-json/simple-jwt-login/v1/auth';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type":'application/json',
                    'Accept':'application/json'
                }
            })
            .then((response) => response.json()) //json
                .then((data) => {
                     if (data['success']===true){
                        localStorage.setItem('jwt', data['data']['jwt'])
                        setUrlToLogin(`http://localhost:8000/?rest_route=/simple-jwt-login/v1/autologin&JWT=${data['data']['jwt']}&AUTH_KEY=${AUTH_KEY}`);
                    }
               })
        },[props.APIDetailsSignUp])
            useEffect(() => {
          if (urlToLogin.length > 0) {
              fetch(urlToLogin, {
                  method: 'GET'
              })
                  .then((response) => {
                      if (response) {
                           props.setIsLoggedIn(true)
                           props.setUsername(props.APIDetailsSignUp.user)
                           window.location.replace('http://localhost:3000')
                         console.log(response)
                       }
                       else {
                           console.log('error')
                       }
                  })
          }

      }, [urlToLogin])
    return (
        <div>

        </div>
    )
}

export default SignupAuto
