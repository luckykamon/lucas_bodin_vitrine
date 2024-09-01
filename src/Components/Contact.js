import React from "react";
import {Fade} from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    if (!props.data) return null;

    const message = props.data.contactmessage;

    const sendEmail = () => {
        let subject = document.getElementById("contactSubject").value.replace(/\n/g, "%0D%0A");
        let body = document.getElementById("contactMessage").value.replace(/\n/g, "%0D%0A");
        window.open("mailto:lucas.bodin.contacter@gmail.com?subject=" + subject + "&body=" + body);
    };

    return (
        <>
            <section id="contact">
                <div className="row section-head"
                     style={{display: window.innerWidth >= 768 ? "flex" : "block", alignItems: "center"}}>
                    <Fade left duration={1000}>
                        <div className="two columns" style={{width: "26%"}}>
                            <FontAwesomeIcon icon={faEnvelope} size="5x" color="#EBEEEE"/>
                        </div>
                    </Fade> <Fade right duration={1000}>
                    <div style={{width: "100%"}}>
                        <div style={{color: "white", textAlign: "center"}}>{message}</div>
                    </div>
                </Fade>
                </div>

                <div className="row">
                    <div className="columns" style={{width: "100%"}}>
                        <div>
                            <Fade left duration={1000}><label htmlFor="contactSubject">Objet</label></Fade> <Fade right
                                                                                                                  duration={1000}><input
                            type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject"
                            style={{borderRadius: "10px", backgroundColor: "#E8EBEB", color: "black"}}/> </Fade>
                        </div>


                        <div>
                            <Fade left duration={1000}><label htmlFor="contactMessage">Message</label></Fade> <Fade
                            right duration={1000}><textarea cols="50" rows="15" id="contactMessage"
                                                            name="contactMessage" style={{
                            borderRadius: "10px",
                            backgroundColor: "#E8EBEB",
                            color: "black"
                        }}/></Fade>
                        </div>

                        <Fade left duration={1000}>
                            <div style={{textAlign: "center"}}>
                                <button className="submit"
                                        style={{borderRadius: "10px", backgroundColor: "#E8EBEB", color: "black"}}
                                        onClick={sendEmail}>Envoyer le mail <FontAwesomeIcon icon={faPaperPlane} size="2"/>
                                </button>
                            </div>
                        </Fade>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Contact;
