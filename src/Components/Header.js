import React, {useEffect, useState} from 'react';
import Fade from "react-reveal";
import './typingEffect.css'; // Assuming you put the CSS in a separate file

const TypingEffect = ({text}) => {
    const [currentText, setCurrentText] = useState(" ");
    let index = 0;

    useEffect(() => {
        const typeEffect = () => {
            setCurrentText((prevText) => prevText + text.charAt(index++));
            if (index < text.length) {
                setTimeout(typeEffect, Math.random() * 50 + 10);
            }
        };

        if (document.readyState === 'complete') {
            typeEffect();
        } else {
            window.addEventListener('load', () => setTimeout(() => {
                typeEffect();
            }, 500));
            return () => window.removeEventListener('load', typeEffect);
        }
    }, [text]);

    return <h3 id="type-effect">{currentText}</h3>;
};


const Header = (props) => {
    let github
    let linkedin
    let name
    let description
    let profilepic
    if (!props.data) {
        github = "/";
        linkedin = "/";
        name = "";
        description = "";
        profilepic = "";
    } else {
        github = props.data.github;
        linkedin = props.data.linkedin;
        name = props.data.name;
        description = props.data.description;
        profilepic = "/images/" + props.data.image;
    }

    return (
        <header id="home">
            <div id="nav-wrap">
                <ul id="nav" className="nav" style={{fontSize: "15px"}}>
                    <li className="current">
                        <a className="smoothscroll" href="#home"> Accueil </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume"> Résumé </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#contact"> Contact </a>
                    </li>
                </ul>
            </div>

            <div className="row banner">
                <div className="banner-text">
                    <Fade bottom>
                        <h1 className="responsive-headline hoverGrow" style={{marginTop: "50px"}}>{name}</h1>
                    </Fade>
                    <div style={{height: "4vh"}}/>
                    <Fade bottom>
                        <div className={"row"} style={{textAlign: "center", zIndex: "3"}}>
                            <img className="profile-pic hoverGrow" src={profilepic} alt="Lucas Bodin Profile Pic"/>
                        </div>
                    </Fade>
                    <div style={{height: "6vh"}}/>
                    <Fade bottom duration={1200}> <TypingEffect text={description}/> </Fade>
                    <div style={{height: "2vh"}}/>
                    <br/> <br/> <Fade bottom duration={2000}>
                    <ul className="social" style={{display: "flex", justifyContent: "center"}}>
                        <div className={"hoverGrow"}>
                            <a href={github} target="_blank" rel="noreferrer" className="button btn hover-grow"
                               style={{borderRadius: "10px", color: "white", backgroundColor: "black"}}> <i
                                className="fa fa-github"/>Github </a>
                        </div>
                        <div className={"hoverGrow"}>
                            <a href={linkedin} target="_blank" rel="noreferrer" className="button btn hover-grow"
                               style={{borderRadius: "10px", color: "white", backgroundColor: "black"}}> <i
                                className="fa fa-linkedin"/>Linkedin </a>
                        </div>
                    </ul>
                </Fade>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#resume"> <i className="icon-down-circle"/> </a>
            </p>
        </header>
    );

}

export default Header;
