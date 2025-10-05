import { useParams, Link } from 'react-router-dom'
import { getSportBySlug } from '../data/sports'

export default function SportDetail() {
  const { slug } = useParams()
  const sport = getSportBySlug(slug)

  if (!sport) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Topilmadi</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Bunday sport turi mavjud emas.</p>
        <Link to="/sports" className="mt-4 inline-block text-blue-600">← Ortga</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{sport.emoji}</div>
        <h1 className="text-3xl font-bold">{sport.name}</h1>
      </div>
      <div
        className="h-56 rounded-xl bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${sport.coverUrl})` }}
      />
      <p className="text-gray-700 dark:text-gray-300">{sport.brief}</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="font-semibold text-xl">Tarixi</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{sport.history}</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Qoidalari</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            {sport.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="font-semibold text-xl">Yutuqlar</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            {sport.achievements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Mashhur sportchilar</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            {sport.famousAthletes.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/sports" className="text-blue-600 hover:underline">← Barcha sport turlari</Link>
      </div>
    </div>
  )
}
