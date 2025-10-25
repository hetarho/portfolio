import type { Route } from "./+types/home";
import { motion, useScroll, useTransform } from "motion/react";
import Prism from "../components/Prism";

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
                사람을 위한 프로덕트를 만드는{" "}
                <span className="text-purple-400 font-semibold">
                  프론트엔드 개발자
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Introduce
              </h2>
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                <p>
                  <span className="text-purple-300 font-semibold">
                    6년차 프론트엔드 엔지니어
                  </span>
                  로 30년의 업력을 가진 UI 프레임워크 개발 기업에서 기본기를 다진 뒤 
                  헬스케어 스타트업에서 의료진 / 환자 / 고령자 대상의 애플리케이션을 
                  개발/유지보수 하였습니다.
                </p>
                <p>
                  아키텍처에 정답은 없다고 생각하며{" "}
                  <span className="text-blue-300 font-semibold">
                    프로젝트의 목적, 개발팀의 리소스, 개발 기한을 고려하여 
                    가장 적합한 아키텍처
                  </span>
                  를 설계하고 있습니다.
                </p>
                <p>
                  저는 가장 중요한 업무에 가장 큰 에너지를 사용해야 한다는 원칙을 
                  중요하게 생각합니다. 함께 일하는 동료들 역시 그렇게 할 수 있도록, 
                  각자의 성향을 파악해{" "}
                  <span className="text-purple-300 font-semibold">
                    불필요한 감정 소모나 의사소통 피로감을 최소화하고 갈등을 해결
                  </span>
                  하는 것에 강점이 있습니다.
                </p>
                <p>
                  AI는 사용하는 사람에 따라 생산성이 달라지기 때문에{" "}
                  <span className="text-blue-300 font-semibold">
                    AI 룰 작성이나 프롬프트 공유 등 AI를 활용한 팀 생산성 높이기
                  </span>
                  에 많은 고민을 합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
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

        {/* Projects Overview */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Projects
            </h2>
            <div className="space-y-8">
              {/* SarcoFit */}
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      SarcoFit
                    </h3>
                    <p className="text-gray-400">
                      근감소증 치료를 위한 디지털 치료기기(DTx)
                    </p>
                  </div>
                  <div className="text-purple-300 font-mono mt-2 md:mt-0">
                    2024.10 - 현재
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-3">
                      개발경험 개선을 통한 팀 생산성 향상
                    </h4>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <span className="text-white font-semibold">문제:</span>{" "}
                        모노레포 환경에서 잦은 conflict로 인해 팀원들이 중요한 
                        비즈니스 로직이 아닌 부수적인 문제에 과도한 인지적 부담
                      </div>
                      <div>
                        <span className="text-white font-semibold">해결:</span>{" "}
                        FSD 아키텍처 도입 및 설계 우선 개발 프로세스 수립
                      </div>
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                          <span className="text-purple-300 font-bold text-2xl">
                            80%↓
                          </span>
                          <span className="text-gray-300 text-sm ml-2">
                            Conflict 감소
                          </span>
                        </div>
                        <div className="bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                          <span className="text-purple-300 font-bold text-2xl">
                            70%
                          </span>
                          <span className="text-gray-300 text-sm ml-2">
                            AI 코드 채택률 (from 20%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-3">
                      컴포넌트 분리 규칙을 명확히하여 코드 품질 향상
                    </h4>
                    <div className="space-y-2 text-gray-300">
                      <p>
                        레이어별 명확한 규칙 수립 및 AI 룰 작성으로 팀 전체의 
                        개발 일관성 확보
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>entity: 순수 UI 컴포넌트</li>
                        <li>widget/page: Data fetching</li>
                        <li>useContainer: mutation 및 상태 관리</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 화푸리 */}
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      화푸리
                    </h3>
                    <p className="text-gray-400">
                      화병 치료를 위한 디지털 치료기기(DTx)
                    </p>
                  </div>
                  <div className="text-blue-300 font-mono mt-2 md:mt-0">
                    2024.06 - 2025.08
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">
                    동료와 함께 성장하는 개발자
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      영상 디자이너와 모바일 앱 개발을 진행하며 피그마에 익숙하지 
                      않은 디자이너를 지원하고 협업 방식을 개선
                    </p>
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                      <p className="text-white">
                        부정적 피드백 대신 구체적인 개선 방안을 제시하며 
                        디자이너의 성장을 지원. 결과적으로 6개월간 협업 후 
                        디자인 전달 방식 관련 피드백이 50% 이상 감소
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MyVivache */}
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      MyVivache
                    </h3>
                    <p className="text-gray-400">
                      고령자 대상 운동 애플리케이션
                    </p>
                  </div>
                  <div className="text-purple-300 font-mono mt-2 md:mt-0">
                    2023.01 - 2023.10
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">
                    주도적인 UX 리서치를 통한 프로덕트 품질 향상
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      어르신 복지관 현장에서 직접 사용자 인터뷰 및 UX 테스트를 
                      주도하여 고령자 친화적 UI/UX 개선
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                        <h5 className="text-white font-semibold mb-2">
                          발견한 문제
                        </h5>
                        <ul className="space-y-1 text-sm">
                          <li>• 아이콘 의미 해석 불가</li>
                          <li>• 붉은 색상을 경고로 인식</li>
                          <li>• 버튼 인식 불가</li>
                          <li>• 순차 흐름 이해 부족</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                        <h5 className="text-white font-semibold mb-2">
                          개선 결과
                        </h5>
                        <p className="text-sm">
                          기획팀과 긴밀히 소통하여 고령자 친화적인 애플리케이션 
                          완성. 연구 결과는 논문에도 기재됨
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

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
            <p className="text-gray-400 mt-12 text-sm">
              © 2025 Haeram Lee. Built with React Router 7
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
