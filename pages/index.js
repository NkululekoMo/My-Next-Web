import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.title}>
          ***KOENA'S IT SOLUTIONS***
        </h2>
        <hr width='1000px' />
        <div className={styles.grid}>
          <Link href="/" >
            <a className={styles.card}>
            <h2>Home &rarr;</h2>
            </a>
          </Link>

          <Link href="/about" >
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            </a>
          </Link>

          <Link href="/services" >
          <a className={styles.card}>
            <h2>Services &rarr;</h2>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
            <h2>Contact &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
      <hr width='1000px' />
        <a> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <b>Created by Nkululeko Mokoena | IT Boffin &copy; | 2021</b> 
        
        </a>  <hr width='1000px' />
      </footer>
    </div>
  )
}