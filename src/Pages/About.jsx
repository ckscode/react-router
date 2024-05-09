import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            About
            <Link to="skills">skills</Link>
            <Outlet/>
        </div>
    );
};

export default About;