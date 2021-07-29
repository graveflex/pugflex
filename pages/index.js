import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/pug-icon-0.png'
import pugPic from './../public/pug-doughnut.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="header" style={{  width: "100%", display:"flex", border: "dashed 2px bisque", backgroundColor:"salmon", overflow: "hidden", padding: "20px 10px"}}>
        <a href="#default" class="logo" style={{  float: "left", color: "black", textAlign: "center", padding: "12px", textDecoration: "none", fontSize: "18px", lineHeight: "25px", borderRadius: "4px"}}>
        <Image src={profilePic} alt="Picture of the author" />
        </a>
        <div class="header-right" style={{margin:"10px"}}>
          <a class="active" href="#home" style={{margin:"10px"}}>Home</a>
          <a href="#contact" style={{margin:"10px"}}>Contact</a>
          <a href="#about" style={{margin:"10px"}}>About</a>
        </div>
      </div>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <strong>PugFlex</strong>!
        </h1>


        <Image src={pugPic} alt="pug" width={500}
          height={500} />

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}