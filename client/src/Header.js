import React, {useEffect, useState} from 'react';
import {Container, Card, Col, Row, Button,Nav  } from 'react-bootstrap';
import {Link, Navigate, to} from 'react-router-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';
import { AuthState } from './Context';
// import { useNavigate } from "react-router-dom";

export const Header = () => {
    // const navigate = useNavigate();
    const {state : {authUser, user_info}, dispatch} = AuthState();

    const [token, setToken] = useState('');
    const [profile, setProfile] = useState('');
    useEffect(() => {
        var Id = "474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"
    
        gapi.load('client:auth2',()=> {    
            gapi.auth2.init({clientId: Id})
        })
        console.log(authUser, user_info, 'user_info')
        console.log(authUser, 'authUser')

        // setToken(localStorage.getItem('access_token'));
        // var user =  JSON.parse(localStorage.getItem('profile'))
        // console.log(user)
        // console.log(profile, 'profile')
        // setProfile(user);
        // console.log(user)
    },[]);

    const logOut = () => {
        // dispatch("LOGOUT")
        dispatch({type:'LOGOUT'});

        // localStorage.removeItem('access_token')
        // localStorage.removeItem('profile')
        // setToken('')
        // setProfile('')
        // navigate('/login')
    }

    return(
        <>
        <Container xl={12} style={{justifyContent: 'center', marginTop: '20px'}}>
            <Row>
                <Col xl={12}>
                    <Nav  as="ul">
                        
                        
                        {
                            (authUser && user_info != '') ?
                            <>
                        <Nav.Item as="li">
                            <p>Welcome {JSON.parse(user_info).name}</p>
                            {console.log(JSON.parse(user_info).name)}
                            <Button onClick={logOut}>Log out</Button>
                        </Nav.Item>
                            </> :
                        <Nav.Item as="li">
                            <Nav.Link href="/login">Log in</Nav.Link>
                        </Nav.Item>
                        }
                    </Nav>      
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Header;