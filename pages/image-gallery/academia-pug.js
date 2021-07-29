import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import profilePic from '../../public/pug-icon-0.png'

const pug =
  {
    label: 'Academia Pug',
    src: '/academia-pug.jpg',
    path: 'academia-pug',
    alt: 'A very smart pug'
  }

export default function ImageGallery() {
  const { label, src, alt } = pug;
  return (
    <div>
      <Head>
        <title>{label}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="header" style={{  width: "100%", display:"flex", border: "dashed 2px bisque", backgroundColor:"salmon", overflow: "hidden", padding: "20px 10px"}}>
        <a href="#default" class="logo" style={{  float: "left", color: "black", textAlign: "center", padding: "12px", textDecoration: "none", fontSize: "18px", lineHeight: "25px", borderRadius: "4px"}}>
        <Image src={profilePic} alt="Picture of the author" />
        </a>
        <div class="header-right" style={{margin:"10px"}}>
          <Link href="/"><a style={{ margin: '10px'}}>Home</a></Link>
          <a href="#contact" style={{margin:"10px"}}>Contact</a>
          <Link href="/image-gallery"><a style={{ margin: '10px'}}>Image Gallery</a></Link>
          <Link href="/diet"><a style={{ margin: '10px'}}>Diet</a></Link>
        </div>
      </div>

      <main>
        <h1>{label}</h1>
        <Link href="/image-gallery">Back to Image Gallery</Link>
        <div style={{ width: 300, height: 300, position: 'relative' }}>
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <caption>{label} - {alt}</caption>
      </main>
    </div>
  )
}
