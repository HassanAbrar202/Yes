<?php
echo "hello";
//accept the data react
$email=$_POST['email'];
$password=$_POST['pass'];
$user_login=$_POST['user'];
//add the auth key
$AUTH_KEY='abc123';

$url='http://localhost:8000/?rest_route=/simple-jwt-login/v1/users&email='. $email . '&user_login='. $user_login .'&password='. $password .'&AUTH_KEY='. $AUTH_KEY;

//send signup reuest post to wp => recieve success message

$ch =curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST,true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
$server_output=curl_exec($ch);
curl_close($ch);

$server_output_decode=json_decode($server_output);

if(isset($server_output_decode->success)&& $server_output_decode->success==0)
{
    echo $server_output;
}
//send authetication request to wp => send result to react
else
{
$authenticationUrl='http://localhost:8000/?rest_route=/simple-jwt-login/v1/auth&email='.$email.'&password='.$password;
$ch= curl_init();
curl_setopt($ch, CURLOPT_URL,$authenticationUrl);
curl_setopt($ch, CURLOPT_POST,true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
$server_output=curl_exec($ch);
curl_close($ch);
echo $server_output;
}
?>