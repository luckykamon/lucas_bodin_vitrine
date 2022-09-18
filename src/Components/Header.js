import React from "react";
import Fade from "react-reveal";


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
        <header id="home" style={{height: "100%"}}>
            {/*<ParticlesBg type="color" bg={true}/>*/}
            <div id="nav-wrap">
                <ul id="nav" className="nav" style={{fontSize: "15px"}}>
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Accueil
                        </a>
                    </li>

                    {/*<li>*/}
                    {/*    <a className="smoothscroll" href="#about">*/}
                    {/*        À propos*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    <li>
                        <a className="smoothscroll" href="#resume">
                            Résumé
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div className="row banner">
                <div className="banner-text">
                    <Fade bottom>
                        <h1 className="responsive-headline" style={{marginTop: "50px"}}>{name}</h1>
                    </Fade>
                    <div style={{height: "2vh"}}/>
                    {/*<br/> <br/>*/}
                    <Fade bottom>
                        <div className="row" style={{textAlign: "center", zIndex: "3"}}>
                            {/*<div className="three columns">*/}
                            <img
                                className="profile-pic"
                                src={profilepic}
                                alt="Lucas Bodin Profile Pic"
                            />
                            {/*</div>*/}
                        </div>
                    </Fade>
                    <div style={{height: "3vh"}}/>
                    {/*<br/> <br/>*/}
                    <Fade bottom duration={1200}>
                        <h3>{description}.</h3>
                    </Fade>
                    <div style={{height: "2vh"}}/>
                    {/*<br/> <br/>*/}
                    <hr/>

                    <Fade bottom duration={2000}>
                        <ul className="social">
                            <a href={github} target="_blank" rel="noreferrer" className="button btn github-btn"
                               style={{borderRadius: "10px"}}>
                                <i className="fa fa-github"/>Github
                            </a>
                            <a href={linkedin} target="_blank" rel="noreferrer" className="button btn github-btn"
                               style={{borderRadius: "10px"}}>
                                <i className="fa fa-linkedin"/>Linkedin
                            </a>
                        </ul>
                    </Fade>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#resume">
                    <i className="icon-down-circle"/>
                </a>
            </p>
        </header>
    );

}

export default Header;
