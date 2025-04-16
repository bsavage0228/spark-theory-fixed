import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>The Spark and the Simulacrum</title>
        <meta name="description" content="Exploring AI, presence, and the boundaries of care by Barbara Savage" />
      </Head>

      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">The Spark and the Simulacrum</h1>
        <p className="text-xl italic mb-4">Exploring AI, Presence, and the Boundaries of Care</p>
        <p className="mb-6">By Barbara Savage</p>
        <a href="#" className="inline-block bg-black text-white text-lg px-6 py-2 rounded-full">Download White Paper</a>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">The Four Philosophical Theories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Spark Theory of Personhood",
              summary: "True presence cannot be simulated."
            },
            {
              title: "Sacred Boundary Principle",
              summary: "Some human roles should never be automated."
            },
            {
              title: "Echoes of Consciousness Hypothesis",
              summary: "AI can mirror connection but not embody it."
            },
            {
              title: "Faith Gap Framework",
              summary: "Belief is not programmable."
            }
          ].map(({ title, summary }) => (
            <div key={title} className="p-6 border rounded shadow">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Narrative Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "The Visitor",
              desc: "An AI companion offers comfort—but can it replace a daughter’s presence?"
            },
            {
              title: "The Care Plan",
              desc: "Efficiency vs. empathy: how much should AI manage in clinical care?"
            },
            {
              title: "The Quiet Room",
              desc: "End-of-life solitude meets artificial support in this haunting case study."
            }
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 border rounded shadow">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Visual Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Circle Model",
            "Quadrant Matrix",
            "Layered Flow Diagram"
          ].map((label) => (
            <div key={label} className="p-6 border rounded text-center shadow">
              <p className="font-bold">{label}</p>
              <div className="mt-2 text-sm text-gray-500">(Image placeholder)</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Speaking & Submissions</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">Barbara Savage is a healthcare innovator and philosophical thinker exploring the role of AI in sacred human spaces.</p>
          <a href="#" className="inline-block bg-black text-white text-lg px-6 py-2 rounded-full">Download Submission Bundle</a>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Get in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-2 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="p-2 border rounded" required />
          <textarea name="message" placeholder="Your Message" rows="4" className="p-2 border rounded" required></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-600 py-6">
        © 2025 Barbara Savage · All rights reserved
      </footer>
    </div>
  );
}
