import React from 'react'
import TopNavBar from '../components/TopNavBar'
import NavBar from '../components/NavBar'
// import HeroHeader from '../components/HeroHeader'
// import AnimatedSlider from '../components/AnimatedSlider'
import AboutUsSection from '../components/AboutUsSection'
import ServiceSection from '../components/ServiceSection'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Article from '../components/Article'
import WhyChooseUs from '../components/WhyChooseUs'
import HeroHome from '../components/HeroHome'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <HeroHome/>
      <AboutUsSection/>
      <ServiceSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <Team/>
      <Article/>
      <Contact/>
    </>
  )
}

export default Home
