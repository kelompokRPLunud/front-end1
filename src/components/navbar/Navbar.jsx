import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
 const [nav, setNav] = useState (false)
  return (
    <header className={styles.navbar}>
        <div>
            <img src={Logo} alt="/" />
        </div>
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <a href="/">Auto Fill</a>
                </li>
                <li>
                    <a href="/">Tutorial</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <a href="/">Log In</a>
                </li>
                <li>
                    <a href="/">Sign In</a>
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