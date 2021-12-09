import React from "react";
import styles from '../styles/Services.module.css'

export default function Services() {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Services</h2><hr width='1000px' />
            <p className={styles.description}>
            <div class="col-lg-2 col-md-2 ">
					<h3>UI &amp; UX DESIGN</h3><hr width='100px' />
					<p>We create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.</p>
			</div>
			<div class="col-lg-2 col-md-2">
					<h3>ECOMMERCE</h3><hr width='100px' />
					<p>Providing best commercial transactions conducted electronically on the internet e.g Busines to Consumer(B2C) & Business to Business(B2B)</p>
			</div>
			<div class="col-lg-2 col-md-2 " >
					<h3>MOBILE APP</h3><hr width='100px' />
					<p>We build the best mobile applications that simply runs on a mobile device such as phones, tablet or watch.</p>
			</div>
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
