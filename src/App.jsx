import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import Stories from './components/Stories'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative">
        {/* Hero with Spline cover */}
        <Hero />
        {/* Top navigation overlayed */}
        <Navbar />
      </div>
      {/* Content sections */}
      <Destinations />
      <Experiences />
      <Stories />
      <Footer />
    </div>
  )
}

export default App
