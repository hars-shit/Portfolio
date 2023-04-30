import React from "react";
import '../styles/Projects.scss'
import qb from '../assets/mobilePapers.png'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
export default function Projects(){
    return (
        <div className="projects">
            <p><AiOutlineFundProjectionScreen />My Projects</p>
            <div className="projects-container">
               <button><img src={qb} alt="" /><p>Question Bank</p></button>
               <button></button><button></button><button></button><button></button><button></button>

            </div>
        </div>
    )
}