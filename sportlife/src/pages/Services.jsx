import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Xizmatlar</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[{title:'Online Fitness',desc:'Uyda mashg\'ulotlar dasturi'},{title:'Yoga',desc:'Nafas va moslashuvchanlik'},{title:'Gimnastika',desc:'Boshlang\'ichdan ilg\'orgacha'}].map((s) => (
          <div key={s.title} className="rounded-xl border border-gray-200/60 dark:border-gray-800/80 p-6">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{s.desc}</p>
            <Link to="/contact" className="inline-block mt-4 text-blue-600">Trener bilan bog\'lanish →</Link>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-xl">Sport tadbirlari</h2>
        <ul className="mt-3 grid gap-2 text-sm text-gray-700 dark:text-gray-300">
          <li>⚽ Futbol turniri – 20/10</li>
          <li>🏃‍♂️ Yengil atletika – 02/11</li>
          <li>🎾 Tennis ochiq chempionati – 15/11</li>
        </ul>
      </div>
    </div>
  )
}
