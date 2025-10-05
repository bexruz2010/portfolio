import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { sports } from '../data/sports'

export default function Sports() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sports
    return sports.filter((s) =>
      [s.name, s.brief, s.category].some((t) => t.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold">Sport turlari</h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Qidiruv: futbol, tennis..."
          className="w-full sm:w-80 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((sport) => (
          <Link
            key={sport.slug}
            to={`/sports/${sport.slug}`}
            className="rounded-lg border border-gray-200/60 dark:border-gray-800/80 overflow-hidden hover:shadow-md transition"
          >
            <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${sport.coverUrl})` }} />
            <div className="p-4">
              <div className="text-2xl">{sport.emoji}</div>
              <h3 className="mt-2 font-semibold">{sport.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{sport.brief}</p>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Hech narsa topilmadi.</p>
      )}
    </div>
  )
}
