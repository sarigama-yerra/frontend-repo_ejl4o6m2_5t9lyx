import Spline from '@splinetool/react-spline'
import { ArrowRight, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm text-white/90 ring-1 ring-white/20">
              <Star className="h-4 w-4 text-yellow-300" />
              Curated escapes for 2025
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">Discover vibrant places where technology meets nature</h1>
            <p className="mt-4 text-white/80 text-lg">Plan unforgettable journeys with interactive itineraries, hidden-gem guides, and seamless booking — all in one modern, immersive experience.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#destinations" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Explore destinations
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#search" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition">
                <MapPin className="h-5 w-5" />
                Build an itinerary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
