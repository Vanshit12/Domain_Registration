import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './Home'
import Template from './Template'
import Pricing from './Pricing'
import Signin from './Signin'
import {AuthState} from './Context'
import Header from './Header'
export const Router = () => {

    // const {state : {authUser, user_info}, dispatch} = AuthState();

   return (
    <div className="page">
        <BrowserRouter>
        <Header />
            <Routes onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" element={<Home />} />
                <Route path="/templates" element={<Template />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default Router;