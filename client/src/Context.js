import React, { createContext, useReducer, useContext, useState, useEffect} from 'react';
import axios from "axios";


const Auth = createContext();

const  Context = ({children}) => {
   
    const isAuthenticated = localStorage.getItem("access_token");
    const profile = JSON.parse(localStorage.getItem("user_info"));
    const [state, dispatch] = useReducer(authReducer,{
        authUser: isAuthenticated,
        user_info: profile,
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