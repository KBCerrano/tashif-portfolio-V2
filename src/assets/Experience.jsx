import { useState } from "react";
import "./styles/experience.css";


function Experience(props) {

    return (

        <div ClassName = "Experience">

            <div className = "experience-brief">
                <h1>Project Name</h1>
                <h2>Project Role</h2>
                <h2>Date</h2>
            </div>

            <div className = "experience-description" style = "text-align:">
                <p>This is a description of the work experience...</p>
            </div>

        </div>

        

    );

}

export default Experience;