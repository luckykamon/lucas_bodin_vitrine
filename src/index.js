import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";

const Confidentialite = () => {

    return (<div style={{height: "2000px"}}>
            <div style={{textAlign: "center"}}>

                <h1>Politique de Confidentialite:</h1>
                <p>Le site web ainsi que les applications IOS/Android n'enregistrent aucune données</p>
            </div>
        </div>
    )
}


ReactDOM.render(
    <ParallaxProvider> <BrowserRouter> <Routes> <Route path="/" element={<App/>}/> <Route path="confidentialite"
                                                                                          element={<Confidentialite/>}/>
        <Route path="*" element={<App/>}/> </Routes> </BrowserRouter> </ParallaxProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
