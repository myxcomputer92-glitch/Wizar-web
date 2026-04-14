import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React from 'react'



const Hero = () => {

  gsap.registerPlugin(ScrollTrigger)

 const mm =gsap.matchMedia()
  
const tl=gsap.timeline()
 
 useGSAP(()=>{
  
   
  const tl2=gsap.timeline({scrollTrigger:{
     trigger:'.btn-1',
     start:'top 30vh',
     end:'end 20vh',
    //  markers:true,
    // toggleActions:'restart none none none',
  }})
  


  mm.add('(max-width:480px)',()=>{



tl.fromTo('.heading-1',{
    x:'-110vw',
    opacity:0,
  },{
    delay:0.7,
    x:4,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  tl.fromTo('.h2',{
    y:110,
    opacity:0,
  },{
    y:-20,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  
  
  
  tl2.fromTo('.img-2',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:1,
    y:20,
    // rotate:360,
  })
  
  
  tl2.fromTo('.logos .logo',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:0.5,
    y:20,
    // rotate:360,
  })
  


  })
  mm.add('(min-width:481px) and (max-width:768px)',()=>{



tl.fromTo('.heading-1',{
    x:'-110vw',
    opacity:0,
  },{
    delay:0.7,
    x:4,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  tl.fromTo('.h2',{
    y:110,
    opacity:0,
  },{
    y:-20,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  
  
  
  tl2.fromTo('.img-2',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:1,
    y:20,
    // rotate:360,
  })
  
  
  tl2.fromTo('.logos .logo',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:0.5,
    y:20,
    // rotate:360,
  })


  })





  
  // tl.fromTo('.heading-1',{
  //   x:'-110vw',
  //   opacity:0,
  // },{
  //   delay:0.7,
  //   x:4,
  //   zIndex:-1,
  //   duration:0.6,
  //   opacity:1,
  // })
  
  // tl.fromTo('.h2',{
  //   y:110,
  //   opacity:0,
  // },{
  //   y:-20,
  //   zIndex:-1,
  //   duration:0.6,
  //   opacity:1,
  // })
  
  
  
  
  // tl2.fromTo('.img-2',{
  //   opacity:0,
  //   // duration:1,
  //   // rotate:360,
  //   scale:0.4,
  // },{
  //   scale:1,
  //   opacity:1,
  //   duration:1,
  //   y:20,
  //   // rotate:360,
  // })
  
  
  // tl2.fromTo('.logos .logo',{
  //   opacity:0,
  //   // duration:1,
  //   // rotate:360,
  //   scale:0.4,
  // },{
  //   scale:1,
  //   opacity:1,
  //   duration:0.5,
  //   y:20,
  //   // rotate:360,
  // })
  
  mm.add('(min-width:769px) and (max-width:1024px)',()=>{



tl.fromTo('.heading-1',{
    x:'-110vw',
    opacity:0,
  },{
    delay:2.7,
    x:4,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  tl.fromTo('.h2',{
    y:110,
    opacity:0,
  },{
    y:-20,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  
  
  
  tl.fromTo('.img-2',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:1,
    y:20,
    // rotate:360,
  })
  
  
  tl2.fromTo('.logos .logo',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:0.5,
    y:20,
    // rotate:360,
  })
  


  })

  
  mm.add('(min-width:1025px) and (max-width:1280px)',()=>{



tl.fromTo('.heading-1',{
    x:'-110vw',
    opacity:0,
  },{
    delay:2.7,
    x:4,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  tl.fromTo('.h2',{
    y:110,
    opacity:0,
  },{
    y:-20,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  
  
  
  tl.fromTo('.img-2',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:1,
    y:20,
    // rotate:360,
  })
  
  
  tl2.fromTo('.logos .logo',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:0.5,
    y:20,
    // rotate:360,
  })
  


  })




    mm.add('(min-width:1281px)',()=>{



tl.fromTo('.heading-1',{
    x:'-110vw',
    opacity:0,
  },{
    delay:2.7,
    x:4,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  tl.fromTo('.h2',{
    y:110,
    opacity:0,
  },{
    y:-20,
    zIndex:-1,
    duration:0.6,
    opacity:1,
  })
  
  
  
  
  tl.fromTo('.img-2',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:1,
    y:20,
    // rotate:360,
  })
  
  
  tl2.fromTo('.logos .logo',{
    opacity:0,
    // duration:1,
    // rotate:360,
    scale:0.4,
  },{
    scale:1,
    opacity:1,
    duration:0.5,
    y:20,
    // rotate:360,
  })
  


  })



})


  return (
    <>
    <div className='cont-2'>
        <div className="parent">

      <div className="left">
        <h1 className='heading-1'>Navigating the digital landscape for success</h1>
        <h2 className='h2'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing and content creation.</h2>
        <button className='btn-1'>Book a consultation</button>
      </div>
      <div className="right">
        <img className='img-2' src="/Main images/Horn-img.jpg" alt="" srcset="" />
      </div>
        </div>
<div className="logos">
    <img className='logo logo-1' src="/Main images/logo-1.png" alt="" /><img className='logo logo-2'  src="/Main images/logo-2.png" alt="" /><img className='logo logo-3'  src="/Main images/logo-3.png" alt="" /><img className='logo logo-4'   src="/Main images/logo-4.png" alt="" /><img className='logo logo-5'  src="/Main images/logo-5.png" alt="" />



    
</div>



    </div>
    </>
  )
}

export default Hero
