import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'

const mib =
  {
    label: 'Men in Black Pug',
    src: '/frank.jpg',
    path: 'frank',
    alt: 'Men in Black pug'
  }

const pocahantas = {
    label: 'Pocahantas Pug',
    src: '/pocahantas.jpg',
    path: 'pocahantas',
    alt: 'Pocahantas pug'
}

export default function ImageGallery() {
  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Pop Culture</h1>
        <p>Pugs have come out in television and film, such as Frank the Pug in the film Men in Black and the follow-up series. Other films that have pugs include 12 Rounds, Marie Antoinette (2006 film), and Disney's film about Pocahontas. They have also appeared on television, in shows like: Poldark,The West Wing
        <br/>
        Pugs have also appeared in many fictional books, like Lady Bertram's pug in Mansfield Park and in the book Pugs: God's Little Weirdos.
        <br/>
        Famous people who own pugs include broadcaster Jonathan Ross and actress Jessica Alba.</p>
        <ul>
          <li>Men in Black</li>
          <div style={{ width: 300, height: 300, position: 'relative' }}>
          <Image src={mib.src} alt={mib.alt} layout="fill" objectFit="cover" />
          </div>
          <li>Pocahantas</li>
          <div style={{ width: 300, height: 300, position: 'relative' }}>
          <Image src={pocahantas.src} alt={pocahantas.alt} layout="fill" objectFit="cover" />
          </div>
        </ul>
      </main>
    </div>
  )
}
