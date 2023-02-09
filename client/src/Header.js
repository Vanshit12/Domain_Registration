import React, {useEffect, useState} from 'react';
import {Container, Card, Col, Row, Button,Nav  } from 'react-bootstrap';
import {Link, Navigate, NavLink} from 'react-router-dom';
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
        var Id = "705312850932-flpf5bhoj8gaads1u6squftulqp43m68.apps.googleusercontent.com"
    
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

        localStorage.removeItem('access_token')
        localStorage.removeItem('profile')
        // setToken('')
        // setProfile('')
        // navigate('/login')
    }

    return(
        <>
        <Container xl={12} style={{justifyContent: 'center', marginTop: '20px'}}>
            <Row>
            <Col xl={6} style={{display: 'flex'}}>
                <>
                <Nav.Item style={{margin: '0px 20px'}}>
                    <NavLink to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item style={{margin: '0px 20px'}}>
                    <NavLink to="/pricing">Pricing</NavLink>
                </Nav.Item>
                <Nav.Item style={{margin: '0px 20px'}}>
                    <NavLink to="/templates">Templates</NavLink>
                </Nav.Item>
                </>
            </Col>
                <Col xl={6}>
                    <Nav style={{display: 'flex', justifyContent: 'center' }}>
                        {
                            (authUser && user_info != '') ?
                            <>
                        <Nav.Item>
                            <div style={{display: 'flex', justifyContent: 'center' }}>
                            <p style={{margin: '0px 20px'}}>Welcome {user_info.name}</p>
                            <Button onClick={logOut}>Log out</Button>
                            </div>
                        </Nav.Item>
                            </> :
                        <Nav.Item>
                            
                            <div>                            
                                <NavLink to="/login">Log in</NavLink>
                            </div>
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