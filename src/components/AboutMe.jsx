import React from "react";
import profileImage from "../assets/p.jpeg";
import {FaUser} from 'react-icons/fa'
import '../styles/AboutMe.scss'
export default function AboutMe(){
    return(
        <>
        <div className="image-container">
        <img src={profileImage} alt="" />
        </div>
        <div className="aboutMe">
            <div className="about-heading">
                <FaUser />
            <p className="para-heading">About</p>
        <p className="para-heading">Me</p>
            </div>

            {/* introduction  */}
            <div className="about-content">
                <p>I'm Harshit</p>
                <p>Front End Developer</p>
                <p>I am a Front End Developer based in Almora,Uttarakhand.I am pursuing B.Tech from Institute of Technology Gopeshwar from Gopeshwar. I am very passionate about improving my coding skills & developing websites.I build Websites using React. Working for myself to improve my skills. Love to build user interfaces.</p>                
                <button className="btn">Resume</button>
            </div>
        </div>
        </>
    );
};