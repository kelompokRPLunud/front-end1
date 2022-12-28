import React from 'react'
import styles from './Home.module.css'
import pict1 from '../../images/pict1.svg'
import pict2 from '../../images/pict2.svg'

const Home = () => {
  return (
    <div className={styles.Homepage}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1>Auto Fill Certificate Data</h1>
                    <div className={styles.text1}>
                    <a href="/">Whether you successfully passed an online course or want to create beautiful gift certificates for your business — we've got your back! Find numerous design ideas in AGenCertif and easily make a certificate on your own. Upload your design now and let us fill you data.</a>
                    </div>
                    <div className={styles.btncontainer}>
                        <button>
                            <span>Auto fill my certificate data</span>
                        </button>
                        <p>It free and easy to use.</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src={pict1} alt="/" />
            </div>
        </div>
        <div className={styles.container}>
        <div>
                <img src={pict2} alt="/" />
            </div>
            <div className={styles.content}>
                <div className={styles.right2}>
                    <h1>Save Your Precious Time</h1>
                    <div className={styles.text2}>
                    <a href="/">Don't waste time to insert a certificate from scratch. With AGenCertif, you can automaticaly input your certificate data in just few second. Upload your design now and let us fill your data.</a>
                    </div>
                    <div className={styles.btncontainer}>
                        <button>
                            <span>Auto fill my certificate data</span>
                        </button>
                        <p>Save your precious time.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home