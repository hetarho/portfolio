import { useState, useEffect, useRef } from "react";
import type { Route } from "./+types/presentation";
import { motion, AnimatePresence } from "motion/react";
import Prism from "../components/Prism";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이해람 | 프레젠테이션" },
    {
      name: "description",
      content: "이해람 - 사람을 위한 개발자",
    },
  ];
}

const slides = [
  // Slide 1: 인트로
  {
    id: "intro",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6">
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          이해람
        </motion.h1>
        <motion.p
          className="text-3xl md:text-4xl text-purple-300 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          사람을 위한 개발
        </motion.p>
        <motion.div
          className="mt-12 text-gray-300 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>6년차 Frontend Engineer</p>
        </motion.div>
      </div>
    ),
  },
  // Slide 2: 핵심 가치
  {
    id: "value",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💡 핵심 가치
        </motion.h2>
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8">
            <span className="text-purple-400 font-bold">사람에 대한 관심</span>에서 시작하여,
            <br />
            <span className="text-blue-400 font-bold">함께 일하는 동료</span>를 위한 개발 문화를 만들고,
            <br />
            <span className="text-pink-400 font-bold">실제 사용자</span>의 경험을 개선합니다.
          </p>
          <motion.p
            className="text-2xl md:text-3xl text-center text-purple-300 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            세상을 이롭게하는 프로덕트를 만들고싶습니다.
          </motion.p>
        </motion.div>
      </div>
    ),
  },
  // Slide 3: 기술 스택
  {
    id: "skills",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Tech Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Dart", "React", "Next.js", "Flutter"].map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg text-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Libraries & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["Tanstack-Query", "Tanstack-Router", "Zustand", "Bloc", "tailwind", "pnpm", "gRPC", "Firebase"].map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  // Slide 4: 경력
  {
    id: "experience",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🏢 Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-400 mb-4">Dyphi</h3>
            <p className="text-xl text-gray-300 mb-3">2022.07 - 현재</p>
            <p className="text-lg text-gray-400 mb-4">저속 노화 헬스케어 스타트업</p>
            <div className="space-y-2 text-gray-300">
              <p>• FE Lead</p>
              <p>• Frontend 아키텍처 설계</p>
              <p>• Next.js / React / Flutter</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-4">SMIT</h3>
            <p className="text-xl text-gray-300 mb-3">2020.02 - 2022.06</p>
            <p className="text-lg text-gray-400 mb-4">UI프레임워크 개발 기업</p>
            <div className="space-y-2 text-gray-300">
              <p>• 주임</p>
              <p>• 레거시 마이그레이션</p>
              <p>• 자사 프레임워크 개발</p>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  // Slide 5: SMIT - 개발자 경험의 시작
  {
    id: "project1",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-purple-400 text-sm font-semibold mb-2">2020.02 - 2022.06</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SMIT
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-8">
            개발자 경험(DX)의 시작
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            대규모 레거시 시스템 전환을 주도하며 외부 개발팀을 기술 지원.<br />
            <span className="text-white font-semibold">재사용성, 유지보수성, 확장성</span>을 고려한<br />
            고품질 컴포넌트 설계의 중요성을 깨달았습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 6: Flutter 첫 도전
  {
    id: "project2",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-blue-400 text-sm font-semibold mb-2">2022.08 - 2022.12</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MyVivache MVP, PNUS-BUS
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            언어/프레임워크 독립적인 빠른 기술 습득
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            JavaScript에서 Dart/Flutter로 <span className="text-white font-semibold">기술 스택 전환</span>이라는 도전.<br />
            성장에 대한 의지로 핵심 원리를 빠르게 파악하여 MVP를 성공적으로 완수.<br />
            언어/프레임워크 독립적인 개발 역량을 스스로 입증했습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 7: MyVivache - 기술 너머의 가치
  {
    id: "project3",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-green-400 text-sm font-semibold mb-2">2023.01 - 2023.10</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MyVivache
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-300 mb-8">
            기술 너머의 '가치' 발견
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            복지관 현장에서 어르신들의 피드백을 직접 받으며<br />
            코드가 <span className="text-white font-semibold">실제 사용자의 삶에 긍정적인 영향</span>을 미친다는 것을 느낄 수 있었습니다.<br />
            사람을 이롭게 하는 프로덕트가 제 꿈이 되었습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 8: 여러 헬스케어 프로덕트들
  {
    id: "project4",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-pink-400 text-sm font-semibold mb-2">2023 - 2024</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            화푸리, SDM, MyVivache Web
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-8">
            아키텍처 전략 및 협업 체계 구축
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            여러 헬스케어 프로덕트를 리드하며 장기적 성장을 위한 아키텍처 전략에 집중.<br />
            <span className="text-white font-semibold">BLoC, Clean Architecture, 모노레포</span>를 도입하여<br />
            코드 복잡성 관리와 효율적인 협업 체계를 구축했습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 9: SarcoFit v0 - 실용주의로의 전환
  {
    id: "project5",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-orange-400 text-sm font-semibold mb-2">2024.08 - 2024.12</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SarcoFit v0
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-8">
            실용주의로의 전환
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Clean Architecture 도입 후 과도한 추상화로 개발 속도 저하를 경험.<br />
            <span className="text-white font-semibold">기술 도입은 프로덕트 성공과 비즈니스 가치 창출에 기여해야 한다</span>는<br />
            실용주의적 교훈을 얻었습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 10: SarcoFit - 전략적 기술 도입
  {
    id: "project6",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-purple-400 text-sm font-semibold mb-2">2024.10 - 현재</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SarcoFit
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-8">
            전략적 기술 도입과 정합성 극대화
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">FSD로 응집도 향상, FSM으로 안정성 확보</span><br />
            DDD/BDD로 비즈니스 요구사항과 코드 간의 정합성을 극대화하며<br />
            개발 생산성과 품질을 동시에 확보했습니다.
          </p>
        </motion.div>
      </div>
    ),
  },
  // Slide 11: 마무리 & Contact
  {
    id: "contact",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            감사합니다
          </h2>
          <p className="text-3xl text-gray-300 mb-12">
            기술을 통해 <span className="text-purple-400 font-bold">동료</span>와{" "}
            <span className="text-blue-400 font-bold">사용자</span>의 문제를 해결하여
            <br />
            함께 가치있는 프로덕트를 만들고 싶습니다.
          </p>
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4 text-xl text-gray-300">
              <p>
                <span className="text-purple-400">Email:</span> sunlikeperson@gmail.com
              </p>
              <p>
                <span className="text-blue-400">Phone:</span> 010-6776-7903
              </p>
              <p>
                <span className="text-pink-400">GitHub:</span>{" "}
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
          </motion.div>
        </motion.div>
      </div>
    ),
  },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isThrottledRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isThrottledRef.current) return;
      
      if (Math.abs(e.deltaY) > 10) {
        isThrottledRef.current = true;
        
        if (e.deltaY > 0) {
          setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
        } else if (e.deltaY < 0) {
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => {
          isThrottledRef.current = false;
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
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

      {/* Slide Content */}
      <div className="relative z-10 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {slides[currentSlide].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-purple-500 w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Hint */}
      {currentSlide === 0 && (
        <motion.div
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>← → 키 또는 마우스 휠로 이동</p>
        </motion.div>
      )}

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-20 text-white/50 text-lg">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Home Link */}
      <a
        href="/"
        className="fixed top-8 left-8 z-20 text-white/70 hover:text-white transition-colors text-lg"
      >
        ← Home
      </a>
    </div>
  );
}

