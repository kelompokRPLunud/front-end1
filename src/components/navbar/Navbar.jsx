import React, {useState,useEffect,useRef} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Userprofile from '../userprofile/userprofile'
import face from "../../images/face.svg";

const Navbar = (props) => {
 const [nav, setNav] = useState (false);
 const [profile,setprofile]=useState(false);
 const nama = useRef("")
 function logoutHandeler(e){
     nama.current="";
     localStorage.removeItem("agencertif");
     setprofile(false);
    }
 useEffect(()=>{
    if (localStorage.getItem("agencertif")!=undefined){
    const data=JSON.parse(localStorage.getItem("agencertif"));
    nama.current=data["nama"];
    setprofile(true);
    }
 },[props.user])


  return (
        <nav className={styles.navbar}>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <Link to="/">
                        <img src={Logo} alt="/" />
                    </Link>
                </li>
                <li>
                    <ul className={styles.datar}>
                        <li>
                            <Link to="/sertifikat">Autofill</Link>
                        </li>
                        <li>
                            <Link to="/tutorial">Tutorial</Link>
                        </li>
                        <li>
                        <Link to="/Pricing">Pricing</Link>
                        </li>
                    </ul>
                </li>
                <li>
                {!profile &&
                    <ul className={styles.datar}>
                        <li>
                            <img src={face}></img>
                        </li>
                        <li>
                            <Link to="/signup">SignUp</Link>
                        </li>

                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                } 
                {profile &&
                        <Userprofile nama={nama.current} onLogout={logoutHandeler}/>            
                }
                </li>
            </ul>
        </nav>
  )
}

export default Navbar