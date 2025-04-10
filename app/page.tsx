import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Plans from './components/Plans'
import CaseStudy from './components/CaseStudy'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Service />
      <Plans />
      <CaseStudy />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
} 