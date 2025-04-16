import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>The Spark and the Simulacrum</title>
        <meta
          name="description"
          content="Exploring AI, presence, and the boundaries of care by Barbara Savage"
        />
      </Head>

      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">The Spark and the Simulacrum</h1>
        <p className="text-xl italic mb-4">
          Exploring AI, Presence, and the Boundaries of Care
        </p>
        <p className="mb-6">By Barbara Savage</p>
        <a
          href="#"
          className="inline-block bg-black text-white text-lg px-6 py-2 rounded-full"
        >
          Download White Paper
        </a>
      </section>
    </div>
  );
}
