import React from "react";
import { useCVData } from "./CVContext";

export function EducationData() {
    const { educationDetails, changeEducation, deleteEducation, addEducation } =
        useCVData();

    if (educationDetails.length !== 0) {
        return educationDetails.map((education, index) => {
            const isLastIteration = index === educationDetails.length - 1;
            return (
                <React.Fragment key={education.id}>
                    <input
                        type="text"
                        name="course"
                        placeholder="Course / Program"
                        value={education.course}
                        onChange={changeEducation(index)}
                    />
                    <input
                        type="text"
                        name="university"
                        placeholder="University"
                        value={education.university}
                        onChange={changeEducation(index)}
                    />
                    <input
                        type="text"
                        name="startYear"
                        placeholder="Start Year"
                        value={education.startYear}
                        onChange={changeEducation(index)}
                    />
                    <input
                        type="text"
                        name="endYear"
                        placeholder="End Year"
                        value={education.endYear}
                        onChange={changeEducation(index)}
                    />
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={education.description}
                        onChange={changeEducation(index)}
                        rows={5}
                    ></textarea>
                    <div className="btn-group">
                        <button
                            className="delete-work-button"
                            onClick={deleteEducation(index)}
                        >
                            Delete
                        </button>
                        {isLastIteration && (
                            <button
                                className="add-work-button"
                                onClick={addEducation()}
                            >
                                Add
                            </button>
                        )}
                    </div>
                </React.Fragment>
            );
        });
    } else {
        return (
            <React.Fragment>
                <div className="btn-group">
                    <button
                        className="add-work-button"
                        onClick={addEducation()}
                    >
                        Add
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
