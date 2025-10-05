import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('theme')
    const initialDark = stored ? stored === 'dark' : prefersDark
    setIsDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/60 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-blue-600">SPORTLIFE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Bosh sahifa
            </NavLink>
            <NavLink to="/sports" className={navLinkClass}>
              Sport turlari
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/media" className={navLinkClass}>
              Media
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Xizmatlar
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Kontakt
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center rounded-md border border-gray-200/60 dark:border-gray-800/80 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

