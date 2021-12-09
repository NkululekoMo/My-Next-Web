// pages/about.js

import React from "react";
import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>About us</h2><hr width='1000px' />
            <p className={styles.description}>
            Koena IT solutions focuses web design, functionally rich and visually stunning web applications. We focus on web solutions which are fully tailored to address your unique requirements and only use up-to-date technologies and the latest industry trends to deliver even the most technically complex yet easy-to-use solutions with the optimal cost/performance ratio.
            We design mobile applicationsthat is self-contained to work with mobile devices such as mobile phones and tablets.
		    For example, designs of a gaming app, video app, web browsers, payments app, etc. serve a specific purpose.
            </p>
            <footer className={styles.footer}>
      <hr width='1000px' />
        <a> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Created by Nkululeko Mokoena | IT Boffin &copy; | 2021</b> 
        
        </a>  <hr width='1000px' />
      </footer>
        </div>
    )
}