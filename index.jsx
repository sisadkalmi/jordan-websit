export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans bg-[url('/gritty-overlay.png')] bg-fixed bg-blend-overlay">
      <section className="bg-[url('/gritty-bg.png')] bg-cover bg-center py-20 px-8 text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply pointer-events-none"></div>
        <h1 className="text-5xl font-black text-white leading-tight relative z-10 drop-shadow-xl">
          Welcome to <span className="text-orange-400">Jordan's</span> Universe
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto relative z-10">
          Explore the journey of a hip hop artist through <span className="text-red-500">Past</span>, <span className="text-yellow-400">Present</span>, and <span className="text-green-400">Future</span>.
        </p>
      </section>

      <section className="py-16 px-6 backdrop-blur-sm bg-black/80 border-y border-gray-800">
        <h2 className="text-4xl font-bold text-orange-400 border-b-2 border-orange-400 inline-block mb-8">PAST</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <AlbumCard title="Roots" year="2019" img="/album1.jpg" />
          <AlbumCard title="City Scars" year="2020" img="/album2.jpg" />
          <AlbumCard title="Midnight Scripts" year="2021" img="/album3.jpg" />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 bg-[url('/gritty-bg.png')] bg-cover bg-blend-multiply">
        <h2 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 inline-block mb-8">PRESENT</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Jordan is currently working on a series of live freestyles, gritty documentary footage, and collaborations with underground legends.
        </p>
        <video controls className="mx-auto w-full max-w-3xl rounded-xl shadow-xl border border-yellow-400">
          <source src="/present-video.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="py-16 px-6 backdrop-blur-md bg-black/80">
        <h2 className="text-4xl font-bold text-green-400 border-b-2 border-green-400 inline-block mb-8">FUTURE</h2>
        <ul className="text-gray-300 space-y-4 text-lg">
          <li>🎤 Upcoming EP: <strong>"Street Scriptures"</strong> (Drops August 2025)</li>
          <li>📍 Tour: East India Indie Tour (September 2025)</li>
          <li>🎥 Visual Album in the works — raw, symbolic, gritty street shots with urban poetry</li>
        </ul>
      </section>

      <footer className="bg-black text-gray-500 text-center py-6 text-sm border-t border-gray-700">
        &copy; 2025 Jordan. All Rights Reserved.
      </footer>
    </main>
  );
}

function AlbumCard({ title, year, img }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300">
      <img src={img} alt={title} className="w-full h-48 object-cover grayscale contrast-125" />
      <div className="p-4">
        <h3 className="text-xl text-white font-semibold tracking-wide">{title}</h3>
        <p className="text-sm text-gray-400">Released: {year}</p>
      </div>
    </div>
  );
}
