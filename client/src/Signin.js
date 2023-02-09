import React, {useEffect} from 'react';
import {Container, Card, Col, Row, Button } from 'react-bootstrap';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';
import { useNavigate } from "react-router-dom";
import { AuthState } from './Context';

export const Signin = () => {
    const navigate = useNavigate();
    const {state : {authUser, user_info }, dispatch} = AuthState();
    useEffect(() => {
        var Id = "705312850932-flpf5bhoj8gaads1u6squftulqp43m68.apps.googleusercontent.com"
    
        gapi.load('client:auth2',()=> {    
            gapi.auth2.init({clientId: Id})
        })

    var token = localStorage.getItem('access_token');
    if(token){
      navigate('/')
      }else{
        navigate('/login')
      }

    },[]);
  
    const handleLogin = async (googleData) => {
        console.log(googleData);
        const res = await fetch("http://localhost:5000/auth/google", {
          method: "POST",
          body: JSON.stringify({
            token: googleData.tokenId
          }),
        headers: {
          "Content-Type": "application/json"
          }
        })

        const data = await res.json()
        console.log(data)
        localStorage.setItem('access_token', googleData.accessToken)
        localStorage.setItem('user_info', JSON.stringify(googleData.profileObj))
        dispatch({type:'LOGIN',payload:googleData.accessToken});
        dispatch({type:'PROFILE',payload:googleData.profileObj});
        navigate('/')
      }
    
    const handleError = async (err) => {
        console.log(err);
    }

    return(
        <>
        <Container xl={12} style={{position: 'absolute', top: '40%', left:'40%'}}>
        <GoogleLogin
            clientId={"705312850932-flpf5bhoj8gaads1u6squftulqp43m68.apps.googleusercontent.com"}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleError}
            cookiePolicy={'single_host_origin'}
            prompt={'select_account'}
        />            
        </Container>
        </>
    );
}

export default Signin;