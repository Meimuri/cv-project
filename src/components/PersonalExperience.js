import React from "react";
import { useCVData } from "./CVContext";

export function PersonalExperience() {
    const { personalDetails, changePersonalDetails } = useCVData();

    return (
        <div>
            <div className="form-title">Personal Details</div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={personalDetails.name}
                    onChange={changePersonalDetails}
                ></input>
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={personalDetails.title}
                    onChange={changePersonalDetails}
                ></input>
                <input
                    type="text"
                    name="phone"
                    placeholder="Contact Number"
                    value={personalDetails.phone}
                    onChange={changePersonalDetails}
                ></input>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={personalDetails.email}
                    onChange={changePersonalDetails}
                ></input>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={personalDetails.location}
                    onChange={changePersonalDetails}
                ></input>
                <textarea
                    type="text"
                    name="details"
                    placeholder="Tell me about yourself."
                    value={personalDetails.details}
                    onChange={changePersonalDetails}
                    rows={5}
                ></textarea>
            </form>
        </div>
    );
}
