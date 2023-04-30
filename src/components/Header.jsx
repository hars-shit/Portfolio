import React from "react";
import '../styles/Header.scss';
import imglogo from '../assets/logo3.jpeg';
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {RiCloseCircleFill} from 'react-icons/ri';
export default function Header(){
    return(
        <>
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <h1 class="navbar-brand" href="/"><img className="web-logo" src={imglogo} alt="" /></h1>
    <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>

      {/* for sidemenu data */}
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    
      <div className="off-header">
        <p className="off-heading"><FaHome />&nbsp; Home</p>
        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><RiCloseCircleFill /></button>
      </div>

      <div className="off-data">
        <Link className="off-link"><BsFillArrowRightCircleFill /> &nbsp;About</Link>
        <Link className="off-link"><BsFillArrowRightCircleFill /> &nbsp;Projects</Link>
        <Link className="off-link"><BsFillArrowRightCircleFill /> &nbsp;Get in Touch</Link>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}