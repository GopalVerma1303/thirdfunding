import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundCircles from '../components/LandingPageComponents/BackgroundCircles'
import Header from '../components/LandingPageComponents/Header'
import HeroSection from '../components/LandingPageComponents/HeroSection'

const Home: NextPage = () => {
  return (
    <div className='snap-y snap-mandatory'>
      {/* // header */}
      <Header />
      {/* // Hero */}
      <HeroSection />

      {/* // Features  */}
      {/* // Testimonials or Social Proof */}
      {/* // Call-to-Action */}
      {/* // Footer */}
    </div>

  )
}

export default Home
