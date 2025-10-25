import { motion } from "motion/react";
import { useState } from "react";

interface CodeBlock {
  title: string;
  subtitle?: string;
  code: string;
  language?: string;
  highlightLines?: number[];
  label?: string;
  labelIcon?: string;
  labelColor?: string;
}

interface CodeComparisonProps {
  left: CodeBlock;
  right: CodeBlock;
  conflictDescription?: string;
}

export function CodeComparison({
  left,
  right,
  conflictDescription,
}: CodeComparisonProps) {
  const [activeTab, setActiveTab] = useState<"left" | "right">("left");

  const getColorClasses = (color?: string, isActive?: boolean) => {
    const baseColors: Record<
      string,
      { bg: string; text: string; border: string }
    > = {
      red: {
        bg: "bg-red-500/20",
        text: "text-red-300",
        border: "border-red-500/30",
      },
      green: {
        bg: "bg-green-500/20",
        text: "text-green-300",
        border: "border-green-500/30",
      },
      orange: {
        bg: "bg-orange-500/20",
        text: "text-orange-300",
        border: "border-orange-500/30",
      },
      blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-300",
        border: "border-blue-500/30",
      },
    };

    const colors = baseColors[color || "red"];
    if (isActive) {
      return `${colors.bg} ${colors.text} border ${colors.border}`;
    }
    return "bg-gray-800 text-gray-400";
  };

  const renderCode = (codeBlock: CodeBlock) => {
    const lines = codeBlock.code.trim().split("\n");

    return (
      <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
        {/* Header */}
        <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-200">
              {codeBlock.title}
            </div>
            {codeBlock.subtitle && (
              <div className="text-xs text-gray-500">{codeBlock.subtitle}</div>
            )}
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono">
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = codeBlock.highlightLines?.includes(
                lineNumber
              );

              return (
                <div
                  key={index}
                  className={`flex ${
                    isHighlighted
                      ? "bg-yellow-500/10 border-l-2 border-yellow-500"
                      : ""
                  }`}
                >
                  <span className="select-none text-gray-600 pr-4 pl-2 text-right min-w-12">
                    {lineNumber}
                  </span>
                  <code
                    className={`flex-1 ${
                      isHighlighted ? "text-yellow-200" : "text-gray-300"
                    }`}
                  >
                    {line || " "}
                  </code>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {conflictDescription && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-red-400 text-xl">⚠️</span>
            <div className="flex-1">
              <div className="text-red-400 font-semibold mb-1">
                Conflict Scenario
              </div>
              <div className="text-gray-300 text-sm">{conflictDescription}</div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: Tabs */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("left")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${getColorClasses(
              left.labelColor,
              activeTab === "left"
            )}`}
          >
            {left.labelIcon || "❌"} {left.label || "Before"}
          </button>
          <button
            onClick={() => setActiveTab("right")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${getColorClasses(
              right.labelColor,
              activeTab === "right"
            )}`}
          >
            {right.labelIcon || "✅"} {right.label || "After"}
          </button>
        </div>

        {activeTab === "left" ? renderCode(left) : renderCode(right)}
      </div>

      {/* Desktop: Side by Side */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">{left.labelIcon || "❌"}</span>
            <span
              className={`text-lg font-bold ${
                left.labelColor === "orange"
                  ? "text-orange-300"
                  : left.labelColor === "green"
                    ? "text-green-300"
                    : left.labelColor === "blue"
                      ? "text-blue-300"
                      : "text-red-300"
              }`}
            >
              {left.label || "BEFORE"}
            </span>
          </div>
          {renderCode(left)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">{right.labelIcon || "✅"}</span>
            <span
              className={`text-lg font-bold ${
                right.labelColor === "orange"
                  ? "text-orange-300"
                  : right.labelColor === "green"
                    ? "text-green-300"
                    : right.labelColor === "blue"
                      ? "text-blue-300"
                      : "text-red-300"
              }`}
            >
              {right.label || "AFTER"}
            </span>
          </div>
          {renderCode(right)}
        </motion.div>
      </div>
    </div>
  );
}

