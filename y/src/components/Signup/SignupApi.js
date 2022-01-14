import React,{useState,useEffect} from "react";
// import SignupAuto from "./SignupAuto";
function SignupApi(props) {
    const [urlToLogin, setUrlToLogin] = useState('')

    let email=props.APIDetailsSignUp.email;
    let password=props.APIDetailsSignUp.pass;
    let user_login=props.APIDetailsSignUp.user;
    const AUTH_KEY='abc123';
    let formData={email,password,user_login,AUTH_KEY};
    useEffect(() => {
        if (props.APIDetailsSignUp.user.length > 0) {
            // let formData = new FormData()
            // formData.append('user', props.APIDetailsSignUp.user)
            // formData.append('email', props.APIDetailsSignUp.email)
            // formData.append('pass', props.APIDetailsSignUp.pass)
            console.log(formData);
            const url = 'http://localhost:8000/wp-json/simple-jwt-login/v1/users';
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
                        //localStorage.setItem(jwt, data['user']['user_activation_key'])
                        //console.log(data['user']['user_activation_key']);
                         //setUrlToLogin(`http://localhost:8000/wp-json/simple-jwt-login/v1/autologin&JWT=${jwt}&AUTH_KEY=${AUTH_KEY}`)
                        console.log(data)
                     }
                })
        }
    }, [props.APIDetailsSignUp])
    console.log(props.APIDetailsSignUp);
    useEffect(()=>
        {
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
                        //localStorage.setItem('jwt', data['data']['jwt'])
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

    // useEffect(() => {
    //      if (urlToLogin.length > 0) {
    //          fetch(urlToLogin, {
    //              method: 'GET'
    //          })
    //              .then((response) => {
    //                  //if (response) {
    //                     //  props.setIsLoggedIn(true)
    //                     //  props.setUsername(props.APIDetailsSignUp.user)
    //                     //  window.location.replace('http://localhost:3000/')
    //                     console.log(response)
    //                 //  }
    //                 //  else {
    //                 //      console.log('error')
    //                 //  }
    //              })
    //      }

    //  }, [urlToLogin])
    return (
        <div>
           
        </div>
    )
}

export default SignupApi
