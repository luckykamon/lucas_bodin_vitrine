import React, {Component} from "react";
import Fade from "react-reveal";

class Footer extends Component {
    render() {
        if (!this.props.data) return null;

        const networks = this.props.data.social.map(function (network) {
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
                                <li>Copyright &copy; 2022 Lucas Bodin &bull; <a href="/confidentialite">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
