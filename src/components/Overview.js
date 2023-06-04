import React from "react";

export default function Overview(props) {
    return (
        <div className="overview">
            <div>Full Name: {props.personalDetails.name}</div>
            <div>Title: {props.personalDetails.title}</div>
            <div>Phone: {props.personalDetails.phone}</div>
            <div>Email: {props.personalDetails.email}</div>
            <div>Location: {props.personalDetails.location}</div>
            <div>Details: {props.personalDetails.details}</div>
        </div>
    );
}
