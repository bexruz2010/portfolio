import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200/60 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-blue-600">SPORTLIFE</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sport va sog'lom turmush uchun ilhom va ma'lumotlar.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tezkor havolalar</h4>
          <nav className="grid gap-1 text-sm">
            <Link className="hover:text-blue-600" to="/">Home</Link>
            <Link className="hover:text-blue-600" to="/sports">Sports</Link>
            <Link className="hover:text-blue-600" to="/blog">Blog</Link>
            <Link className="hover:text-blue-600" to="/contact">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Ijtimoiy tarmoqlar</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 grid gap-1">
            <li>Telegram</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4">
        © 2025 SPORTLIFE – All Rights Reserved.
      </div>
    </footer>
  )
}
