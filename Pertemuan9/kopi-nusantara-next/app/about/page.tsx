import React from "react";
import Link from "next/link";
const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This page contains information about our application</p>
            <p>back to <Link href="/">Home</Link> </p>
        </div>
    );
};

export default AboutPage