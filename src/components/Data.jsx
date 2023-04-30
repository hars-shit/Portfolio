import React from "react";
import "../styles/Data.scss";
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import java from '../assets/java.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import sass from '../assets/sass.png'
import redux from '../assets/redux.png'
import netlify from '../assets/netlify.png'

import {AiFillGithub} from 'react-icons/ai';

import {FaCode} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";
import Form from "./Form";
// import Projects from "./Projects";

export default function Data() {
  return (
    <>
   
    <div className="main-container">
      <div className="data-container">
 {/* for introduction - */}

        <div className="intro-container">
          <p className="heading1">Hi There,</p>
          <p className="heading1 name">I'm Harshit<p>Upadhyay</p> </p>
          <p className="about">
        I'm a Front End Developer...
          </p>
        </div>

        {/* for buttons  */}
        <div className="button-container">
          <Link class="btn " to={'/AboutMe'}>
          <button type="button" >
           About Me  <BsFillArrowDownCircleFill />
          </button>
          </Link>
         
        </div>

        {/* for follow me buttons */}
        <div className="follow-container">
            <a href="https://www.linkedin.com/in/harshit-upadhyay-b1231922a"><button><AiFillLinkedin /></button></a>
           <a href="https://github.com/hars-shit"><button><AiFillGithub /></button></a> 
         <a href="https://www.facebook.com/harshit.upadhyay.332345"><button><BsFacebook /></button></a>  
           <a href="https://wa.me/qr/A3JGVSMBO36PA1"> <button><IoLogoWhatsapp /></button></a>
            {/* <button><BsTelegram /></button> */}
           <a href="mailto:upadhyayharshit@gmail.com" ><button><AiOutlineMail /></button></a>

        </div>

        {/* for image  */}
      </div>
      <div className="image-container">
    <AboutMe />
      </div>
      
      <div className="occupation">
        <div >
        <p className="heading2"><FaCode />&nbsp;Skills & &nbsp;<p id="change">Abilities</p></p>
        </div>
        <div className="skills">
            <button className="btn-skills" ><img src={html} alt="" /> HTML 5</button>
            <button className="btn-skills"><img src={css} alt="" /> CSS 3</button>
            <button className="btn-skills"><img src={react} alt="" />React</button>
            <button className="btn-skills"><img src={java} alt="" />Java</button>
            <button className="btn-skills"><img src={js} alt="" /> Javascript</button>
            <button className="btn-skills"><img src={bootstrap} alt="" />Bootstrap</button>
            <button className="btn-skills"><img src={sass} alt="" />Sass</button>
            <button className="btn-skills"><img src={redux} alt="" />Redux</button>
            <button className="btn-skills"><img src={netlify} alt="" />Netlify</button>
            <button className="btn-skills"><AiFillGithub />GitHub</button>
        </div>
      </div>

      <div className="projects-container">
        {/* <Projects /> */}
      </div>
      <div className="getInTouch">
      <Form />
      </div>
    </div>
    </>
  );
}
