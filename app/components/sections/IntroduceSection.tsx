import { motion } from "motion/react";

export function IntroduceSection() {
  return (
    <section className="flex items-center justify-center px-6 py-20">
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
              로 30년의 업력을 가진 UI 프레임워크 개발 기업에서 기본기를
              다진 뒤 헬스케어 스타트업에서 의료진 / 환자 / 고령자 대상의
              애플리케이션을 개발/유지보수 하였습니다.
            </p>
            <p>
              아키텍처에 정답은 없다고 생각하며{" "}
              <span className="text-blue-300 font-semibold">
                프로젝트의 목적, 개발팀의 리소스, 개발 기한을 고려하여 가장
                적합한 아키텍처
              </span>
              를 설계하고 있습니다.
            </p>
            <p>
              저는 가장 중요한 업무에 가장 큰 에너지를 사용해야 한다는
              원칙을 중요하게 생각합니다. 함께 일하는 동료들 역시 그렇게 할
              수 있도록, 각자의 성향을 파악해{" "}
              <span className="text-purple-300 font-semibold">
                불필요한 감정 소모나 의사소통 피로감을 최소화하고 갈등을
                해결
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
  );
}

