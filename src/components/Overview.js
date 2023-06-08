import React from "react";
import { useCVData } from "./CVContext";

export default function Overview() {
    const { personalDetails, workDetails, educationDetails } = useCVData();
    return (
        // <div className="overview">
        //     <div>Full Name: {personalDetails.name}</div>
        //     <div>Title: {personalDetails.title}</div>
        //     <div>Phone: {personalDetails.phone}</div>
        //     <div>Email: {personalDetails.email}</div>
        //     <div>Location: {personalDetails.location}</div>
        //     <div>Details: {personalDetails.details}</div>

        //     {workDetails.map((work) => {
        //         return (
        //             <div key={work.id}>
        //                 <div>{work.company}</div>
        //                 <div>{work.position}</div>
        //                 <div>{work.startYear}</div>
        //                 <div>{work.endYear}</div>
        //                 <div>{work.description}</div>
        //             </div>
        //         );
        //     })}

        //     {educationDetails.map((education) => {
        //         return (
        //             <div key={education.id}>
        //                 <div>{education.course}</div>
        //                 <div>{education.university}</div>
        //                 <div>{education.startYear}</div>
        //                 <div>{education.endYear}</div>
        //                 <div>{education.description}</div>
        //             </div>
        //         );
        //     })}
        // </div>
        <div className="overview">
            <div className="header">
                <div className="main">
                    <h1 className="main-name">{personalDetails.name}</h1>
                    <h2 className="main-title">{personalDetails.title}</h2>
                </div>
                <div className="sub">
                    <div className="sub-phone">
                        <img
                            src="assets/phone.svg"
                            alt="phone"
                            className="sub-image"
                        ></img>
                        <div className="sub-desc">{personalDetails.phone}</div>
                    </div>
                    <div className="sub-email">
                        <img
                            src="assets/mail.svg"
                            alt="email"
                            className="sub-image"
                        ></img>
                        <div className="sub-desc">{personalDetails.email}</div>
                    </div>
                    <div className="sub-location">
                        <img
                            src="assets/location.svg"
                            alt="location"
                            className="sub-image"
                        ></img>
                        <div className="sub-desc">
                            {personalDetails.location}
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="body-description">
                    {personalDetails.details}
                </div>
                <div className="body-work">
                    <h3 className="body-work-title">WORK EXPERIENCE</h3>
                    <div className="body-work-description">
                        {workDetails.map((work) => {
                            return (
                                <div key={work.id}>
                                    <div className="work-header">
                                        <div className="work-position">
                                            {work.position}
                                        </div>
                                        <div className="work-company-date">
                                            <div className="work-company">
                                                {work.company}
                                            </div>
                                            <div className="work-date">
                                                {work.startYear} {" - "}
                                                {work.endYear}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="work-description">
                                        {work.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="body-education">
                    <h3 className="body-education-title">EDUCATION</h3>
                    <div className="body-education-description">
                        {educationDetails.map((education) => {
                            return (
                                <div key={education.id}>
                                    <div className="education-header">
                                        <div className="education-position">
                                            {education.course}
                                        </div>
                                        <div className="education-university-date">
                                            <div className="education-university">
                                                {education.university}
                                            </div>
                                            <div className="education-date">
                                                {education.startYear} {" - "}
                                                {education.endYear}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="education-description">
                                        {education.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
