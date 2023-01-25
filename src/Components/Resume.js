import React, {Component} from "react";
import Fade from "react-reveal";
import {Parallax} from "react-scroll-parallax";

// const ShowText = (props) => {
//
//     const [hovering, setHovering] = useState(props.children)
//
//     const mouseEnter = () => {
//         setHovering(<span style={{width: "12%", height: "25%", margin: "5%"}}>
//           {props.name_stack}
//           </span>
//         )
//     }
//
//     const mouseLeave = () => {
//         setHovering(props.children)
//     }
//
//     return (
//         <span style={{display: "grid"}}>
//             {hovering}
//             <span>{props.name_stack}</span>
//         </span>
//     )
// }

class Resume extends Component {

    render() {
        if (!this.props.data) return null;

        const work = this.props.data.work.map(function (work) {
            return (<div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                    {work.title}
                    <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p>{work.description}</p>
            </div>);
        });

        const education = this.props.data.education.map(function (education) {
            return (<div key={education.graduated}>
                <h3>{education.school}</h3>
                <p className="info">
                    {education.degree} <span>&bull;</span>
                    <em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
            </div>);
        });

        const projects = this.props.data.projects.map(function (projects) {
            return (<div key={projects.name}>
                <h3>{projects.name}</h3>
                <p className="info">
                    {projects.technologies} <span>&bull;</span>
                    <em className="date">{projects.years}</em>
                </p>
                <p>{projects.description}</p>
            </div>);
        })

        return (

            <section id="resume" style={{borderRadius: "30px"}}>
                <Parallax speed={30}>
                    <Fade bottom duration={1300}>
                        <div className="row work">
                            <div className="three columns header-col">
                                <h1>
                                    <span>Expérience</span>
                                </h1>
                            </div>

                            <div className="nine columns main-col">{work}</div>
                        </div>
                    </Fade>


                    <Fade bottom duration={1300}>
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
                    </Fade>

                    <Fade bottom duration={1300}>
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
                        </div>
                    </Fade>


                </Parallax>
            </section>

        );
    }
}

export default Resume;
