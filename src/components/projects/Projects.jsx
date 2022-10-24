import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Samples of my work</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <div className="projects__img"></div>
                        <h5>Restaurant Website</h5>
                        <span className="projects__stack">HTML5 - CSS3 - JS</span>
                    </div>
                    <span className="projects__button"><a className="projects__button" href="https://github.com/monadabbah/Foody-Restaurant/archive/refs/heads/main.zip">Download</a> <i className="uil uil-arrow-down projects__button-icon"></i></span>
                </div>

                <div className="projects__content">
                    <div>
                        <div className="projects__img"></div>
                        <h5>NUNO Bootstrap Theme</h5>
                        <span className="projects__stack">HTML5 - CSS3 - Bootstrap</span>
                    </div>
                    <span className="projects__button"><a className="projects__button" href="https://github.com/monadabbah/Nuno-Theme/archive/refs/heads/main.zip">Download</a> <i className="uil uil-arrow-down projects__button-icon"></i></span>
                </div>

                <div className="projects__content">
                    <div>
                        <h5>Character Design</h5>
                        <span className="projects__stack">Illustrator</span>
                    </div>
                    <span className="projects__button"><a className="projects__button" href="https://drive.google.com/file/d/1kd-9hiO-CPpvfn2JS7ybk_7pMTBWpMUA/view?usp=sharing" target="_blank">Download</a> <i className="uil uil-arrow-down projects__button-icon"></i></span>
                </div>

                <div className="projects__content">
                    <div>
                        <h5>Fish Restaurant Design</h5>
                        <span className="projects__stack">Illustrator - Photoshop</span>
                    </div>
                    <span className="projects__button"><a className="projects__button" href="https://drive.google.com/file/d/1G9GbOtUzeK5Vgg_gMGlP__hbn4C6XjuK/view?usp=sharing" target="_blank">Download</a> <i className="uil uil-arrow-down projects__button-icon"></i></span>
                </div>
            </div>
        </section>
    )
}

export default Projects