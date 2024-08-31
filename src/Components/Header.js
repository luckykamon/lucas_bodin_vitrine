import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

const TypingEffect = ({ text, tag = "h3" }) => {
    const [currentText, setCurrentText] = useState(" ");

    useEffect(
        () => {
            let index = 0;
            const typeEffect = () => {
                setCurrentText((prevText) => prevText + text.charAt(index++));
                if (index < text.length) {
                    setTimeout(
                        typeEffect,
                        Math.random() * 50 + 10
                    );
                }
            };

            if (document.readyState === "complete") {
                typeEffect();
            } else {
                window.addEventListener(
                    "load",
                    () => setTimeout(
                        () => {
                            typeEffect();
                        },
                        500
                    )
                );
                return () => window.removeEventListener(
                    "load",
                    typeEffect
                );
            }
        },
        [text]
    );

    return React.createElement(
        tag,
        { className: "type-effect" },
        currentText
    );
};

// Fonction qui permet de déterminer s'il y a besoin d'un fond opaque sur la navbar
function isLightColor(rgbColorString) {
    // Extraire les composants R, G, B à partir de la chaîne de couleur RGB
    let rgb = rgbColorString.substring(
        4,
        rgbColorString.length - 1
    )
        .replace(
            / /g,
            ""
        )
        .split(",");

    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    // Calcul de la luminosité perçue
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 150;  // On considère que l'on a besoin d'un fond noir si la luminosité perçue est supérieure à 150
}

export const Navbar = ({ isHomePage }) => {
    useEffect(
        () => {

            const sections = Array.from(document.querySelectorAll("section"));
            const header = Array.from(document.querySelectorAll("header"));
            const combined = header.concat(sections);

            const navigation_links = document.querySelectorAll("#nav-wrap a");
            const navbar = document.querySelector("#nav-wrap");

            const changeNavOnScroll = () => {
                let active_section;
                let active_section_navbar;

                let minScrollUp = null;

                combined.forEach((section) => {

                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    let scrollUpSection = Math.abs(sectionTop - window.pageYOffset);
                    if (minScrollUp === null || (sectionTop !== 0 && minScrollUp > scrollUpSection && window.pageYOffset > sectionTop - 32)) { // 32 = hauteur de la navbar en px
                        minScrollUp = scrollUpSection;
                        active_section_navbar = section;
                    }

                    if (window.pageYOffset > sectionTop - sectionHeight / 3) {
                        active_section = section;
                        let selector = `#nav-wrap a[href="/#${active_section?.id}"]`;
                        let active_link = document.querySelector(selector);

                        navigation_links.forEach((link) => {
                            link.parentElement.classList.remove("current");
                        });

                        if (active_link) {
                            active_link.parentElement.classList.add("current");
                        }
                    }
                });

                if (active_section_navbar !== undefined) {
                    const backgroundColor = window.getComputedStyle(active_section_navbar).backgroundColor;
                    if (isLightColor(backgroundColor)) {
                        navbar.classList.add("opaque");
                    } else {
                        navbar.classList.remove("opaque");
                    }
                }

            };

            window.addEventListener(
                "scroll",
                changeNavOnScroll
            );
            return () => window.removeEventListener(
                "scroll",
                changeNavOnScroll
            );
        },
        []
    );

    return (<Fade top>
        <div id="nav-wrap">
            <ul id="nav" className="nav" style={{ fontSize: "13px" }}>
                <li className={isHomePage ? "current" : ""}>
                    <a className={isHomePage ? "smoothscroll" : ""} href="/#home"> Accueil </a>
                </li>
                <li>
                    <a className={isHomePage ? "smoothscroll" : ""} href="/#resume"> Résumé </a>
                </li>
                <li>
                    <a className={isHomePage ? "smoothscroll" : ""} href="/#contact"> Contact </a>
                </li>
            </ul>
        </div>
    </Fade>);
};

const Header = (props) => {
    const [profilePic, setProfilePic] = useState("");
    let github;
    let linkedin;
    let name;
    let description;
    if (!props.data) {
        github = "/";
        linkedin = "/";
        name = "";
        description = "";
    } else {
        github = props.data.github;
        linkedin = props.data.linkedin;
        name = props.data.name;
        description = props.data.description;
    }

    useEffect(() => {
        if (props.data) {
            setProfilePic("/images/" + props.data.image);
        }
    }
        , [props.data])

    return (<header id="home">

        <Navbar isHomePage />

        <div className="row banner">
            <div className="banner-text">
                <Fade bottom>
                    <h1 className="responsive-headline hoverGrow" style={{ marginTop: "50px" }}>{name}</h1>
                </Fade>
                <div style={{ height: "4vh" }} />
                <Fade bottom>
                    <div className={"row"} style={{ textAlign: "center", zIndex: "3" }}>
                        <img
                            className="profile-pic hoverGrow"
                            src={profilePic}
                            alt="Lucas Bodin Profile Pic"
                            onMouseOver={() => setProfilePic("/images/" + props.data.image2)}
                            onMouseOut={() => setProfilePic("/images/" + props.data.image)}
                        />
                    </div>
                </Fade>
                <div style={{ height: "6vh" }} />
                <Fade bottom duration={1200}> <TypingEffect text={description} /> </Fade>
                <div style={{ height: "2vh" }} />
                <br /> <br /> <Fade bottom duration={2000}>
                    <ul className="social" style={{ display: "flex", justifyContent: "center" }}>
                        <div className={"hoverGrow"}>
                            <a href={github} target="_blank" rel="noreferrer" className="button btn hover-grow"
                                style={{ borderRadius: "10px", color: "black", backgroundColor: "white" }}> <i
                                    style={{ marginRight: "5px", marginLeft: "5px" }} className="fa fa-github" />Github </a>
                        </div>

                        <div className={"hoverGrow"}>
                            <a href={linkedin} target="_blank" rel="noreferrer" className="button btn hover-grow"
                                style={{ borderRadius: "10px", color: "black", backgroundColor: "white" }}> <i
                                    style={{ marginRight: "5px", marginLeft: "5px" }} className="fa fa-linkedin" />Linkedin </a>
                        </div>
                    </ul>
                </Fade>
            </div>
        </div>

        <p className="scrolldown">
            <a className="smoothscroll" href="#resume"> <i className="icon-down-circle" /> </a>
        </p>
    </header>);

};

export default Header;

export { TypingEffect };
