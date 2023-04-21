import React from "react";

function About(props) {
    const {imageSrc = "https://via.placeholder.com/215",about} = props
    return (
        <aside>
            <img src={imageSrc} alt="Blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About