// pages/contact.js

import React from "react";
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Contact us</h2>
            <div className={styles.details}>
                <li className={styles.list}>
                <label className={styles.label}><b>Name:</b></label>
                <p className={styles.value}>Nkululeko Mokoena-Full Stack Web Developer</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}><b>Tel:</b></label>
                <p className={styles.value}>011 736 6767</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}><b>Email:</b></label>
                <p className={styles.value}>KoenasITSolutions@gmail.com</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}><b>Facebook:</b></label>
                <p className={styles.value}>KoenasITSolutions</p>
                </li>
            </div>
            <footer className={styles.footer}>
      <hr width='1000px' />
        <a> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Created by Nkululeko Mokoena | IT Boffin &copy; | 2021</b> 
        
        </a>  <hr width='1000px' />
      </footer>
        </div>
    )
}
