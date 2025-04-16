import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>The Spark and the Simulacrum</title>
        <meta name="description" content="Exploring AI, presence, and the boundaries of care by Barbara Savage" />
      </Head>

      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-3">The Spark and the Simulacrum</h1>
        <p className="text-2xl italic mb-4 text-gray-600">Exploring AI, Presence, and the Boundaries of Care</p>
        <p className="text-lg mb-6 text-gray-500">By Barbara Savage</p>
        <a href="#" className="inline-block bg-black text-white text-lg px-8 py-3 rounded-full shadow hover:bg-gray-800 transition">Download White Paper</a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Barbara Savage · All rights reserved
      </footer>
    </div>
  );
}
