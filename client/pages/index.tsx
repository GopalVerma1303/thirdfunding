import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/LandingPageComponents/AboutSection'
import BackgroundCircles from '../components/LandingPageComponents/BackgroundCircles'
import Header from '../components/LandingPageComponents/Header'
import HeroSection from '../components/LandingPageComponents/HeroSection'
import FeaturesSection from '../components/LandingPageComponents/FeaturesSection'
import PoweredBySection from '../components/LandingPageComponents/PoweredBySection'
import Contacts from '../components/LandingPageComponents/Contacts'

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
      <section id='hero' className='snap-center'>
        <HeroSection />
      </section>
      <section id='about' className='snap-center'>
        <AboutSection />
      </section>
      <section id='features' className='snap-center'>
        <FeaturesSection />
      </section>
      <section id='poweredby' className='snap-center'>
        <PoweredBySection />
      </section>
      <section id='contacts' className='snap-center'>
        <Contacts />
      </section>
      {/* // contact */}
    </div>

  )
}

export default Home
