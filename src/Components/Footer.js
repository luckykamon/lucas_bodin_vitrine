import React from "react";
import Fade from "react-reveal";

const Footer = () => {

    return (
        <footer style={{minHeight: "5vh"}}>
            <div className="row">
                <Fade bottom>
                    <div className="twelve columns">
                        <ul className="copyright">
                            <li style={{color: "white", fontWeight: "bold"}}>Copyright &copy; 2022 - 2024 &bull; <a
                                href="https://www.linkedin.com/in/lucasbodin/" style={{color: "white"}}>Lucas
                                Bodin</a> &bull; <a href="/confidentialite" style={{color: "white"}}>Politique de
                                confidentialité</a></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </footer>
    );
};

export default Footer;
