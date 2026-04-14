import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const About = () => {

useGSAP(()=>{
  const tl=gsap.timeline({scrollTrigger:{
    trigger:'.cont-4',
    start:'top 40%',
    end:'bottom 30%',
    // markers:true,
    toggleActions:'restart none restart none'
  }})

  tl.fromTo('.contain-text h1 , .contain-text p',{
    opacity:0,
    y:50,
  },{
    opacity:1,
    y:15,
    duration:1
  })



  const tl2=gsap.timeline({scrollTrigger:{
       trigger:'.contain-text',
      start:'top 70vh',
      // end:'',
      toggleActions:'restart none restart none',
      // markers:true
  }})

  tl2.fromTo('.part-1',{
    y:40,
    opacity:0,
  },{
    opacity:1,
    y:20,

})


  tl2.fromTo('.part-2',{
    y:40,
    opacity:0,
  },{
    opacity:1,
    y:20,

})


  tl2.fromTo('.part-3',{
    y:40,
    opacity:0,
  },{
    opacity:1,
    y:20,

})







})


  return (
    <>
    <div className='cont-4'>
      <div className="contain-text">

      <h1>Case study</h1>
      <p>Explore Real-Life Example of Our Proven Digital Marketing Success
through Our Case Studies.</p>
      </div>

<div className="components">


    <div className="part part-1">
      <h1>For a local restraurant, we implemented a targeted PPC campaign that resulted i a 50% increase in website traffic and a 25% increase in traffic.</h1>
    </div>

    <div className="part part-2">
      <h1>
        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in traffic.
      </h1>
    </div>

    <div className="part part-3">
      <h1>
For a national rental chain, we created a social media marketing campaign that increased following by 25% increase in online sales.</h1>
    </div>
</div>


    </div>
    </>
  )
}

export default About
