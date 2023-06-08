import React from "react";
import { CVProvider } from "./components/CVContext";
import Overview from "./components/Overview";
import Form from "./components/Form";

export default function App() {
    return (
        <CVProvider>
            <Form></Form>
            <Overview></Overview>
        </CVProvider>
    );
}
