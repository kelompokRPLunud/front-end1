import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";


function Footer(props){
    return (<div className={style.maindiv}>
        <ul>
            <div>
                AGenCertif
            </div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Tutorial">Tutorial</Link>
            </li>
            <li>
                <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/Sertifikat">Autofill</Link>
            </li>
        </ul>
        <ul>
            <div>
                Company
            </div>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/">Contact Us</Link>
            </li>
            <li>
                <Link to="/">Careers</Link>
            </li>
        </ul>
    </div>)
}

export default Footer;