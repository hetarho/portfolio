import { motion } from "motion/react";
import { CodeComparison } from "../CodeComparison";

export function ProjectsSection() {
  return (
    <section className="flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-5xl mx-auto w-full min-w-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="space-y-8 min-w-0">
          {/* SarcoFit */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
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

            {/* Problem Statement */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-red-400 mb-4">
                🚨 Problem: 모노레포 병합 지옥
              </h4>
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 min-w-0">
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        DDD 기반 개발 전략의 부작용
                      </p>
                      <p className="text-sm">
                        User Story별로 Fractal Cell을 나누고 브랜치를
                        분리하여 개발 후 develop 브랜치로 병합
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        역할 중심 아키텍처의 한계
                      </p>
                      <p className="text-sm">
                        components/, pages/, hooks/ 등 역할별 폴더 구조로
                        인해 여러 팀원이 동일한 디렉토리를 수정하며 충돌
                        발생
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-950/50 rounded-lg p-4 mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-red-300">
                          10+
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          2주 스프린트당 브랜치
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-300">
                          10+
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          분(1회 병합 시간)
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-300">
                          수십개
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          스프린트당 Conflict
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-300">
                          높음
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          개발자 인지 부담
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Code Example: Conflict Scenario */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                💥 실제 Conflict 발생 사례
              </h4>
              <CodeComparison
                conflictDescription="개발자 A와 B가 동시에 같은 파일(components/ExerciseCard.tsx)을 수정하여 merge 시 conflict 발생"
                left={{
                  title: "components/ExerciseCard.tsx",
                  subtitle: "개발자 A의 브랜치 (feature/exercise-records)",
                  code: `export function ExerciseCard({ exercise }: Props) {
  const { data: records } = useExerciseRecords(exercise.id);
  
  return (
    <div className="card">
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      
      {/* 개발자 A가 추가한 코드 */}
      <div className="records">
        {records?.map(r => (
          <RecordItem key={r.id} record={r} />
        ))}
      </div>
    </div>
  );
}`,
                  highlightLines: [2, 9, 10, 11, 12, 13, 14],
                  label: "개발자 A",
                  labelIcon: "👨‍💻",
                  labelColor: "orange",
                }}
                right={{
                  title: "components/ExerciseCard.tsx",
                  subtitle:
                    "개발자 B의 브랜치 (feature/exercise-difficulty)",
                  code: `export function ExerciseCard({ exercise }: Props) {
  const difficulty = calculateDifficulty(exercise);
  
  return (
    <div className="card">
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      
      {/* 개발자 B가 추가한 코드 */}
      <div className="difficulty">
        <DifficultyBadge level={difficulty} />
      </div>
    </div>
  );
}`,
                  highlightLines: [2, 9, 10, 11, 12],
                  label: "개발자 B",
                  labelIcon: "👩‍💻",
                  labelColor: "orange",
                }}
              />
              <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="text-red-400 font-semibold mb-2">
                  ❌ Merge 시 발생하는 문제
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 두 개발자가 같은 파일의 같은 위치를 수정</li>
                  <li>• Git이 자동으로 merge하지 못해 수동 해결 필요</li>
                  <li>• 해결 과정에서 실수로 코드 누락 가능성</li>
                  <li>• 매 스프린트마다 반복되는 비효율</li>
                </ul>
              </div>
            </div>

            {/* FSD Solution */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                ✨ FSD 아키텍처로 해결
              </h4>
              <CodeComparison
                conflictDescription="각 개발자가 독립적인 feature 폴더에서 작업하여 conflict 없이 개발"
                left={{
                  title:
                    "features/exercise-records/ui/ExerciseRecordView.tsx",
                  subtitle: "개발자 A의 작업 영역 (격리됨)",
                  code: `// Feature: 운동 기록 조회
import { ExerciseCard } from '@/entities/exercise';
import { useExerciseRecords } from '../api/useExerciseRecords';

export function ExerciseRecordView({ exerciseId }: Props) {
  const { data: records } = useExerciseRecords(exerciseId);
  
  return (
    <div className="space-y-4">
      <ExerciseCard exerciseId={exerciseId} />
      
      <div className="records-section">
        <h4>운동 기록</h4>
        {records?.map(record => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}`,
                  highlightLines: [1, 2, 3, 10, 12, 13, 14, 15, 16, 17],
                  label: "개발자 A",
                  labelIcon: "👨‍💻",
                  labelColor: "green",
                }}
                right={{
                  title:
                    "features/exercise-difficulty/ui/ExerciseDifficultyView.tsx",
                  subtitle: "개발자 B의 작업 영역 (격리됨)",
                  code: `// Feature: 운동 난이도 표시
import { ExerciseCard } from '@/entities/exercise';
import { useDifficulty } from '../model/useDifficulty';

export function ExerciseDifficultyView({ exerciseId }: Props) {
  const { difficulty } = useDifficulty(exerciseId);
  
  return (
    <div className="space-y-4">
      <ExerciseCard exerciseId={exerciseId} />
      
      <div className="difficulty-section">
        <h4>운동 난이도</h4>
        <DifficultyBadge level={difficulty} />
        <DifficultyDescription level={difficulty} />
      </div>
    </div>
  );
}`,
                  highlightLines: [1, 3, 10, 12, 13, 14, 15],
                  label: "개발자 B",
                  labelIcon: "👩‍💻",
                  labelColor: "green",
                }}
              />
              <div className="mt-4 bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="text-green-400 font-semibold mb-2">
                  ✅ FSD 아키텍처의 장점
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 각 feature가 독립된 폴더에 격리되어 충돌 없음</li>
                  <li>
                    • ExerciseCard는 entities/에서 공유 컴포넌트로 관리
                  </li>
                  <li>
                    • User Story 1개 = Feature 1개 = 독립적인 개발 영역
                  </li>
                  <li>• 코드 리뷰 시 변경 범위가 명확해짐</li>
                </ul>
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                🏗️ FSD 레이어 구조
              </h4>
              <div className="grid md:grid-cols-2 gap-6 min-w-0">
                {/* Before */}
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">❌</span>
                    <h5 className="text-xl font-bold text-red-300">
                      BEFORE: 역할 중심
                    </h5>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-300">src/</div>
                    <div className="pl-4 text-gray-400">
                      ├── components/
                      <div className="pl-6 text-red-300">
                        ⚠️ 모든 팀원이 수정
                      </div>
                    </div>
                    <div className="pl-4 text-gray-400">
                      ├── pages/
                      <div className="pl-6 text-red-300">⚠️ 충돌 빈발</div>
                    </div>
                    <div className="pl-4 text-gray-400">
                      ├── hooks/
                      <div className="pl-6 text-red-300">⚠️ 충돌 빈발</div>
                    </div>
                    <div className="pl-4 text-gray-400">├── utils/</div>
                    <div className="pl-4 text-gray-400">└── types/</div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✅</span>
                    <h5 className="text-xl font-bold text-green-300">
                      AFTER: FSD (기능 중심)
                    </h5>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-300">src/</div>
                    <div className="pl-4 text-gray-400">
                      ├── features/
                      <div className="pl-6 text-green-300">
                        ✓ 격리된 기능 개발
                      </div>
                    </div>
                    <div className="pl-4 text-gray-400">
                      ├── widgets/
                      <div className="pl-6 text-blue-300">공통 위젯</div>
                    </div>
                    <div className="pl-4 text-gray-400">
                      ├── entities/
                      <div className="pl-6 text-purple-300">
                        순수 UI (재사용)
                      </div>
                    </div>
                    <div className="pl-4 text-gray-400">└── shared/</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                ⚙️ Solution: 개발 프로세스 개선
              </h4>
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30 min-w-0">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        스프린트 시작: 설계 우선 개발
                      </h5>
                      <p className="text-gray-300 text-sm">
                        Sprint에서 구현 할 User Stroy를 정확하게 정의 후
                        컴포넌트 설계
                      </p>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        스프린트 중: 격리된 개발
                      </h5>
                      <p className="text-gray-300 text-sm">
                        Rule: 1 User Story = 1 Feature = 1 Branch
                      </p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                        <div className="p-2 bg-blue-950/50 rounded text-center">
                          <div className="text-blue-300 font-semibold">
                            개발자 A
                          </div>
                          <div className="text-gray-400">feature-1/</div>
                        </div>
                        <div className="p-2 bg-blue-950/50 rounded text-center">
                          <div className="text-blue-300 font-semibold">
                            개발자 B
                          </div>
                          <div className="text-gray-400">feature-2/</div>
                        </div>
                        <div className="p-2 bg-blue-950/50 rounded text-center">
                          <div className="text-blue-300 font-semibold">
                            개발자 C
                          </div>
                          <div className="text-gray-400">feature-3/</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        스프린트 종료: 리팩터링 타임
                      </h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Feature 성격에 맞지 않는 코드를 적절한 레이어로 이동
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="p-2 bg-purple-950/50 rounded border border-purple-500/30">
                          <div className="text-purple-300 font-semibold">
                            → entities/
                          </div>
                          <div className="text-gray-400">순수 UI</div>
                        </div>
                        <div className="p-2 bg-blue-950/50 rounded border border-blue-500/30">
                          <div className="text-blue-300 font-semibold">
                            → widgets/
                          </div>
                          <div className="text-gray-400">공통 위젯</div>
                        </div>
                        <div className="p-2 bg-gray-900/50 rounded border border-gray-500/30">
                          <div className="text-gray-300 font-semibold">
                            → shared/
                          </div>
                          <div className="text-gray-400">유틸리티</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Improvements */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                🤖 AI 활용 생산성 향상
              </h4>
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30 min-w-0">
                <p className="text-gray-300 mb-4">
                  FSD 레이어별로 명확한 규칙을 수립하고 AI 룰을 작성하여 팀
                  전체가 활용
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-950/50 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold mb-2">
                      entities/
                    </div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• 순수 UI 컴포넌트</li>
                      <li>• Props로 데이터 수신</li>
                      <li>• 비즈니스 로직 금지</li>
                    </ul>
                  </div>
                  <div className="bg-purple-950/50 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold mb-2">
                      widgets/page/
                    </div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Data fetching 허용</li>
                      <li>• useContainer 사용</li>
                      <li>• 비즈니스 로직 포함</li>
                    </ul>
                  </div>
                  <div className="bg-purple-950/50 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold mb-2">
                      useContainer
                    </div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• 1 widget = 1 container</li>
                      <li>• Query/Mutation 관리</li>
                      <li>• 상태 관리</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                📈 Impact: 정량적 성과
              </h4>
              <div className="grid md:grid-cols-3 gap-4 min-w-0">
                <div className="bg-linear-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    80%↓
                  </div>
                  <div className="text-white font-semibold mb-1">
                    Merge Conflict 감소
                  </div>
                  <div className="text-xs text-gray-400">
                    격리된 feature 개발로 충돌 최소화
                  </div>
                </div>
                <div className="bg-linear-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    3.5x
                  </div>
                  <div className="text-white font-semibold mb-1">
                    AI 코드 채택률 향상
                  </div>
                  <div className="text-xs text-gray-400">
                    20% → 70% (명확한 규칙으로)
                  </div>
                </div>
                <div className="bg-linear-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-4xl font-bold text-purple-300 mb-2">
                    100%
                  </div>
                  <div className="text-white font-semibold mb-1">
                    개발 프로세스 준수율
                  </div>
                  <div className="text-xs text-gray-400">
                    팀 전체가 동일한 규칙 적용
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 화푸리 */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">화푸리</h3>
                <p className="text-gray-400">
                  화병 치료를 위한 디지털 치료기기(DTx)
                </p>
              </div>
              <div className="text-purple-300 font-mono mt-2 md:mt-0">
                2024.06 - 2025.08
              </div>
            </div>

            {/* Problem Statement */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-red-400 mb-4">
                🚨 Problem: 협업 파트너의 도구 미숙련
              </h4>
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 min-w-0">
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        리소스 제약 속 협업
                      </p>
                      <p className="text-sm">
                        사이드 프로젝트로 리소스가 제한된 상황에서 Figma에
                        익숙하지 않은 영상 디자이너와 앱 개발 진행
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        디자인 전달의 어려움
                      </p>
                      <p className="text-sm">
                        초기 디자인이 개발하기 어려운 형태로 전달되어 반복적인
                        수정 필요
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                ✨ 동료 성장을 돕는 협업 방식
              </h4>
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30 min-w-0">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        심리적 안전감 제공
                      </h5>
                      <p className="text-gray-300 text-sm">
                        "어떻게 주셔도 개발할 수 있으니 괜찮아요"라며 디자이너가
                        도전할 수 있도록 동기부여
                      </p>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        긍정적 피드백 방식
                      </h5>
                      <p className="text-gray-300 text-sm mb-2">
                        "이렇게 하면 안 돼요" 대신 "이렇게 해주시면 개발이 더
                        수월해요"로 구체적 개선 방향 제시
                      </p>
                      <div className="bg-blue-950/50 rounded-lg p-3 text-xs">
                        <div className="text-blue-300 mb-1">예시:</div>
                        <div className="text-gray-400">
                          ❌ "컴포넌트가 너무 복잡해서 개발이 어려워요"
                        </div>
                        <div className="text-green-400 mt-1">
                          ✅ "반복되는 요소를 컴포넌트로 만들어주시면 개발이
                          빨라져요. 이런 식으로요..."
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        UI/UX 공동 토의
                      </h5>
                      <p className="text-gray-300 text-sm">
                        디자이너와 활발히 소통하며 함께 앱의 사용자 경험을
                        개선
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                📈 Impact: 상호 성장
              </h4>
              <div className="grid md:grid-cols-3 gap-4 min-w-0">
                <div className="bg-linear-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    100%
                  </div>
                  <div className="text-white font-semibold mb-1">
                    일정 준수율
                  </div>
                  <div className="text-xs text-gray-400">
                    매달 정기 회의 일정 모두 달성
                  </div>
                </div>
                <div className="bg-linear-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    50%↓
                  </div>
                  <div className="text-white font-semibold mb-1">
                    디자인 피드백 감소
                  </div>
                  <div className="text-xs text-gray-400">
                    6개월 후 디자이너의 Figma 숙련도 향상
                  </div>
                </div>
                <div className="bg-linear-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-4xl font-bold text-purple-300 mb-2">
                    ↑↑
                  </div>
                  <div className="text-white font-semibold mb-1">
                    UI/UX 역량 향상
                  </div>
                  <div className="text-xs text-gray-400">
                    개발자의 디자인 감각과 지식 성장
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MyVivache */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
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

            {/* Problem Statement */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-red-400 mb-4">
                🚨 Problem: 불명확한 아키텍처
              </h4>
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 min-w-0">
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        개발 철학의 부재
                      </p>
                      <p className="text-sm">
                        명확한 아키텍처 패턴이 없어 개발자마다 비즈니스 로직을
                        다른 위치에 작성
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        유지보수의 어려움
                      </p>
                      <p className="text-sm">
                        코드의 일관성 저하로 동료 간 코드 이해와 유지보수에
                        불필요한 비용 발생
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Architecture Solution */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                🏗️ Clean Architecture 도입
              </h4>
              <div className="grid md:grid-cols-2 gap-6 min-w-0">
                {/* Before */}
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">❌</span>
                    <h5 className="text-xl font-bold text-red-300">
                      BEFORE: 비즈니스 로직 분산
                    </h5>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-950/50 rounded-lg p-3">
                      <div className="text-red-300 font-semibold mb-1">
                        문제점
                      </div>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Widget에 비즈니스 로직 혼재</li>
                        <li>• API 호출이 여러 곳에 분산</li>
                        <li>• 테스트가 어려운 구조</li>
                        <li>• 재사용성 낮음</li>
                      </ul>
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      <div>lib/</div>
                      <div className="pl-3">├── screens/</div>
                      <div className="pl-6 text-red-300">⚠️ 로직 혼재</div>
                      <div className="pl-3">└── widgets/</div>
                      <div className="pl-6 text-red-300">⚠️ API 직접 호출</div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✅</span>
                    <h5 className="text-xl font-bold text-green-300">
                      AFTER: Clean Architecture
                    </h5>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-950/50 rounded-lg p-3">
                      <div className="text-green-300 font-semibold mb-1">
                        개선점
                      </div>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• 도메인 로직과 UI 분리</li>
                        <li>• Repository 패턴으로 데이터 계층 추상화</li>
                        <li>• 테스트 용이한 구조</li>
                        <li>• 높은 재사용성</li>
                      </ul>
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      <div>lib/</div>
                      <div className="pl-3">├── domain/</div>
                      <div className="pl-6 text-green-300">✓ 비즈니스 로직</div>
                      <div className="pl-3">├── data/</div>
                      <div className="pl-6 text-blue-300">✓ Repository</div>
                      <div className="pl-3">└── presentation/</div>
                      <div className="pl-6 text-purple-300">✓ UI만</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                💡 Repository Pattern 적용
              </h4>
              <CodeComparison
                conflictDescription="데이터 소스를 추상화하여 비즈니스 로직과 데이터 계층 분리"
                left={{
                  title: "presentation/screens/exercise_screen.dart",
                  subtitle: "UI Layer - 순수하게 UI만 담당",
                  code: `class ExerciseScreen extends StatelessWidget {
  final ExerciseRepository repository;
  
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Exercise>>(
      future: repository.getExercises(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) {
          return CircularProgressIndicator();
        }
        
        return ListView.builder(
          itemCount: snapshot.data!.length,
          itemBuilder: (context, index) {
            return ExerciseCard(
              exercise: snapshot.data![index],
            );
          },
        );
      },
    );
  }
}`,
                  highlightLines: [2, 6],
                  label: "Presentation",
                  labelIcon: "🎨",
                  labelColor: "purple",
                }}
                right={{
                  title: "data/repositories/exercise_repository_impl.dart",
                  subtitle: "Data Layer - 데이터 소스 관리",
                  code: `class ExerciseRepositoryImpl implements ExerciseRepository {
  final RemoteDataSource remoteDataSource;
  final LocalDataSource localDataSource;
  
  @override
  Future<List<Exercise>> getExercises() async {
    try {
      // 원격 데이터 먼저 시도
      final exercises = await remoteDataSource.fetchExercises();
      
      // 로컬에 캐싱
      await localDataSource.cacheExercises(exercises);
      
      return exercises;
    } catch (e) {
      // 실패 시 로컬 데이터 사용
      return await localDataSource.getCachedExercises();
    }
  }
}`,
                  highlightLines: [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                  label: "Data",
                  labelIcon: "💾",
                  labelColor: "blue",
                }}
              />
            </div>

            {/* UX Research */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                🔍 주도적인 UX 리서치
              </h4>
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30 min-w-0">
                <p className="text-gray-300 mb-4">
                  어르신 복지관 방문 시 앱 설치 역할에서 더 나아가 직접 사용자
                  인터뷰 진행
                </p>
                <div className="space-y-3">
                  <div className="bg-purple-950/50 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold mb-2">
                      🗣️ 발견한 UX 이슈들
                    </div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• 아이콘의 의미를 해석하지 못함</li>
                      <li>
                        • 붉은 계열의 색상을 무조건 경고로 받아들임
                      </li>
                      <li>
                        • 버튼이 일반적인 형태와 다르면 버튼이라는 인식을 못함
                      </li>
                      <li>
                        • 순서가 있는 리스트에서 순차적으로 해야한다는 사실
                        인지 못함
                      </li>
                      <li>
                        • 버튼이 2개 이상이면 어떤 버튼을 클릭해야하는지 혼란
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-950/50 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-300 font-semibold mb-2">
                      ✅ 개선 결과
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      기획팀과 긴밀히 소통하여 고령자 친화적인 UI/UX로 개선
                    </p>
                    <a
                      href="https://www.mdpi.com/1424-8220/25/12/3674"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs underline"
                    >
                      📄 연구 결과가 논문에 기재됨 →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                📈 Impact: 개발 문화와 프로덕트 품질 향상
              </h4>
              <div className="grid md:grid-cols-2 gap-4 min-w-0">
                <div className="bg-linear-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    ✓
                  </div>
                  <div className="text-white font-semibold mb-1">
                    유지보수성 향상
                  </div>
                  <div className="text-xs text-gray-400">
                    도메인 로직과 UI 분리로 코드 이해도 증가
                  </div>
                </div>
                <div className="bg-linear-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    100%
                  </div>
                  <div className="text-white font-semibold mb-1">
                    팀 전체 적용
                  </div>
                  <div className="text-xs text-gray-400">
                    모든 팀원이 동일한 구조로 개발
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MyVivache MVP */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  MyVivache (MVP)
                </h3>
                <p className="text-gray-400">
                  고령자 대상 운동 애플리케이션 MVP 버전
                </p>
              </div>
              <div className="text-purple-300 font-mono mt-2 md:mt-0">
                2022.08 - 2022.12
              </div>
            </div>

            {/* Problem Statement */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-red-400 mb-4">
                🚨 Challenge: 미경험 기술 스택
              </h4>
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 min-w-0">
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        Flutter 경험 전무
                      </p>
                      <p className="text-sm">
                        React 기반 웹 서비스 유지보수 중, 신규 앱 프로젝트를
                        Flutter로 개발해야 하는 상황
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">→</span>
                    <div>
                      <p className="font-semibold text-white mb-1">
                        빠른 MVP 개발 필요
                      </p>
                      <p className="text-sm">
                        프로덕트 출시를 위해 단기간 내 학습과 개발을 병행해야
                        함
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                💡 기술은 프로덕트를 위한 것
              </h4>
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30 min-w-0">
                <p className="text-gray-300 mb-4 text-lg font-semibold">
                  "프로덕트의 성공을 위해서는 기술 스택이 장벽이 되어서는 안
                  된다"
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        빠른 학습
                      </h5>
                      <p className="text-gray-300 text-sm">
                        Dart 언어와 Flutter 생태계를 즉시 학습 시작. 기존 모바일
                        앱 개발 경험과 웹 개발 지식을 활용
                      </p>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        학습과 개발 병행
                      </h5>
                      <p className="text-gray-300 text-sm">
                        이론 학습과 동시에 MVP 개발을 진행하며 실전적인 문제
                        해결에 집중
                      </p>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-500/30 ml-6 h-8" />

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-blue-300 mb-2">
                        프로덕트 중심 사고
                      </h5>
                      <p className="text-gray-300 text-sm">
                        기술 자체보다 사용자와 프로덕트의 가치를 우선순위로 두고
                        개발
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Comparison */}
            <div className="mb-8 min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                🚀 Flutter 학습 여정
              </h4>
              <div className="grid md:grid-cols-3 gap-4 min-w-0">
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30">
                  <div className="text-3xl mb-3">📚</div>
                  <div className="text-orange-300 font-semibold mb-2">
                    Week 1-2
                  </div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Dart 기본 문법</li>
                    <li>• Widget 개념 이해</li>
                    <li>• 상태 관리 기초</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-3xl mb-3">🛠️</div>
                  <div className="text-blue-300 font-semibold mb-2">
                    Week 3-8
                  </div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• MVP 핵심 기능 개발</li>
                    <li>• 실전 문제 해결</li>
                    <li>• 패키지 생태계 학습</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <div className="text-3xl mb-3">🎯</div>
                  <div className="text-green-300 font-semibold mb-2">
                    Week 9-12
                  </div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• 기능 완성 및 테스트</li>
                    <li>• 고령자 UX 최적화</li>
                    <li>• 배포 준비 완료</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="min-w-0">
              <h4 className="text-2xl font-bold text-white mb-4">
                📈 Impact: 빠른 적응과 성공적인 배포
              </h4>
              <div className="grid md:grid-cols-3 gap-4 min-w-0">
                <div className="bg-linear-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    3개월
                  </div>
                  <div className="text-white font-semibold mb-1">
                    MVP 개발 완료
                  </div>
                  <div className="text-xs text-gray-400">
                    Flutter 미경험에서 출시까지
                  </div>
                </div>
                <div className="bg-linear-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-blue-300 mb-2">✓</div>
                  <div className="text-white font-semibold mb-1">
                    성공적인 배포
                  </div>
                  <div className="text-xs text-gray-400">
                    고령자 대상 앱 스토어 출시
                  </div>
                </div>
                <div className="bg-linear-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-4xl font-bold text-purple-300 mb-2">
                    💪
                  </div>
                  <div className="text-white font-semibold mb-1">
                    개발자 가치 증명
                  </div>
                  <div className="text-xs text-gray-400">
                    기술이 아닌 프로덕트 중심 사고
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

