import { Link } from 'react-router-dom'
import { sports } from '../data/sports'
import { motion } from 'framer-motion'

export default function Home() {
  const topSports = sports.slice(0, 8)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Sport – Hayot Tarzi
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SPORTLIFE: sport turlari haqida ma'lumot, ilhom va sog'lom turmush.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/sports"
              className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Explore Sports
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Join Community
            </Link>
          </div>
          <form className="mt-6 max-w-md mx-auto grid grid-cols-[1fr_auto] gap-2">
            <input
              type="email"
              required
              placeholder="Emailingiz — yangiliklarga obuna bo'ling"
              className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
            />
            <button className="px-4 rounded-md bg-green-600 text-white hover:bg-green-700 transition">Obuna</button>
          </form>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Biz haqimizda</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Missiyamiz — hamma uchun sportni ommalashtirish. SPORTLIFE sizga sport tarixi,
              qoidalari, yutuqlar va mashhur sportchilar haqida ishonchli ma'lumot beradi.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-950 dark:to-green-900"
          />
        </div>
      </section>

      {/* Sports Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sport turlari</h2>
          <Link to="/sports" className="text-blue-600 hover:underline">
            Barchasini ko'rish
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topSports.map((sport, idx) => (
            <motion.div
              key={sport.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-gray-200/60 dark:border-gray-800/80 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/sports/${sport.slug}`} className="block">
                <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${sport.coverUrl})` }} />
                <div className="p-4">
                  <div className="text-2xl">{sport.emoji}</div>
                  <h3 className="mt-2 font-semibold">{sport.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{sport.brief}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
