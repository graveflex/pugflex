import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from './components/Header';

export default function InterestingFacts() {
  return (
    <div>
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

        <ul>
          <li>The Pug is one of the oldest dog breeds.</li>
          <li>Their name probably comes from their facial expression.</li>
          <li>The Pug was the mascot of the House of Orange in Holland.</li>
        </ul>
      </main>
    </div>
  );
}
