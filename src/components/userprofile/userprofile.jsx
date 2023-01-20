import React from "react";
import face from "../../images/face.svg";
import style from "./userprofile.module.css";
import { useState } from "react";
import buka from "../../images/buka.svg";
import tutup from "../../images/tutup.svg";

function Userprofile(props){
    const [Drop,SetDrop] =useState(false);
    function droptableHandeler(e){
        SetDrop(!Drop);
    }
    return (<div className={style.profile}>
        <img src={face}></img>
        <span>{props.nama}</span>
        {!Drop ? 
        <span>
            <img src={buka} onClick={droptableHandeler} className={style.centerimage}></img>
        </span>
        :
        <span>
            <img src={tutup} onClick={droptableHandeler} className={style.centerimage}></img>
        </span>

        }
        {Drop &&
                <ul className={style.dropdown}>
                <li onClick={props.onLogout}>
                    logout
                </li>
                <li>
                    setting
                </li>
            </ul>}
    </div>)
}

export default Userprofile;