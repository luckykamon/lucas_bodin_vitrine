import React, {Component} from "react";
import Fade from "react-reveal";
// import {Browser} from '@capacitor/browser';
// import {DocumentViewer} from "@awesome-cordova-plugins/document-viewer";
// import Slide from "react-reveal";

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = "images/" + this.props.data.image;
        const bio = this.props.data.bio;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        // const resumeDownload = this.props.data.resumedownload
        const openResumeDownload = () => {
            window.open('https://lucasbodin.com/pdf/cv_lucas_bodin.pdf')
        }

        return (
            <section id="about">
                <Fade bottom duration={1500}>
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src={profilepic}
                                alt="Lucas Bodin Profile Pic"
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>À propos de moi</h2>

                            <p>{bio}</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Détails de contact</h2>

                                    <p className="address">
                                        <span>{name}</span>
                                        <br/>
                                        <br/>
                                        <a href={"tel:" + phone}><span>{phone}</span></a>
                                        <br/>
                                        <a href={"mailto:" + email}><span>{email}</span></a>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <span className="button" onClick={openResumeDownload}>
                                        <i className="fa fa-download"/>Ouvrir le CV
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default About;
