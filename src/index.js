import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Confidentialite = () => {

    return (
        <div style={{textAlign: "center"}}>
            <h1>Politique de Confidentialite:</h1>
            <p>Le site web  ainsi que les applications IOS/Android n'enregistrent aucune données</p>
            <p>Plusieurs lien redirigent vers des sites internets qui collectent vos données dont voici un lien vers leurs politiques de confidentialités:</p>
            <ul>
                <li><a target="_blank" href="https://fr.linkedin.com/legal/privacy-policy">Linkedin</a></li>
                <li><a target="_blank" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Github</a></li>
            </ul>
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="confidentialite" element={<Confidentialite/>}/>
            <Route path="*" element={<App/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
