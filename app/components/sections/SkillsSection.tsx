import { motion } from "motion/react";

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Dart"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Flutter",
                "Tanstack-Router",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              State Management
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Zustand", "Bloc", "Tanstack-Query"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {["pnpm", "gRPC", "Firebase", "Git", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

