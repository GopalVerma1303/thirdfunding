import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/LandingPageComponents/AboutSection'
import BackgroundCircles from '../components/LandingPageComponents/BackgroundCircles'
import Header from '../components/LandingPageComponents/Header'
import HeroSection from '../components/LandingPageComponents/HeroSection'

const Home: NextPage = () => {
  return (
    <div className='snap-y snap-mandatory z-0'>
      {/* // header */}

      {/* causing hydration error */}
      {/* ---------------------------------------- */}
      {/* <head>
        <title>Thirdfunding</title>
      </head> */}
      {/* ---------------------------------------- */}
      
      {/* <Header /> */}
      <section id='hero' className='snap-start'>
        <HeroSection />
      </section>
      <section id='about' className='snap-center'>
        <AboutSection />
      </section>

      {/* // Features  */}
      {/* // Testimonials or Social Proof */}
      {/* // Call-to-Action */}
      {/* // Footer */}
    </div>

  )
}

export default Home
