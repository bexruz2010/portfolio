export default function Media() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Media</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-2">Mashg'ulot videolari</h2>
          <div className="space-y-4">
            {[1,2].map((i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Fotogalereya</h2>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-900" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
