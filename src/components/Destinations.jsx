import { motion } from 'framer-motion'
import { MapPin, Plane, Mountain, Waves, Trees, Landmark } from 'lucide-react'

const cards = [
  {
    title: 'Santorini, Greece',
    tag: 'Seaside Romance',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1594048069339-42ae0e89376a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW50b3JpbmklMkMlMjBHcmVlY2V8ZW58MHwwfHx8MTc2MzI2OTI3OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Whitewashed villages, cobalt domes, and sunset-soaked calderas.'
  },
  {
    title: 'Kyoto, Japan',
    tag: 'Cultural Escape',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1932&auto=format&fit=crop',
    desc: 'Temple-lined paths, bamboo forests, and tea ceremony calm.'
  },
  {
    title: 'Banff, Canada',
    tag: 'Alpine Adventure',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1643104897073-bfa97947c94f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYW5mZiUyQyUyMENhbmFkYXxlbnwwfDB8fHwxNzYzMjY5Mjc4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Turquoise lakes, glacier peaks, and wildlife-rich valleys.'
  },
  {
    title: 'Bali, Indonesia',
    tag: 'Tropical Wellness',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop',
    desc: 'Rice terraces, coral reefs, and a thriving wellness scene.'
  }
]

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Destinations</h2>
            <p className="mt-2 text-white/60">Handpicked places that blend nature, culture, and modern design.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold shadow hover:shadow-md transition">
            <Plane className="h-4 w-4" />
            See all
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20"
            >
              <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-80 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative p-5 flex flex-col gap-2 h-56 justify-end">
                <div className="inline-flex items-center gap-2 text-white/90">
                  <c.icon className="h-4 w-4" />
                  <span className="text-sm">{c.tag}</span>
                </div>
                <h3 className="text-white text-xl font-semibold">{c.title}</h3>
                <p className="text-white/70 text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
