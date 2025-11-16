import { motion } from 'framer-motion'
import { Sparkles, Camera, Coffee, Bike } from 'lucide-react'

const experiences = [
  {
    title: 'Sunrise hike + drone shoot',
    icon: Camera,
    desc: 'Capture golden-hour vistas with a local guide and licensed drone pilot.'
  },
  {
    title: 'Third-wave coffee crawl',
    icon: Coffee,
    desc: 'Sip micro-lot pour-overs and learn roasting techniques from pros.'
  },
  {
    title: 'City e-bike architecture tour',
    icon: Bike,
    desc: 'Explore modernist landmarks with a design historian at your pace.'
  },
  {
    title: 'Stargazing in dark-sky reserves',
    icon: Sparkles,
    desc: 'Gaze at the Milky Way with astrophotographers in pristine locations.'
  }
]

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Experiences</h2>
        <p className="mt-2 text-white/60">Thoughtfully designed activities that elevate every trip.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:ring-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-400 to-fuchsia-500 text-white shadow">
                  <e.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{e.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
