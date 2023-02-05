import React, { createContext, useReducer, useContext, useState, useEffect} from 'react';
import axios from "axios";


const Auth = createContext();

const  Context = ({children}) => {
   
    // const isAuthenticated = localStorage.getItem("access_token");
    // const profile = localStorage.getItem("profile");
    const [state, dispatch] = useReducer(authReducer,{
        authUser: '',
        user_info: '',
    })

    return <Auth.Provider value={{state, dispatch}}>{children}</Auth.Provider>
}

export default Context;

export const  authReducer = (state, action) => {

    switch (action.type){
        case "LOGOUT":
            return {...state,authUser:null,user_info:{}}
        case "LOGIN":
            return {...state,authUser:action.payload}
        case "PROFILE":
            return {...state, user_info: action.payload}

}    
}

export const AuthState = () =>{
    return useContext(Auth);
}