import React from "react";
import {BrowserRouter as Router ,Routes ,Route }from 'react-router-dom';
import Components from "./Components";
import NavBarComponent from "../CommonComponents/Navbar";


export default function Maincomponent (){
    return(
     <div style={{width:'100%'}}>
           <Router>
            <NavBarComponent></NavBarComponent>
            <Routes>
                <Route path="/" element={<Components/>}></Route>
            </Routes>
        </Router>
     </div>
    )
}