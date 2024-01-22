import React from 'react'
import  Navbar from '../../../components/Navbar/Navbar'
import Hero from './Hero'
import "../Components/HeroStyles.css"
import About from './About'
import Services from './Services'
import CallToAction from './CallToAction'
import Faq from './Faq'
import Footer from '../../../components/Footer/Footer'

const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About heading ="About Us"/>
      <Services/>
      <CallToAction/>
      <Faq/>
      <Footer />
     


     
    </div>
  )
}

export default home