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
    period: "2020.02 - 2022.06",
    title: "SMIT",
    subtitle: "UI 프레임워크 기반 레거시 시스템 전환 및 통합",
    description: "첫 직장에서 자체 개발 UI 프레임워크를 활용한 대규모 레거시 시스템 전환을 주도했습니다. 수백 개 화면 마이그레이션과 프레임워크 표준 정립을 통해 외부 개발팀 기술 지원을 담당했습니다. 이 경험은 재사용성, 유지보수성, 확장성을 고려한 고품질 컴포넌트 설계와 개발자 경험(DX)의 중요성을 깨닫는 계기가 되었습니다.",
    tags: ["UI 프레임워크", "레거시 마이그레이션", "컴포넌트 설계", "DX"],
    color: "purple",
  },
  {
    period: "2022.08 - 2022.12",
    title: "MyVivache MVP, PNUS-BUS",
    subtitle: "언어/프레임워크 독립적인 빠른 기술 습득",
    description: "이직 후 JavaScript 기반에서 Dart 언어 및 Flutter 프레임워크라는 완전히 새로운 스택으로 100% 전환해야 했습니다. 이는 큰 도전이었지만, 성장에 대한 강한 의지로 빠르게 학습하여 MVP 프로젝트 요구사항을 성공적으로 만족시켰습니다. 이 경험을 통해 새로운 기술의 핵심 원리를 빠르게 파악하고 적용하는 언어/프레임워크 독립적인 개발 역량을 스스로 입증했습니다.",
    tags: ["기술 스택 전환", "빠른 학습", "선언적 UI 이해", "독립적 개발 역량"],
    color: "blue",
  },
  {
    period: "2023.01 - 2023.10",
    title: "MyVivache",
    subtitle: "기술을 넘어, 사람을 이롭게 하는 가치",
    description: "이 앱을 개발하며 고급 모바일 기능 구현이라는 기술적 도전을 했지만, 제게 더 큰 의미는 기술 너머의 '가치'를 발견한 것입니다. 복지관 협업을 통해 현장 피드백을 받았을 때, 코드가 실제 사용자 삶에 긍정적인 영향을 미친다는 것을 깨달았습니다. 이때부터 사람을 이롭게 하는 가치 있는 프로덕트를 만드는 것이 제 개발자로서의 명확한 꿈이 되었습니다.",
    tags: ["현장 피드백", "삶의 긍정적 영향", "가치 있는 프로덕트", "개발자의 꿈"],
    color: "green",
  },
  {
    period: "2023 - 2024",
    title: "화푸리, SDM, MyVivache Web",
    subtitle: "아키텍처 및 협업 체계 구축",
    description: "여러 헬스케어 프로덕트 개발을 리드하며, 단순히 기능 구현을 넘어 프로덕트의 장기적 성장을 위한 아키텍처 전략에 집중했습니다. BLoC 패턴, Clean Architecture, 모노레포 전략 등을 도입하여 코드 복잡성 관리와 팀 간의 효율적인 협업 체계를 구축하는 데 기여했습니다.",
    tags: ["아키텍처 전략", "BLoC", "모노레포", "협업 체계"],
    color: "pink",
  },
  {
    period: "2024.08 - 2024.12",
    title: "SarcoFit v0",
    subtitle: "실용주의로의 전환을 이끈 아키텍처 실패 분석",
    description: "메인 프로젝트 초기, 코드 품질을 위한 Clean Architecture 도입을 주도했으나, 과도한 추상화로 인해 불필요한 오버헤드와 개발 속도 저하를 경험했습니다. 이 실패를 통해 '기술 도입은 프로덕트의 성공과 비즈니스 가치 창출에 기여해야 한다'는 실용주의적 교훈을 얻고, 아키텍처 접근 방식을 재정립하는 계기가 되었습니다.",
    tags: ["아키텍처 실패 분석", "실용주의", "기술 부채", "비즈니스 가치"],
    color: "orange",
  },
  {
    period: "2024.10 - 현재",
    title: "SarcoFit",
    subtitle: "프로덕트 성장을 위한 전략적 기술 도입 및 정립",
    description: "실패를 바탕으로 FSD(Feature-Sliced Design) 아키텍처를 도입하여 대규모 코드 베이스의 응집도를 높이고, FSM으로 복잡한 상태 로직의 안정성을 확보했습니다. 또한, DDD/BDD 방법론을 정립하여 비즈니스 요구사항과 코드 간의 정합성을 극대화하며 개발 생산성과 품질을 동시에 확보했습니다.",
    tags: ["FSD", "FSM", "DDD/BDD", "정합성", "전략적 기술 도입"],
    color: "purple",
  },
];

const colorClasses = {
  purple: {
    period: "text-purple-400",
    subtitle: "text-purple-300",
    tag: "bg-purple-500/20 text-purple-200",
  },
  blue: {
    period: "text-blue-400",
    subtitle: "text-blue-300",
    tag: "bg-blue-500/20 text-blue-200",
  },
  green: {
    period: "text-green-400",
    subtitle: "text-green-300",
    tag: "bg-green-500/20 text-green-200",
  },
  pink: {
    period: "text-pink-400",
    subtitle: "text-pink-300",
    tag: "bg-pink-500/20 text-pink-200",
  },
  orange: {
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
              핵심 가치
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
              Tech Stack
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
              Experience
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
              프로젝트 여정
            </motion.h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    <div className={`text-sm font-semibold mb-3 ${colorClasses[project.color as keyof typeof colorClasses].period}`}>
                      {project.period}
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <h4 className={`text-2xl font-semibold mb-6 ${colorClasses[project.color as keyof typeof colorClasses].subtitle}`}>
                      {project.subtitle}
                    </h4>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-lg text-base ${colorClasses[project.color as keyof typeof colorClasses].tag}`}
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
