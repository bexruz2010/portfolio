export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-xl border border-gray-200/60 dark:border-gray-800/80 p-4 hover:shadow-md transition">
            <div className="aspect-video rounded-md bg-gray-100 dark:bg-gray-900 mb-3" />
            <h3 className="font-semibold">Maqola sarlavhasi {i}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Olimpiada, Chempionatlar va sog'lom turmush haqida maqolalar.</p>
          </article>
        ))}
      </div>
    </div>
  )
}
