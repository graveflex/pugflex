import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/pug-icon-0.png'
import pugPic from './../public/pug-doughnut.jpg';
import Link from 'next/link';
import Header from './components/Header';

export default ()=>{
  return <div style={{ backgroundColor: "salmon" }}>
      <Header/>
      <main>
        <h1>The diet of a pug</h1>
        <p>Follow these guidelines at a <a href="http://www.petpugdog.com/feeding-a-pug" style={{color:"blue"}}>partner site! </a></p>
      </main>
  </div>
}
