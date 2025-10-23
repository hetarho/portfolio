import type { Route } from "./+types/home";
import { motion, useScroll, useTransform } from "motion/react";
import Prism from "../components/Prism";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이해람 | Frontend Engineer" },
    {
      name: "description",
      content: "Product-focused Frontend Engineer with 6 years of experience",
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
                코드를 넘어,{" "}
                <span className="text-purple-400 font-semibold">
                  사람을 위한 프로덕트
                </span>
                를 만듭니다
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
                Product Maker, Not Just a Coder
              </h2>
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                <p>
                  저는{" "}
                  <span className="text-purple-300 font-semibold">
                    '코드를 작성하는 개발자'
                  </span>
                  를 넘어,
                  <span className="text-blue-300 font-semibold">
                    {" "}
                    '프로덕트를 만드는 사람'
                  </span>
                  이라는 정체성으로 일합니다.
                </p>
                <p>
                  저의 모든 실행 동기는{" "}
                  <span className="text-purple-300 font-semibold">'사람'</span>
                  에 대한 관심에서 출발합니다. 함께 일하는 동료의 문제를
                  해결하고, 실제 사용자의 경험을 개선하는 것에 집중합니다.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <h3 className="text-xl font-semibold text-white">
                        Developer Experience
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-5">
                      복잡한 모노레포 환경에서 FSD 아키텍처 도입을 주도하여 개발
                      병목을 해결
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <h3 className="text-xl font-semibold text-white">
                        User Experience
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-5">
                      고령자 대상 앱 개발 시 현장 리서치를 수행하여 핵심 사용성
                      문제를 발굴 및 개선
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Case Study 1 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-purple-400 font-mono text-sm tracking-wider">
                CASE STUDY 01
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Maximizing Team Productivity through Developer Experience
              </h2>
              <p className="text-xl text-gray-300">
                동료의 개발 경험(DX) 개선을 통한 팀 생산성 극대화
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* The Motivation */}
              <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  The Motivation
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  <span className="text-white font-semibold">
                    "개발도 사람이 하는 일입니다."
                  </span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  저는 개발자의 불필요한 에너지 소모가 곧 프로덕트의 품질 저하로
                  이어진다고 생각했습니다. 당시 React/Flutter 모노레포 환경은
                  잦은 병합 충돌과 명확한 규칙이 없는 AI 코드 생성으로 인해,
                  팀원들이 중요한 비즈니스 로직이 아닌 부수적인 문제에 과도한{" "}
                  <span className="text-purple-300 font-semibold">
                    인지적 부담(Cognitive Load)
                  </span>
                  을 겪고 있었습니다.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  저는 팀원들이 이러한 마찰에 에너지를 쏟는 대신,{" "}
                  <span className="text-blue-300 font-semibold">
                    '가장 가치 있는 일'
                  </span>
                  에만 집중할 수 있는 환경을 만드는 것을 목표로 삼았습니다.
                </p>
              </motion.div>

              {/* My Action */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  My Action
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-blue-400">▸</span>
                      FSD Architecture Implementation
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-6">
                      기존의 역할 중심 아키텍처가 잦은 충돌의 원인임을 진단,
                      기능 중심의{" "}
                      <span className="text-blue-300 font-semibold">
                        FSD(Feature-Sliced Design) 아키텍처
                      </span>{" "}
                      도입을 주도했습니다. 또한{" "}
                      <span className="text-purple-300 font-semibold">
                        '설계 우선 개발'
                      </span>{" "}
                      프로세스를 정립하여 충돌 지점을 사전에 최소화했습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-blue-400">▸</span>
                      AI Development Standards
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-6">
                      FSD의 각 레이어(shared, entities 등)별로 명확한 설계
                      규칙과 AI 생성 가이드라인(
                      <span className="text-blue-300 font-semibold">
                        "AI 룰"
                      </span>
                      )을 수립하여 코드의 일관성과 예측 가능성을 높였습니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* The Result */}
              <motion.div
                className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  The Result
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/20 rounded-xl p-6 border border-emerald-500/20">
                    <div className="text-5xl font-bold text-emerald-300 mb-2">
                      80%
                    </div>
                    <div className="text-gray-300">
                      프론트엔드 병합 충돌 감소
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-xl p-6 border border-emerald-500/20">
                    <div className="text-5xl font-bold text-emerald-300 mb-2">
                      3.5x
                    </div>
                    <div className="text-gray-300">
                      AI 코드 채택률 향상 (20% → 70%)
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  개발자들이 불필요한 코드 충돌과 파편화된 규칙을 신경 쓰지
                  않고,
                  <span className="text-emerald-300 font-semibold">
                    {" "}
                    '중요한 프로덕트 개발에만 온전히 힘을 쏟을 수 있는'
                  </span>{" "}
                  개발 환경을 구축하여 팀 생산성을 극대화했습니다.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Case Study 2 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-400 font-mono text-sm tracking-wider">
                CASE STUDY 02
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Solving Core Usability Issues through Field Research
              </h2>
              <p className="text-xl text-gray-300">
                현장 리서치를 통한 핵심 사용성(UX) 문제 해결
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* The Opportunity */}
              <motion.div
                className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔍</span>
                  The Opportunity
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  <span className="text-white font-semibold">
                    "개발자의 가설을 넘어, 사용자의 현실을 마주하다."
                  </span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  고령자 대상 근감소증 앱 개발 완료 후, 복지관에 앱 설치를
                  지원하는 역할로 방문했습니다. 저는 이것을 개발팀의 가설과{" "}
                  <span className="text-amber-300 font-semibold">
                    '실제 사용자의 현실'
                  </span>
                  을 직접 검증할 수 있는 핵심 기회로 판단했습니다. 코드를 넘어
                  실제 사용자의 목소리를 듣기 위해 현장에서 즉각적인 UX 리서치를
                  주도했습니다.
                </p>
              </motion.div>

              {/* Key Findings */}
              <motion.div
                className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-rose-500/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-rose-300 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Key Findings: 가설 vs 현실
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Interaction Patterns",
                      assumption:
                        "'스크롤', '스와이프' 같은 스마트폰의 기본 조작",
                      reality:
                        "사용자는 해당 제스처 자체에 익숙하지 않아 숨겨진 콘텐츠에 전혀 접근하지 못함",
                    },
                    {
                      title: "Icon Recognition",
                      assumption:
                        "개발팀에게 '기본적인' 아이콘 (햄버거 메뉴, 톱니바퀴 설정)",
                      reality: "사용자는 그 의미를 전혀 해석하지 못함",
                    },
                    {
                      title: "Color Psychology",
                      assumption: "버튼 강조를 위한 '빨간색'",
                      reality:
                        "사용자는 '위험/경고' 신호로 인식해 절대 클릭하지 않음",
                    },
                    {
                      title: "Flow Understanding",
                      assumption: "순서가 있는 리스트 형식의 화면",
                      reality:
                        "사용자는 이를 순차적으로 진행해야 한다는 맥락을 인식하지 못함",
                    },
                    {
                      title: "Information Overload",
                      assumption: "여러 요소가 한 화면에 배치된 경우",
                      reality:
                        "사용자는 무엇을 해야 할지 몰라 압도당했으며, 로딩 스피너를 버튼으로 오인해 계속 클릭",
                    },
                  ].map((finding, idx) => (
                    <div
                      key={idx}
                      className="bg-black/20 rounded-xl p-5 border border-rose-500/10"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {finding.title}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex gap-3">
                          <span className="text-gray-400 shrink-0">가설:</span>
                          <span className="text-gray-300">
                            {finding.assumption}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-rose-300 shrink-0">현실:</span>
                          <span className="text-rose-200">
                            {finding.reality}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* The Result */}
              <motion.div
                className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-violet-300 mb-6 flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  The Result
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/20 rounded-xl p-6 border border-red-500/20">
                      <div className="text-sm font-mono text-red-400 mb-2">
                        BEFORE
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• 스크롤이 필요한 긴 화면</li>
                        <li>• 의미 전달이 안 되는 아이콘 버튼</li>
                        <li>• 숨겨진 네비게이션</li>
                        <li>• 암묵적인 사용자 흐름</li>
                      </ul>
                    </div>
                    <div className="bg-black/20 rounded-xl p-6 border border-emerald-500/20">
                      <div className="text-sm font-mono text-emerald-400 mb-2">
                        AFTER
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• 한 화면에 모든 정보 표시</li>
                        <li>• 아이콘 + 텍스트 레이블 병기</li>
                        <li>• 명시적인 '다음' 버튼 배치</li>
                        <li>• 단계별 명확한 가이드</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    기술 중심의 '세련된 UI'가 아닌, 사용자 중심의{" "}
                    <span className="text-violet-300 font-semibold">
                      '명확하고 쉬운 UI'
                    </span>
                    로 제품을 전면 개선하여 고령 사용자의 앱 접근성을 실질적으로
                    높였습니다.
                  </p>
                  <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-500/20">
                    <p className="text-white font-semibold text-lg">
                      단순히 버그를 고치는 개발자가 아닌, 사용자의 문제를 찾아
                      해결하는{" "}
                      <span className="text-violet-300">'프로덕트 메이커'</span>
                      로서의 역할을 완수했습니다.
                    </p>
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
                Let's Build Something Great Together
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                기술을 통해 동료의 성과와 사용자의 경험을 실질적으로 향상시키는
                개발자입니다.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  GitHub
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
