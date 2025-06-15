import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  { label: "Apply" },
  { label: "Get Shortlisted" },
  { label: "Interview" },
  { label: "Congrats you are TechniFyer" }
];

const Career = () => {
  return (
    <section id="career" className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-2 text-white">
          Career
        </h2>
        <p className="text-center text-xl text-cyan-300 mb-16">
          Join our Team of Forward Thinking Innovators
        </p>

        {/* Timeline */}
        <div className="relative flex flex-col items-center w-full">
          {/* Desktop */}
          <svg
            viewBox="0 0 1000 200"
            className="w-full max-w-5xl h-40 hidden md:block"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 150 Q 250 50 450 150 Q 650 250 850 150"
              stroke="#94a3b8"
              strokeWidth="4"
              fill="none"
            />
            {[
              { x: 50, y: 150 },
              { x: 250, y: 80 },
              { x: 450, y: 150 },
              { x: 850, y: 150 }
            ].map(({ x, y }, idx) => (
              <g key={steps[idx].label}>
                <circle cx={x} cy={y} r="16" fill="#0ea5e9" stroke="#f59e42" strokeWidth="4" />
                <CheckCircle
                  x={x - 12}
                  y={y - 12}
                  width={24}
                  height={24}
                  color="#fff"
                  strokeWidth={2}
                />
                <rect
                  x={x - 90}
                  y={y - 48}
                  width="180"
                  height="32"
                  rx="8"
                  fill="#020617cc"
                  style={{ filter: "drop-shadow(0 2px 8px #0002)" }}
                />
                <text
                  x={x}
                  y={y - 28}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="18"
                  fontFamily="inherit"
                  fontWeight="bold"
                >
                  {steps[idx].label}
                </text>
              </g>
            ))}
          </svg>

          {/* Mobile */}
          <svg
            viewBox="0 0 300 150"
            className="w-full max-w-xs h-32 block md:hidden"
            preserveAspectRatio="none"
          >
            <path
              d="M 20 120 Q 80 40 150 120 Q 220 200 280 120"
              stroke="#94a3b8"
              strokeWidth="3"
              fill="none"
            />
            {[
              { x: 20, y: 120 },
              { x: 80, y: 70 },
              { x: 150, y: 120 },
              { x: 280, y: 120 }
            ].map(({ x, y }, idx) => (
              <g key={steps[idx].label}>
                <circle cx={x} cy={y} r="12" fill="#0ea5e9" stroke="#f59e42" strokeWidth="3" />
                <CheckCircle
                  x={x - 9}
                  y={y - 9}
                  width={18}
                  height={18}
                  color="#fff"
                  strokeWidth={2}
                />
                <rect
                  x={x - 60}
                  y={y - 36}
                  width="120"
                  height="24"
                  rx="6"
                  fill="#020617cc"
                  style={{ filter: "drop-shadow(0 2px 8px #0002)" }}
                />
                <text
                  x={x}
                  y={y - 20}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="12"
                  fontFamily="inherit"
                  fontWeight="bold"
                >
                  {steps[idx].label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Growth Box */}
        <div className="mt-20 flex justify-center">
          <div className="bg-slate-800/80 border border-cyan-500/30 rounded-2xl shadow-lg p-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Personal and Professional Growth
            </h3>
            <p className="text-gray-300 text-lg">
              In its essence, TechnifyZ believes in expanding the team and
              nurturing them to outgrow like future leaders. We expose our
              team to multiple growth opportunities and encourage them to manage
              various responsibilities one at a time. This retains our
              organizational integrity and maintains direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
