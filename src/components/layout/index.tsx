import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from '../sections/Banner'
import Brands from '../sections/Brands'
import 'swiper/css';
import 'swiper/css/pagination';
import Services from '../sections/Services'
import TrustedPartner from '../sections/TrustedPartner'
import Solution from '../sections/Solution'
import Industry from '../sections/Industry'
import ContactUs from '../sections/ContactUs'
import CaseStudy from '../sections/CaseStudy'
import TrustSlider from '../sections/TrustSlider'

const Layout = () => {
  return (
    <>  
        <Header />
        <Banner />
        <Brands />
        <Services />
        <TrustedPartner />
        <Solution />
        <Industry />
        <TrustSlider />
        <CaseStudy />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Layout