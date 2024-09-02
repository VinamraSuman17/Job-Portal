import React from 'react'
import Navbar from './ui/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>


    </div>
  )
}

export default Home
