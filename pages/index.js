import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className={styles.title}>

      <h1 className={styles.text}>Home Page</h1>
      <Link className={styles.btn} href="/ninjas"> Go to ninja listing</Link>
  
    </div>
  )
}
