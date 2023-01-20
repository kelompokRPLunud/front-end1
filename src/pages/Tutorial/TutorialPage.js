import React from "react";
import style from "./TutorialPage.module.css";
import { Link } from "react-router-dom";

function TutorialPage(){


    return (
        <div className={style.maindiv}>
            <div className={style.centerdiv}>
                <span>Tutorial Auto Fill Data</span>
                <div className={style.video}></div>
                <Link to="/sertifikat" className={style.sumbitbtn}>Auto fill your certificate</Link>
            </div>
            <div className={style.picsplt}>
                <div className={style.pict}></div>
                <div className={style.textdiv}>
                    <span className={style.fonttitle}>Step 1</span>
                    <span className={style.fonttitle}>Lorem Ipsum</span>
                    <span>Don’t waste time designing a certificate from scratch. Choose from one of AGenCertif’s 
                        pre-designed templates that already has all typical certificate elements put into place. 
                        Browse our selection of certificate templates below to find one that matches your needs.</span>
                </div>
            </div>
            <div className={style.picsplt}>
                <div className={style.textdiv}>
                    <span className={style.fonttitle}>Step 2</span>
                    <span className={style.fonttitle}>Lorem Ipsum</span>
                    <span>Don’t waste time designing a certificate from scratch. Choose from one of AGenCertif’s 
                        pre-designed templates that already has all typical certificate elements put into place. 
                        Browse our selection of certificate templates below to find one that matches your needs.</span>
                </div>
                <div className={style.pict}></div>
            </div>
            <div className={style.picsplt}>
                <div className={style.pict}></div>
                <div className={style.textdiv}>
                    <span className={style.fonttitle}>Step 3</span>
                    <span className={style.fonttitle}>Lorem Ipsum</span>
                    <span>Don’t waste time designing a certificate from scratch. Choose from one of AGenCertif’s 
                        pre-designed templates that already has all typical certificate elements put into place. 
                        Browse our selection of certificate templates below to find one that matches your needs.</span>
                </div>
            </div>
        </div>
    )
}

export default TutorialPage;