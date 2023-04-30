import React from "react";
import '../styles/Footer.scss';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook } from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import {IoIosCall} from 'react-icons/io';
import {AiFillGithub} from 'react-icons/ai';
import { Link } from "react-router-dom";
import {AiOutlineMail } from 'react-icons/ai';
export default function Footer(){
    return(
        <div className="footer">
      <div className="upper-footer">
        <div className="portfolio-container">
            <p className="portfolio-heading">Harshit's Portfolio</p>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
            <p>Keep Rising.Connect with me over live chat!</p>
        </div>
        
        {/* for quick links  */}
        <div className="quick-links">
      <p id="link-heading">Quick Links</p>
      <Link className="link"><BsFillArrowRightCircleFill />&nbsp; Home</Link>
      <Link className="link"><BsFillArrowRightCircleFill />&nbsp; About</Link>
      <Link className="link"><BsFillArrowRightCircleFill />&nbsp; Projects</Link>
      <Link className="link"><BsFillArrowRightCircleFill />&nbsp; Get in Touch</Link>
        </div>

        {/* for contacts */}
        <div className="contact">
          <p id="Cont-heading">Contact Info</p>
        <a href="tel:+919520593613"><IoIosCall />&nbsp; +91 XXX-XXX-XXXX</a>
        <a href="/"><AiOutlineMail />&nbsp; upadhyayharshit05@gmail.com</a>
        </div>
        <div className="follow-container">
           <a href="https://www.linkedin.com/in/harshit-upadhyay-b1231922a"><button><AiFillLinkedin /></button></a>
         <a href="https://github.com/hars-shit"><button><AiFillGithub /></button></a>
          <a href="https://www.facebook.com/harshit.upadhyay.332345"><button><BsFacebook /></button></a>
          <a href="https://wa.me/qr/A3JGVSMBO36PA1"><button><IoLogoWhatsapp /></button></a>
          <a href="mailto:upadhyayharshit05@gmail.com"><button><AiOutlineMail /></button></a> 

        </div>
      
      </div>
      <div className="lower-footer">
        <p>Designed with ❤️ By &nbsp;<p>Harshit Upadhyay </p></p>
      </div>
      
        </div>
    )
}