import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import Footer from "./Components/Footer";
import {Navbar} from "./Components/Header";
import ParticlesBg from "particles-bg";
import MouseParticles from "react-mouse-particles";

const Confidentialite = () => {
    return (<div style={{height: "100vh"}}>
        <Navbar/>
        <div style={{
            textAlign: "center", color: "white", margin: "80px 2% 2% 2%"
        }}>
            <h1 style={{color: "white"}}>Politique de Confidentialité:</h1><br/>
            <p>Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, ce site recueille uniquement
                des journaux de données standard, qui incluent l'adresse IP des visiteurs, en configuration par défaut du serveur web Nginx.</p>
            <p>Sachez que ces données sont strictement utilisées pour garantir le bon fonctionnement et la sécurité du site et ne sont pas exploitées
                à des fins personnelles, commerciales ou de marketing.</p>
            <p>Les informations sont conservées en accord avec les obligations de la Commission Nationale de l'Informatique et des Libertés (CNIL)
                concernant la durée et les modalités de conservation des données.</p>
            <p>Pour toute question relative à la gestion des données de ce site, n'hésitez pas à me contacter.</p>
            <p>Date de dernière mise à jour : 13/07/2023</p>

        </div>
        <div><Footer/></div>
    </div>);
};

const LayoutMouseEffect = ({children}) => {
    return (<>
        {children} <MouseParticles g={1} level={10} num={1} color={["#ffffff", "#000000"]} cull="col,image-wrapper"/>
    </>);
};

const LayoutBackgroundEffect = ({children}) => {
    return (<>
        {children} <ParticlesBg type="cobweb" color="#ffffff" num={window.innerWidth * window.innerHeight / 6000} bg={true}/>
    </>);
};

const Layout = ({children}) => {
    return (<>
        <LayoutBackgroundEffect><LayoutMouseEffect>{children}</LayoutMouseEffect></LayoutBackgroundEffect>
    </>);
};

ReactDOM.render(<ParallaxProvider> <BrowserRouter> <Routes> <Route path="/" element={<Layout><App/></Layout>}/> <Route path="confidentialite"
                                                                                                                       element={
                                                                                                                           <Layout><Confidentialite/></Layout>}/>
    <Route path="*" element={<Layout><App/></Layout>}/> </Routes> </BrowserRouter> </ParallaxProvider>, document.getElementById("root"));
