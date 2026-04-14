import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {
    
    
    const mm= gsap.matchMedia()
    // 🔹 Your original text animation (UNCHANGED)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.logos', // (still same, you can change later if needed)
        start: 'top 15%',
        end: '200vh 120vh',
        // scrub: true,
        // markers:true,
      }
    })


    const tl2=gsap.timeline({scrollTrigger:{
      trigger:'.cards',
      scroller:'body',
      // markers:true,
      start:'center 60%',
      toggleActions:"play reverse play reverse",
      end:'end 30%',
      scrub:1,
    }})
    
mm.add('(max-width:480px)',()=>{


    tl.fromTo('.text h1, .text p', {
      y: 25,
      opacity: 0,
    }, {
      y: -10,
      duration: 1,
      opacity: 1,
    })


    // ✅ FIX: Each card animates individually
    gsap.utils.toArray('.cards > div').forEach((card) => {

      gsap.fromTo(card, {
        y: 25,
        opacity: 0,
      }, {
        y: -10,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'restart none restart none',
          scrub:true
          // markers: true,
        }
      })

    })
})



mm.add('(min-width:481px) and (max-width:768px)',()=>{
      tl.fromTo('.text h1, .text p', {
      y: 25,
      opacity: 0,
    }, {
      y: -10,
      duration: 1,
      opacity: 1,
    })


    // ✅ FIX: Each card animates individually
    gsap.utils.toArray('.cards > div').forEach((card) => {

      gsap.fromTo(card, {
        y: 25,
        opacity: 0,
      }, {
        y: -10,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'restart none restart none',
          scrub:true
          // markers: true,
        }
      })

    })
})

mm.add('(min-width:769px) and (max-width:1024px)',()=>{

  tl.fromTo('.text h1, .text p', {
      y: 25,
      opacity: 0,
    }, {
      y: -10,
      duration: 1,
      opacity: 1,
    })

    tl2.fromTo('.card1',{
      x:-100,
      opacity:0,
    },{
      x:30,
      duration:0.5,
      opacity:1
    })


    tl2.fromTo('.card2',{
      x:100,
      opacity:0,
    },{
      x:-8,
      duration:0.5,
      opacity:1
    })
    tl2.fromTo('.card3',{
      x:-100,
      opacity:0,
    },{
      x:30,
      duration:0.5,
      opacity:1
    })
    tl2.fromTo('.card4',{
      x:100,
      opacity:0,
    },{
      x:-8,
      duration:0.5,
      opacity:1
    })






})

mm.add('(min-width:1025px) and (max-width:1280px)',()=>{
    tl.fromTo('.text h1, .text p', {
      y: 25,
      opacity: 0,
    }, {
      y: -10,
      duration: 1,
      opacity: 1,
    })

    tl2.fromTo('.card1',{
      x:-100,
      opacity:0,
    },{
      x:30,
      duration:0.5,
      opacity:1
    },'.abe')


    tl2.fromTo('.card2',{
      x:100,
      opacity:0,
    },{
      x:-8,
      duration:0.5,
      opacity:1
    },'.abe')
    tl2.fromTo('.card3',{
      x:-100,
      opacity:0,
    },{
      x:30,
      duration:0.5,
      opacity:1
    },'.ab')
    tl2.fromTo('.card4',{
      x:100,
      opacity:0,
    },{
      x:-8,
      duration:0.5,
      opacity:1
    },'.ab')

})

mm.add('(min-width:1280px)',()=>{
  

    tl.fromTo('.text h1, .text p', {
      y: 25,
      opacity: 0,
    }, {
      y: -10,
      duration: 1,
      opacity: 1,
    })


    // ✅ FIX: Each card animates individually
    gsap.utils.toArray('.cards > div').forEach((card) => {

      gsap.fromTo(card, {
        x: 25,
        opacity: 0,
      }, {
        X: -10,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'restart none restart none',
          scrub:true
          // markers: true,
        }
      })

    })
})






    // // 🔹 Your original text animation (UNCHANGED)
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.logos', // (still same, you can change later if needed)
    //     start: 'top 15vh',
    //     end: '200vh 120vh',
    //     toggleActions: 'restart none restart none',
    //     scrub: true,
    //   }
    // })

    // tl.fromTo('.text h1, .text p', {
    //   y: 25,
    //   opacity: 0,
    // }, {
    //   y: -10,
    //   duration: 1,
    //   opacity: 1,
    // })


    // // ✅ FIX: Each card animates individually
    // gsap.utils.toArray('.cards > div').forEach((card) => {

    //   gsap.fromTo(card, {
    //     y: 25,
    //     opacity: 0,
    //   }, {
    //     y: -10,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: card,
    //       start: 'top 80%',
    //       toggleActions: 'restart none restart none',
    //       scrub:true
    //       // markers: true,
    //     }
    //   })

    // })

  })


  return (
    <>
      <div className='cont-3'>
        <div className="text">

          <h1 className='heading-2'>Services</h1>
          <p className='para-0'>At our digital marketting agency, we offer a range of services to help
            businesses grow and succeed online. These services includes:</p>
        </div>

        <div className="cards">

          <div className="card1">
            <div className="left2 many-left">
              <h1 className='heading-3'>Search Engine Optimization</h1>
            </div>
            <div className="right2 many-right">
              <img className='img-3' src="/Secondary-images/first-img-removebg-preview.png" alt="" />
            </div>
          </div>

          <div className="card2">
            <div className="left3 many-left">
              <h1 className='heading-4'>Pay per click advertising</h1>
            </div>
            <div className="right3 many-right">
              <img className='img-4' src="/Secondary-images/second-img.jpg" alt="" />
            </div>
          </div>

          <div className="card3">
            <div className="left4 many-left">
              <h1 className='heading-5'>Social media marketing</h1>
            </div>
            <div className="right4 many-right">
              <img className='img-5' src="/Secondary-images/third-img-removebg-preview.png" alt="" />
            </div>
          </div>

          <div className="card4">
            <div className="left5 many-left">
              <h1 className='heading-6'>E-mail marketing</h1>
            </div>
            <div className="right5 many-right">
              <img className='img-6' src="/Secondary-images/fourth-img.jpg" alt="" />
            </div>
          </div>

        </div>

        <main>
          <div className="mega-card">
            <div className="left6">
              <h1 className='heading-7'>Let's make thing happen</h1>
              <p className='para para-1'>Contact us today to learn more about how our digital</p>
              <p className='para para-2'>
                marketing services can help your business grow and
              </p>
              <p className='para para-3'> succeed online. </p>
              <button className='btn-2'>Get your free proposal</button>
            </div>
            <div className="right6">
              <img className='img-7' src="/Secondary-images/six-image-removebg-preview.png" alt="" />
            </div>
          </div>
        </main>

      </div>
    </>
  )
}

export default Services