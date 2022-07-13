import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import HomeSection from '../components/HomeSection'
import SocialLinks from '../components/SocialLinks'
import About from '../components/About'
import Portfolio from "../components/Portfolio"


const Home: NextPage = () => {
  return (
    <div>
      <NavBar  />
      <HomeSection />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  )
}

export default Home
