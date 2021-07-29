import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';

export default function InterestingFacts() {
  return (
    <div>
      <Head>
        <title>Interesting Facts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <h1>Interesting Facts</h1>

        <div style={{ width: 300, height: 300, position: 'relative' }}>
          <Image
            src="/biker-pug.jpg"
            alt="A very tough pug"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h2>General facts</h2>
        <ul>
          <li>The Pug is one of the oldest dog breeds.</li>
          <li>Their name probably comes from their facial expression.</li>
          <li>The Pug was the mascot of the House of Orange in Holland.</li>
        </ul>

        <h2>Anatomy</h2>
        <ul>
          <li>Characterized by their wrinkly face</li>
          <li>Curled tail</li>
          <li>Square muscular body with large head, big eyes and small ears</li>
          <li>Coat colors </li>
        </ul>
      </main>
    </div>
  );
}
