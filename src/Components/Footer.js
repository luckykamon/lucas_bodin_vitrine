import React from "react";
import Fade from "react-reveal";

const Footer = ({top}) => {

    return (
        <footer>
            <div className="row">
                <Fade bottom>
                    <div className="twelve columns">
                        {/*<ul className="social-links">{networks}</ul>*/}
                        <ul className="copyright">
                            <li style={{color: "white"}}>Copyright &copy; 2022 - 2024 &bull; <a
                                href="https://www.linkedin.com/in/lucasbodin/" style={{color: "white"}}>Lucas
                                Bodin</a> &bull; <a href="/confidentialite" style={{color: "white"}}>Politique de
                                confidentialité</a></li>
                        </ul>
                    </div>
                </Fade> {top && (
                <div id="go-top">
                    <a className="smoothscroll" href="#home"> <i className="icon-up-circle" style={{fontSize: "42px"}}/>
                    </a>
                </div>
            )}

            </div>
        </footer>
    );
};

export default Footer;
