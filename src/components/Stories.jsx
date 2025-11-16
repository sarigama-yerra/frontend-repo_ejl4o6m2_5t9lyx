import { motion } from 'framer-motion'

const stories = [
  {
    title: 'Slow mornings in Lisbon',
    author: 'Maya L.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Ridge walks above the clouds',
    author: 'Jon K.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'City lights, late-night ramen',
    author: 'Yuki T.',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2069&auto=format&fit=crop',
  }
]

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Traveler Stories</h2>
            <p className="mt-2 text-white/60">Real moments from our community on the road.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold shadow hover:shadow-md transition">
            Read more
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-90 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative p-6 flex flex-col gap-2 h-72 justify-end">
                <h3 className="text-white text-xl font-semibold">{s.title}</h3>
                <p className="text-white/70 text-sm">By {s.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
