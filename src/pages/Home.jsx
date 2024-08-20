import React from 'react'
import HeroSection from '../components/home/HeroSection'
import BrandSection from '../components/home/BrandSection'
import GallerySection from '../components/home/GallerySection'
import ProductSlider from '../components/home/ProductSlider'
import BrandBaner from '../components/home/BrandBaner'
import GridProducts from '../components/home/GridProducts'
import FollowOnInstagram from '../components/home/FollowOnInstagram'

function Home() {
  return (
    <div>
      <HeroSection />
      <BrandSection />
      <GallerySection />
      <ProductSlider />
      <BrandBaner />
      <GridProducts />
      <FollowOnInstagram />
    </div>
  )
}

export default Home