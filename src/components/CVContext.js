import React, { useState, useContext } from "react";
import uniqid from "uniqid";

export const CVContext = React.createContext();

export function useCVData() {
    return useContext(CVContext);
}

export function CVProvider({ children }) {
    const [personalDetails, setPersonalDetails] = useState({
        name: "Michael A. Alcaraz II",
        title: "Web Developer",
        phone: "0987 654 3210",
        email: "michael@gmail.com",
        location: "Philippines",
        details:
            "Highly skilled and passionate web developer with 4 years of professional experience. Proficient in front-end and back-end development, with a strong focus on creating responsive and user-friendly websites. Excellent problem-solving abilities and a keen eye for detail.",
    });
    const [workDetails, setWorkDetails] = useState([
        {
            id: "limgqdxw",
            company: "The ABC Company",
            position: "Software Engineer",
            startYear: "2020",
            endYear: "Present",
            description:
                "Responsible for designing and developing websites, creating and implementing functional and visually appealing user interfaces, and ensuring smooth functionality and compatibility across different devices and browsers.",
        },
        {
            id: "limgr18j",
            company: "Apple Inc.",
            position: "Web Developer",
            startYear: "2018",
            endYear: "2020",
            description:
                "Responsible for designing and developing websites, creating and implementing functional and visually appealing user interfaces, and ensuring smooth functionality and compatibility across different devices and browsers.",
        },
        {
            id: "limgr18k",
            company: "Meta Platforms, Inc.",
            position: "Project Manager",
            startYear: "2017",
            endYear: "2018",
            description:
                "Responsible for designing and developing websites, creating and implementing functional and visually appealing user interfaces, and ensuring smooth functionality and compatibility across different devices and browsers.",
        },
    ]);

    const [educationDetails, setEducationDetails] = useState([
        {
            id: "limgqdxw",
            course: "Full Stack Web Development",
            university: "The Odin Project",
            startYear: "2020",
            endYear: "Present",
            description:
                "The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.",
        },
        {
            id: "limgqdxy",
            course: "Bachelors of Science in Software Engineering",
            university: "Stanford University",
            startYear: "2017",
            endYear: "2020",
            description:
                "The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.",
        },
    ]);

    function changePersonalDetails(event) {
        setPersonalDetails((prevPersonalDetails) => {
            return {
                ...prevPersonalDetails,
                [event.target.name]: event.target.value,
            };
        });
    }

    const changeWorkDetails = (index) => (e) => {
        const newArray = workDetails.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setWorkDetails(newArray);
    };

    const deleteWorkDetails = (index) => (e) => {
        e.preventDefault();

        const newArray = workDetails.filter((_, i) => i !== index);
        setWorkDetails(newArray);
    };

    const addWorkDetails = (index) => (e) => {
        e.preventDefault();

        const newArray = {
            id: uniqid(),
            company: "",
            position: "",
            startYear: "",
            endYear: "",
            description: "",
        };

        setWorkDetails((prevWorkDetails) => {
            return prevWorkDetails.concat(newArray);
        });
    };

    const changeEducation = (index) => (e) => {
        const newArray = educationDetails.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setEducationDetails(newArray);
    };

    const deleteEducation = (index) => (e) => {
        e.preventDefault();

        const newArray = educationDetails.filter((_, i) => i !== index);
        setEducationDetails(newArray);
    };

    const addEducation = (index) => (e) => {
        e.preventDefault();

        const newArray = {
            id: uniqid(),
            course: "",
            university: "",
            startYear: "",
            endYear: "",
            description: "",
        };

        setEducationDetails((prevEducationDetails) => {
            return prevEducationDetails.concat(newArray);
        });
    };

    return (
        <CVContext.Provider
            value={{
                personalDetails,
                workDetails,
                changePersonalDetails,
                changeWorkDetails,
                deleteWorkDetails,
                addWorkDetails,
                educationDetails,
                changeEducation,
                deleteEducation,
                addEducation,
            }}
        >
            <div className="container">{children}</div>
        </CVContext.Provider>
    );
}
