import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

const pug =
  {
    label: 'Side Glance Pug',
    src: '/side-glance-pug.jpg',
    path: 'side-glance-pug',
    alt: 'A very photogenic pug'
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