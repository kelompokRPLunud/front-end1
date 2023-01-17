import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const [nav, setNav] = useState (false)
  return (
    <header className={styles.navbar}>
        <Link to="/">
            <img src={Logo} alt="/" />
        </Link>
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <Link to="/sertifikat">Autofill</Link>
                </li>
                <li>
                    <a href="/">Tutorial</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
        </nav>
        <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
    </header>
  )
}

export default Navbar