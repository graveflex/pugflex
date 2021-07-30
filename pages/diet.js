import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/pug-icon-0.png'
import pugPic from './../public/pug-doughnut.jpg';
import Link from 'next/link';
import Header from './components/Header';

export default ()=>{
  return <div>
      <Header/>
      <main>
        <h1>Good to eat:</h1>
        <li>Donuts</li>
        <li>Dog/Puppy Food</li>
        <li>Meat</li>
        <li>Grains</li>
        <li>Veggies</li>
        <h1>External Links</h1>
        <p>Follow these guidelines at a <a href="http://www.petpugdog.com/feeding-a-pug" style={{color:"blue"}}>partner site! </a></p>
      </main>
  </div>
}
