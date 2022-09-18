import React from "react";
import Fade from "react-reveal";


const Footer = (props) => {
    let social;
    if (!props.data) {
        social =[
            {
                "name":"",
                "url":"/",
                "className":""
            },
            {
                "name":"",
                "url":"/",
                "className":""
            }
        ]
    } else {
        social = props.data.social;
    }

    const networks = social.map(function (network) {
        return (
            <li key={network.name}>
                <a href={network.url} target="_blank" rel="noreferrer">
                    <i className={network.className}/>
                </a>
            </li>
        );
    });

    return (
        <footer>
            <div className="row">
                <Fade bottom>
                    <div className="twelve columns">
                        <ul className="social-links">{networks}</ul>

                        <ul className="copyright">
                            <li>Copyright &copy; 2022 Lucas Bodin &bull; <a href="/confidentialite">Politique de
                                confidentialité</a></li>
                        </ul>
                    </div>
                </Fade>

                <div id="go-top">
                    <a className="smoothscroll" href="#home">
                        <i className="icon-up-circle" style={{fontSize: "42px"}}/>
                    </a>
                </div>
            </div>
        </footer>
    );

}

export default Footer;
