import React from "react";
import { useCVData } from "./CVContext";

export function WorkExperienceData() {
    const {
        workDetails,
        changeWorkDetails,
        deleteWorkDetails,
        addWorkDetails,
    } = useCVData();

    if (workDetails.length !== 0) {
        return workDetails.map((work, index) => {
            const isLastIteration = index === workDetails.length - 1;
            return (
                <React.Fragment key={work.id}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={work.company}
                        onChange={changeWorkDetails(index)}
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={work.position}
                        onChange={changeWorkDetails(index)}
                    />
                    <input
                        type="text"
                        name="startYear"
                        placeholder="Start Year"
                        value={work.startYear}
                        onChange={changeWorkDetails(index)}
                    />
                    <input
                        type="text"
                        name="endYear"
                        placeholder="End Year"
                        value={work.endYear}
                        onChange={changeWorkDetails(index)}
                    />
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={work.description}
                        onChange={changeWorkDetails(index)}
                        rows={5}
                    ></textarea>
                    <div className="btn-group">
                        <button
                            className="delete-work-button"
                            onClick={deleteWorkDetails(index)}
                        >
                            Delete
                        </button>
                        {isLastIteration && (
                            <button
                                className="add-work-button"
                                onClick={addWorkDetails()}
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
                        onClick={addWorkDetails()}
                    >
                        Add
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
