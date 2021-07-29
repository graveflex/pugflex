import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/pug-icon-0.png'
import Link from 'next/link';

export default ()=>{
  return (
  <div className="header" style={{ width: "100%", display:"flex", border: "dashed 5px bisque", backgroundColor:"salmon", overflow: "hidden", padding: "10px"}}>
    <a href="#default" className="logo" style={{  float: "left", color: "black", textAlign: "center", textDecoration: "none", fontSize: "18px", lineHeight: "25px", borderRadius: "4px"}}>
      <Image height="100" width="100" src={profilePic} alt="Picture of the author" />
    </a>
    <div className="header-right" style={{margin:"10px", color:"bisque"}}>
      <Link href="/"><a style={{ margin: '10px', color:"bisque"}}>Home</a></Link>
      <Link href="/image-gallery"><a style={{ margin: '10px', color:"bisque"}}>Image Gallery</a></Link>
      <Link href="/interesting-facts"><a style={{ margin: '10px', color:"bisque"}}>Interesting Facts</a></Link>
      <Link href="/diet"><a style={{ margin: '10px', color:"bisque"}}>Diet</a></Link>
    </div>
  </div>
  )
}
