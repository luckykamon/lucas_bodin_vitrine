import React, {Component} from "react";
import {Parallax} from "react-scroll-parallax";
import MouseParticles from 'react-mouse-particles'

class Resume extends Component {

    render() {
        if (!this.props.data) return null;

        const work = this.props.data.work.map(function (work) {
            return (<div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                    {work.title} <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                {work.description.split(". ").map((item, i) => {
                    return (<p key={i}>{"• " + item + "."}</p>);
                })}
            </div>);
        });

        const education = this.props.data.education.map(function (education) {
            return (<div key={education.graduated}>
                <h3>{education.school}</h3>
                <p className="info">
                    {education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em>
                </p>
                {education.description.split(". ").map((item, i) => {
                    return (<p key={i}>{"• " + item + "."}</p>);
                })}
            </div>);
        });

        const projects = this.props.data.projects.map(function (projects) {
            return (<div key={projects.name}>
                <h3>{projects.name}</h3>{projects.url && (
                <a className={"orange"} target="_blank" rel="noreferrer" href={projects.url}>{projects.url}</a>
            )}<p className="info">
                {projects.technologies} <span>&bull;</span> <em className="date">{projects.years}</em>
            </p>{projects.description.split(". ").map((item, i) => {
                return (<p key={i}>{"• " + item + "."}</p>);
            })}
            </div>);
        })

        return (

            <section id="resume" style={{borderRadius: "30px", padding: 0}}>
                <Parallax speed={30}>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Expérience</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">{work}</div>
                    </div>


                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Formation</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{education}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Projets</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{projects}</div>
                            </div>
                        </div>
                        <MouseParticles g={1} color={["#ffffff","#000000"]} cull="col,image-wrapper"/>
                    </div>


                </Parallax>

            </section>

        );
    }
}

export default Resume;
