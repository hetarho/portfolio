import type { Route } from "./+types/home";
import { motion } from "motion/react";
import Prism from "../components/Prism";
import { Link } from "react-router";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이해람 | Frontend Engineer" },
    {
      name: "description",
      content: "6년차 프론트엔드 엔지니어 - 사람을 위한 프로덕트를 만듭니다",
    },
  ];
}

const projects = [
  {
    emoji: "🧑‍💻",
    period: "2020.02 - 2022.06",
    title: "SMIT",
    subtitle: "개발자 경험(DX)의 시작",
    description: "대규모 레거시 시스템 전환을 주도하며 외부 개발팀을 기술 지원. 재사용성, 유지보수성, 확장성을 고려한 고품질 컴포넌트 설계의 중요성을 깨달았습니다.",
    tags: ["UI 프레임워크", "레거시 마이그레이션", "컴포넌트 설계", "DX"],
    color: "purple",
  },
  {
    emoji: "📱",
    period: "2022.08 - 2022.12",
    title: "MyVivache MVP, PNUS-BUS",
    subtitle: "언어/프레임워크 독립적인 빠른 기술 습득",
    description: "JavaScript에서 Dart/Flutter로 기술 스택 전환. 성장에 대한 의지로 핵심 원리를 빠르게 파악하여 MVP를 성공적으로 완수. 언어/프레임워크 독립적인 개발 역량을 입증했습니다.",
    tags: ["기술 스택 전환", "빠른 학습", "Flutter", "독립적 개발 역량"],
    color: "blue",
  },
  {
    emoji: "❤️",
    period: "2023.01 - 2023.10",
    title: "MyVivache",
    subtitle: "기술 너머의 '가치' 발견",
    description: "복지관 현장에서 어르신들의 피드백을 직접 받으며 코드가 실제 사용자의 삶에 긍정적인 영향을 미친다는 것을 느낄 수 있었습니다. 사람을 이롭게 하는 프로덕트가 제 꿈이 되었습니다.",
    tags: ["현장 피드백", "긍정적 영향", "가치 있는 프로덕트", "개발자의 꿈"],
    color: "green",
  },
  {
    emoji: "🤝",
    period: "2023 - 2024",
    title: "화푸리, SDM, MyVivache Web",
    subtitle: "아키텍처 전략 및 협업 체계 구축",
    description: "여러 헬스케어 프로덕트를 리드하며 장기적 성장을 위한 아키텍처 전략에 집중. BLoC, Clean Architecture, 모노레포를 도입하여 코드 복잡성 관리와 효율적인 협업 체계를 구축했습니다.",
    tags: ["아키텍처 전략", "BLoC", "모노레포", "협업 체계"],
    color: "pink",
  },
  {
    emoji: "📉",
    period: "2024.08 - 2024.12",
    title: "SarcoFit v0",
    subtitle: "실용주의로의 전환",
    description: "Clean Architecture 도입 후 과도한 추상화로 개발 속도 저하를 경험. 기술 도입은 프로덕트 성공과 비즈니스 가치 창출에 기여해야 한다는 실용주의적 교훈을 얻었습니다.",
    tags: ["아키텍처 실패 분석", "실용주의", "기술 부채", "비즈니스 가치"],
    color: "orange",
  },
  {
    emoji: "✅",
    period: "2024.10 - 현재",
    title: "SarcoFit",
    subtitle: "전략적 기술 도입과 정합성 극대화",
    description: "FSD로 응집도 향상, FSM으로 안정성 확보. DDD/BDD로 비즈니스 요구사항과 코드 간의 정합성을 극대화하며 개발 생산성과 품질을 동시에 확보했습니다.",
    tags: ["FSD", "FSM", "DDD/BDD", "정합성", "전략적 기술 도입"],
    color: "purple",
  },
];

const colorClasses = {
  purple: {
    emoji: "text-purple-400",
    period: "text-purple-400",
    subtitle: "text-purple-300",
    tag: "bg-purple-500/20 text-purple-200",
  },
  blue: {
    emoji: "text-blue-400",
    period: "text-blue-400",
    subtitle: "text-blue-300",
    tag: "bg-blue-500/20 text-blue-200",
  },
  green: {
    emoji: "text-green-400",
    period: "text-green-400",
    subtitle: "text-green-300",
    tag: "bg-green-500/20 text-green-200",
  },
  pink: {
    emoji: "text-pink-400",
    period: "text-pink-400",
    subtitle: "text-pink-300",
    tag: "bg-pink-500/20 text-pink-200",
  },
  orange: {
    emoji: "text-orange-400",
    period: "text-orange-400",
    subtitle: "text-orange-300",
    tag: "bg-orange-500/20 text-orange-200",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-black">
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
        <div className="bg-black/80 h-full w-full absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
              이해람
            </h1>
            <p className="text-3xl md:text-4xl text-purple-300 font-semibold mb-8">
              사람을 위한 개발
            </p>
            <p className="text-xl text-gray-300 mb-12">
              6년차 Frontend Engineer
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/presentation"
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-semibold transition-all duration-300"
              >
                프레젠테이션 보기
              </Link>
              <Link
                to="/achievements"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 border border-white/20"
              >
                자세한 성과 보기
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 핵심 가치 */}
        <section className="py-20 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              💡 핵심 가치
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
              <p className="text-2xl text-gray-200 leading-relaxed mb-6">
                <span className="text-purple-400 font-bold">사람에 대한 관심</span>에서 시작하여,
                <br />
                <span className="text-blue-400 font-bold">함께 일하는 동료</span>를 위한 개발 문화를 만들고,
                <br />
                <span className="text-pink-400 font-bold">실제 사용자</span>의 경험을 개선합니다.
              </p>
              <p className="text-2xl text-center text-purple-300 font-semibold">
                세상을 이롭게하는 프로덕트를 만들고싶습니다.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 기술 스택 */}
        <section className="py-20 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              🛠️ Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  {["TypeScript", "Dart", "React", "Next.js", "Flutter"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg text-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Libraries & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {["Tanstack-Query", "Tanstack-Router", "Zustand", "Bloc", "tailwind", "pnpm", "gRPC"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 경력 */}
        <section className="py-20 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              🏢 Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-purple-400 mb-4">Dyphi</h3>
                <p className="text-xl text-gray-300 mb-3">2022.07 - 현재</p>
                <p className="text-lg text-gray-400 mb-4">저속 노화 헬스케어 스타트업</p>
                <div className="space-y-2 text-gray-300">
                  <p>• FE Lead</p>
                  <p>• Frontend 아키텍처 설계</p>
                  <p>• Next.js / React / Flutter</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">SMIT</h3>
                <p className="text-xl text-gray-300 mb-3">2020.02 - 2022.06</p>
                <p className="text-lg text-gray-400 mb-4">UI프레임워크 개발 기업</p>
                <div className="space-y-2 text-gray-300">
                  <p>• 주임</p>
                  <p>• 레거시 마이그레이션</p>
                  <p>• 자사 프레임워크 개발</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 프로젝트 여정 */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              📚 프로젝트 여정
            </motion.h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`text-5xl ${colorClasses[project.color as keyof typeof colorClasses].emoji}`}>
                      {project.emoji}
                    </span>
                    <div className="flex-1">
                      <div className={`text-sm font-semibold mb-2 ${colorClasses[project.color as keyof typeof colorClasses].period}`}>
                        {project.period}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <h4 className={`text-xl font-semibold mb-4 ${colorClasses[project.color as keyof typeof colorClasses].subtitle}`}>
                        {project.subtitle}
                      </h4>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded text-sm ${colorClasses[project.color as keyof typeof colorClasses].tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact
              </h2>
              <p className="text-gray-300 text-xl mb-8">
                기술을 통해 동료와 사용자의 문제를 해결하여<br />
                함께 가치있는 프로덕트를 만들고 싶습니다.
              </p>
              <div className="space-y-4 text-xl text-gray-300 mb-8">
                <p>
                  <span className="text-purple-400 font-semibold">Email:</span> sunlikeperson@gmail.com
                </p>
                <p>
                  <span className="text-blue-400 font-semibold">Phone:</span> 010-6776-7903
                </p>
                <p>
                  <span className="text-pink-400 font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/hetarho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-300 transition-colors"
                  >
                    github.com/hetarho
                  </a>
                </p>
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
