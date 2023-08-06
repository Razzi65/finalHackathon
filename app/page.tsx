import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Section2 from '@/components/section2'
import Section3 from '@/components/secton3'
import Section4 from '@/components/section4'
import ReviewSection from '@/components/reviewSection'
import Footer from '@/components/footer'

export default function Home() {
  return (<>
  
  <HeroSection/>
    
    <Section3/>

    <Section4/>

    <ReviewSection/>

    <Footer/>

  </>
  )
}
