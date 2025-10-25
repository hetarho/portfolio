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
        </div>
      </motion.div>
    </section>
  );
}

