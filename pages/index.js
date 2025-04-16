import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>The Spark and the Simulacrum</title>
        <meta name="description" content="Exploring AI, presence, and the boundaries of care by Barbara Savage" />
      </Head>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-bold mb-3">The Spark and the Simulacrum</h1>
        <p className="text-2xl italic mb-4 text-gray-600">Exploring AI, Presence, and the Boundaries of Care</p>
        <p className="text-lg mb-6 text-gray-500">By Barbara Savage</p>
        <a href="#" className="inline-block bg-black text-white text-lg px-8 py-3 rounded-full shadow hover:bg-gray-800 transition">Download White Paper</a>
      </section>

      {/* Theories Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">The Four Philosophical Theories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
            <div key={title} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Narrative Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <div key={title} className="p-6 border border-gray-200 rounded-lg shadow bg-white">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visuals Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Visual Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Circle Model",
            "Quadrant Matrix",
            "Layered Flow Diagram"
          ].map((label) => (
            <div key={label} className="p-6 border border-gray-200 rounded-lg text-center bg-white shadow">
              <p className="font-semibold text-lg mb-2">{label}</p>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm italic">Image placeholder</div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker & Submissions */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Speaking & Submissions</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-6 text-gray-600 text-lg">Barbara Savage is a healthcare innovator and philosophical thinker exploring the role of AI in sacred human spaces.</p>
          <a href="#" className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition">Download Submission Bundle</a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Get in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 border border-gray-300 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded" required />
          <textarea name="message" placeholder="Your Message" rows="4" className="p-3 border border-gray-300 rounded" required></textarea>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Send Message</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Barbara Savage · All rights reserved
      </footer>
    </div>
  );
}
