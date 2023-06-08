import React from "react";
import { PersonalExperience } from "./PersonalExperience";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";

export default function Form() {
    return (
        <div className="form-container">
            <PersonalExperience></PersonalExperience>
            <WorkExperience></WorkExperience>
            <Education></Education>
        </div>
    );
}
