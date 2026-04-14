import { Link } from "react-router-dom";
import React,{useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {

const tl= gsap.timeline()


useGSAP(()=>{
  tl.fromTo('.navbar',{
    y:'-90%',
    opacity:0
  },{
    y:20,
    duration:0.8,
    opacity:1,
    stagger:1
  })

    tl.fromTo(".contain-li li",{
      y:-80,
      opacity:0,
      // stagger:1,
      // duration:1
    },{
     y:5,
     duration:0.5,
     opacity:1,
     stagger:0.4,
    })
  
})


const [showbtn, setshowbtn] = useState(false)

const btn=()=>{
  setshowbtn(!showbtn)
}

  return (
    <>
<div className="container">

<nav className= 'navbar lg:bg-red-500  xl:bg-blue-500 md:bg-yellow-300 flex justify-between p-5 w-[100vw]'>
    <h1 className='heading-0 flex text-3xl md:text-xl font-bold'>
    <img className='img-0 w-11 h-10' src="public/Main images/star-img.png" /> WizardZ</h1>


<img onClick={btn} className="img-1" src="/menu.png" alt="" />

    <ul className={`contain-li ${showbtn ? 'active' : ''}` }>
       <li> <Link> About Us</Link></li> 
        <li> <Link> services</Link></li>
        <li> <Link> use cases</Link></li>
        <li> <Link> Pricing</Link></li>
        <li> <Link> Blog</Link></li>
    </ul>
    <button className='btn-0 border-2 transform translate-x-3 border-black w-[140px] h-10 rounded-md hover:bg-black hover:text-white'>Request a quote</button>
</nav>

</div>


    </>
  )
}

export default Navbar
