import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/pug-icon-0.png'
import pugPic from './../public/pug-doughnut.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="header" style={{ width: "100%", display:"flex", border: "dashed 5px bisque", backgroundColor:"salmon", overflow: "hidden", padding: "100px"}}>
        <a href="#default" class="logo" style={{  float: "left", color: "black", textAlign: "center", textDecoration: "none", fontSize: "18px", lineHeight: "25px", borderRadius: "4px"}}>
        <Image height="100" width="100" src={profilePic} alt="Picture of the author" />
        </a>
        <div class="header-right" style={{margin:"10px"}}>
          <Link href="/"><a style={{ margin: '10px'}}>Home</a></Link>
          <a href="#contact" style={{margin:"10px"}}>Contact</a>
          <Link href="/image-gallery"><a style={{ margin: '10px'}}>Image Gallery</a></Link>
          <Link href="/diet"><a style={{ margin: '10px'}}>Diet</a></Link>
        </div>
      </div>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <strong>PugFlex</strong>!
        </h1>


        <Image src={pugPic} alt="pug" width={500}
          height={500} />

          <p>This is a pug fan site -- learn all about pugs</p>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
