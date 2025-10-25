import type { Route } from "./+types/home";
import { motion, useScroll, useTransform } from "motion/react";
import Prism from "../components/Prism";
import { IntroduceSection } from "../components/sections/IntroduceSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import TextType from "~/components/TextTyped";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이해람 | Frontend Engineer" },
    {
      name: "description",
      content: "6년차 프론트엔드 엔지니어 - 사람을 위한 프로덕트를 만듭니다",
    },
  ];
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgDarken = useTransform(scrollY, [0, 500], [0, 0.8]);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Gradient Background */}
      <div className="fixed inset-0 h-screen w-screen bg-black">
        <Prism
          animationType="rotate"
          timeScale={0.35}
          height={5}
          baseWidth={7}
          scale={2}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
        <motion.div
          className="bg-black h-full w-full fixed inset-0"
          style={{
            opacity: bgDarken,
          }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              style={{
                opacity: heroOpacity,
                y: heroY,
              }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">
                Frontend Engineer
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-bold font-jen">
                이해람
              </p>

              <p className="text-xl md:text-2xl text-purple-300 max-w-2xl mx-auto leading-relaxed">
                <TextType
                  text={"사람을 위한 프로덕트를 만드는 프론트엔드 개발자"}
                  showCursor={false}
                  className="text-purple-400 font-semibold"
                />
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <IntroduceSection />

        {/* Tech Stack Section */}
        <SkillsSection />

        {/* Projects Overview */}
        <ProjectsSection />

        {/* Footer */}
        <section className="py-20 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                사람을 위한 프로덕트를 함께 만들어갈 개발자입니다
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:sunlikeperson@gmail.com"
                  className="px-8 py-3 bg-linear-to-br from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  sunlikeperson@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-20">
              <span className="text-5xl font-bold tracking-tighter bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {'<Human />'}
              </span>
            </div>
            <p className="text-gray-400 mt-12 text-sm">
              © 2025 Haeram Lee. Built with React Router 7
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
