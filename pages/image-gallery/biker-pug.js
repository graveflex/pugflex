import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import profilePic from '../../public/pug-icon-0.png'
import Header from '../components/Header'

const pug =
  {
    label: 'Biker Pug',
    src: '/biker-pug.jpg',
    alt: 'A very tough pug'
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

      <Header />

      <main>
        <h1>{label}</h1>
        <Link href="/image-gallery">Back to Image Gallery</Link>
        <div style={{ width: 300, height: 300, position: 'relative', cursor: "pointer" }}>
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <caption style={{ whiteSpace: "nowrap" }}>{label} - {alt}</caption>
      </main>
    </div>
  )
}
