import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-100 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: OS & DBMS Roadmaps 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-gray-900"
          >
            Master Computer Science <br />
            <span className="text-blue-600 italic">For Placements.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The all-in-one platform to master technical core subjects. Structured content,
            hand-picked questions, and real-world interview prep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <Link
              to="/register"
              className="px-8 py-4 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-700 transition-all shadow-md hover:scale-105"
            >
              Start Learning Free →
            </Link>

            <button className="px-8 py-4 bg-white border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-100 transition-all">
              Explore Topics
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- SUBJECTS SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Curriculum
              </h2>
              <p className="text-gray-500 max-w-md text-lg">
                Focus on what matters. We've condensed thousands of pages into high-signal study modules.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-300 mx-10 mb-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <SubjectCard
              className="md:col-span-7"
              icon="⚡"
              title="Data Structures & Algorithms"
              desc="From Big O to Dynamic Programming. Master the logic behind every efficient system."
              count="150+ Concepts"
            />

            <SubjectCard
              className="md:col-span-5"
              icon="⚙️"
              title="Operating Systems"
              desc="Threads, Deadlocks, and Memory management explained simply."
              count="120+ Qs"
            />

            <SubjectCard
              className="md:col-span-5"
              icon="🗄️"
              title="DBMS"
              desc="SQL optimization and Database Internals for scale."
              count="100+ Qs"
            />

            <SubjectCard
              className="md:col-span-7"
              icon="🌐"
              title="Computer Networks"
              desc="Deep dive into the protocols that power the internet."
              count="80+ Modules"
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-white border border-gray-200 shadow-xl p-12 md:p-20 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop drifting. Start preparing.
          </h2>

          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Get the exact roadmap used by students who landed offers at top companies.
          </p>

          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Create Your Profile
          </Link>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center border-t border-gray-200">
        <p className="text-gray-500 font-medium">
          © 2026 PLACEMENTPREP • BUILT FOR ENGINEERS
        </p>
      </footer>
       {/* <Footer /> */}
    </div>
  );
}

function SubjectCard({ icon, title, desc, count, className }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group bg-white border border-gray-200 shadow-sm hover:shadow-lg p-8 rounded-2xl transition-all duration-300 ${className}`}
    >
      <div className="text-3xl mb-6">{icon}</div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
        {desc}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {count}
        </span>

        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          →
        </div>
      </div>
    </motion.div>
  );
}

export default Home;