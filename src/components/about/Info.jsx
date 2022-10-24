import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years Working as a Fullstack Developer</span>
            </div>

            <div className="about__box">
                <i class='bx bx-certification about__icon'></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">Bachelor in Informatics Engineering</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support about__icon'></i>
                <h3 className="about__title">Interests</h3>
                <span className="about__subtitle">Design & Artistic Works</span>
            </div>
        </div>
    )
}

export default Info