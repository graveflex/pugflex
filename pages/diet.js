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
        <h1>Diet</h1>
      </main>
  </div>
}