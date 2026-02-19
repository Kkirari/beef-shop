import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustBadges from "./components/TrustBadges"
import CategorySection from "./components/CategorySection"
import BBQBundle from "./components/BBQBundle"
import BestSellers from "./components/BestSellers"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <CategorySection />
        <BBQBundle />
        <BestSellers />
      </main>
      <Footer />
    </>
  )
}
