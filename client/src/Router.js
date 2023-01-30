import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './Home'
import Template from './Template'
export const Router = () => {

    
   return (
    <div className="page">
        <BrowserRouter>
            <Routes onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" element={<Home />} />
                <Route path="/templates" element={<Template />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default Router;