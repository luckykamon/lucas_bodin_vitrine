import React from "react";
import {Fade} from "react-reveal";
import ParticlesBg from "particles-bg";

const Contact = (props) => {
    if (!props.data) return null;

    const phone = props.data.phone;
    const message = props.data.contactmessage;

    const sendEmail = () => {
        let subject = document.getElementById('contactSubject').value.replace(/\n/g, "%0D%0A")
        let body = document.getElementById('contactMessage').value.replace(/\n/g, "%0D%0A")
        window.open('mailto:lucas.bodin.contacter@gmail.com?subject=' + subject + '&body=' + body)
    }

    return (
        <>
            <section id="contact">
                <div className="row section-head">
                    <Fade left duration={1000}>
                        <div className="two columns header-col">
                            <h1>
                                <span>Contact</span>
                            </h1>
                        </div>
                    </Fade> <Fade right duration={1000}>
                    <div className="ten columns">
                        <p style={{color: "white"}}>{message}</p>
                    </div>
                </Fade>
                </div>

                <div className="row">
                    <div className="eight columns">
                        <fieldset>
                            <Fade left duration={1000}>
                                <div>
                                    <label htmlFor="contactSubject">Objet</label> <input type="text" defaultValue=""
                                                                                           size="35" id="contactSubject"
                                                                                           name="contactSubject"// onChange={handleChange} // ref={this.inputElement}
                                                                                           style={{borderRadius: "10px", backgroundColor: "#E8EBEB", color: "black"}}/>
                                </div>
                            </Fade>

                            <Fade left duration={1000}>
                                <div>
                                    <label htmlFor="contactMessage">Message</label> <textarea cols="50" rows="15"
                                                                                                id="contactMessage"
                                                                                                name="contactMessage"
                                                                                                style={{borderRadius: "10px", backgroundColor: "#E8EBEB", color: "black"}}/>
                                </div>
                            </Fade>

                            <Fade left duration={1000}>
                                <div style={{textAlign: "center"}}>
                                    <button className="submit" style={{borderRadius: "10px", backgroundColor: "#E8EBEB", color: "black"}}
                                            onClick={sendEmail}>Envoyer le mail
                                    </button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif"/>
                                    </span>
                                </div>
                            </Fade>
                        </fieldset>
                    </div>

                    <Fade right duration={1000}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Numéro de téléphone</h4>
                                <p className="address">
                                    <a href={"tel:" + phone}><span className={"hoverGrow"}>{phone}</span></a>
                                </p>
                            </div>
                        </aside>
                    </Fade>
                </div>
                <ParticlesBg type="cobweb" color="#ffffff" num={window.innerWidth * window.innerHeight / 5000}
                             bg={true}/>
            </section>
        </>
    );
}

export default Contact;
