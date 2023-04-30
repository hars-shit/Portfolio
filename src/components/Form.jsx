import React from "react";
import {AiOutlineMail} from 'react-icons/ai';
import {FaUserTie} from 'react-icons/fa';
import {IoIosCall} from 'react-icons/io';
import {BsTelegram} from 'react-icons/bs';
import {RiMessage2Fill} from 'react-icons/ri';
import '../styles/Form.scss';
export default function Form(){
    return(
        <div className="form-div">
            <div className="form-heading"><FaUserTie /><p>Get In </p><p className="para-heading">Touch</p></div>
            <div className="form-container">
                <form action="">
                    <div className="input-container">
                <FaUserTie />
                <input className="input-field" type="text" placeholder="Name"/>
                    </div>
                    <div className="input-container">
                <AiOutlineMail />
                <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-container">
                <IoIosCall />
                <input type="number" placeholder="Phone" />
                    </div>
                    <div className="input-container">
                <RiMessage2Fill />
                <input type="text" placeholder="Message"/>
                    </div>

                    {/* for submitting input  */}
                    <div className="form-submit">
                        <button>Let's Connect <BsTelegram className="connect-icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    );
};