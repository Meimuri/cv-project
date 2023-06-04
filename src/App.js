import React, { useState } from "react";
import Overview from "./components/Overview";

export default function App() {
    const [personalDetails, setPersonalDetails] = useState({
        name: "Michael A. Alcaraz II",
        title: "Web Developer",
        phone: "0900 000 0000",
        email: "michael@email.com",
        location: "Quezon City, Philippines",
        details:
            "Highly skilled and passionate web developer with 4 years of professional experience. Proficient in front-end and back-end development, with a strong focus on creating responsive and user-friendly websites. Excellent problem-solving abilities and a keen eye for detail.",
    });

    function changePersonalDetails(event) {
        setPersonalDetails((prevPersonalDetails) => {
            return {
                ...prevPersonalDetails,
                [event.target.name]: event.target.value,
            };
        });
    }

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-title">Personal Details</div>
                <form>
                    <input
                        type="text"
                        name="name"
                        value={personalDetails.name}
                        onChange={changePersonalDetails}
                    ></input>
                    <input
                        type="text"
                        name="title"
                        value={personalDetails.title}
                        onChange={changePersonalDetails}
                    ></input>
                    <input
                        type="text"
                        name="phone"
                        value={personalDetails.phone}
                        onChange={changePersonalDetails}
                    ></input>
                    <input
                        type="text"
                        name="email"
                        value={personalDetails.email}
                        onChange={changePersonalDetails}
                    ></input>
                    <input
                        type="text"
                        name="location"
                        value={personalDetails.location}
                        onChange={changePersonalDetails}
                    ></input>
                    <textarea
                        type="text"
                        name="details"
                        value={personalDetails.details}
                        onChange={changePersonalDetails}
                        rows={9}
                    ></textarea>
                </form>
                <div className="form-title">Work Experience</div>
                <div className="form-title">Education</div>
            </div>
            <Overview personalDetails={personalDetails} />
        </div>
    );
}
