import type { ReactNode } from 'react';
import type { SellingPointId } from './selling-points';

/* ===== Shared SVG illustrations (homepage + why-mdocs) ===== */

export function IllusOnboardingAi() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="智能助手与帮写双模式示意图"
    >
      {/* Ask panel */}
      <rect x="16" y="28" width="140" height="144" rx="12" fill="#f8fafc" stroke="#86efac" strokeWidth="2" />
      <rect x="16" y="28" width="140" height="30" rx="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <circle cx="36" cy="43" r="7" fill="#22c55e" />
      <path d="M33 43h6M36 40v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="50" y="39" width="70" height="8" rx="4" fill="#86efac" />
      <rect x="28" y="72" width="92" height="18" rx="9" fill="#ecfdf5" stroke="#86efac" />
      <rect x="48" y="100" width="88" height="18" rx="9" fill="#fff" stroke="#e2e8f0" />
      <rect x="28" y="128" width="78" height="18" rx="9" fill="#ecfdf5" stroke="#86efac" />
      <text x="86" y="162" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="600">
        Ask
      </text>

      {/* Coding / Diff panel */}
      <rect x="168" y="28" width="136" height="144" rx="12" fill="#f8fafc" stroke="#a78bfa" strokeWidth="2" />
      <rect x="168" y="28" width="136" height="30" rx="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
      <rect x="180" y="39" width="56" height="8" rx="4" fill="#c4b5fd" />
      <rect x="180" y="72" width="112" height="10" rx="2" fill="#fecaca" opacity="0.9" />
      <rect x="180" y="88" width="112" height="10" rx="2" fill="#bbf7d0" />
      <rect x="180" y="104" width="88" height="10" rx="2" fill="#bbf7d0" />
      <rect x="180" y="128" width="48" height="16" rx="6" fill="#ddd6fe" stroke="#7c3aed" />
      <rect x="236" y="128" width="48" height="16" rx="6" fill="#fff" stroke="#e2e8f0" />
      <text x="236" y="162" textAnchor="middle" fontSize="10" fill="#6d28d9" fontWeight="600">
        帮写 Diff
      </text>
    </svg>
  );
}

export function IllusKnowledgeGraph() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="知识图谱节点与关系示意图"
    >
      <rect x="12" y="16" width="296" height="168" rx="14" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="2" />

      {/* edges */}
      <path d="M160 48 L96 100" stroke="#c4b5fd" strokeWidth="2" />
      <path d="M160 48 L160 108" stroke="#a78bfa" strokeWidth="2.2" />
      <path d="M160 48 L224 100" stroke="#c4b5fd" strokeWidth="2" />
      <path d="M96 100 L64 148" stroke="#ddd6fe" strokeWidth="1.8" />
      <path d="M96 100 L120 152" stroke="#ddd6fe" strokeWidth="1.8" />
      <path d="M160 108 L160 156" stroke="#c4b5fd" strokeWidth="2" />
      <path d="M224 100 L200 152" stroke="#ddd6fe" strokeWidth="1.8" />
      <path d="M224 100 L256 148" stroke="#ddd6fe" strokeWidth="1.8" />
      <path d="M96 100 L160 108" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M224 100 L160 108" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* hub */}
      <circle cx="160" cy="48" r="16" fill="#7c3aed" />
      <circle cx="160" cy="48" r="8" fill="#ede9fe" />

      {/* mid */}
      <circle cx="96" cy="100" r="12" fill="#8b5cf6" />
      <circle cx="160" cy="108" r="13" fill="#8b5cf6" />
      <circle cx="224" cy="100" r="12" fill="#8b5cf6" />

      {/* leaves */}
      <circle cx="64" cy="148" r="8" fill="#c4b5fd" />
      <circle cx="120" cy="152" r="8" fill="#c4b5fd" />
      <circle cx="160" cy="156" r="9" fill="#a78bfa" />
      <circle cx="200" cy="152" r="8" fill="#c4b5fd" />
      <circle cx="256" cy="148" r="8" fill="#c4b5fd" />

      {/* tiny labels */}
      <rect x="138" y="28" width="44" height="10" rx="3" fill="#fff" opacity="0.92" />
      <rect x="74" y="84" width="36" height="8" rx="2" fill="#fff" opacity="0.85" />
      <rect x="210" y="84" width="36" height="8" rx="2" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export function IllusCliAgent() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Agent 开发闭环示意图"
    >
      <rect x="18" y="36" width="132" height="128" rx="10" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
      <rect x="18" y="36" width="132" height="26" rx="10" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
      <circle cx="34" cy="49" r="4" fill="#f87171" />
      <circle cx="48" cy="49" r="4" fill="#fbbf24" />
      <circle cx="62" cy="49" r="4" fill="#4ade80" />
      <text x="30" y="84" fontSize="11" fill="#4ade80" fontFamily="ui-monospace, monospace">
        $ mdocs search
      </text>
      <rect x="30" y="96" width="96" height="5" rx="2" fill="#334155" />
      <rect x="30" y="110" width="72" height="5" rx="2" fill="#334155" />
      <rect x="30" y="124" width="88" height="5" rx="2" fill="#166534" />
      <text x="30" y="150" fontSize="10" fill="#86efac" fontFamily="ui-monospace, monospace">
        ok · 3 hits
      </text>

      <path d="M162 100 L198 100" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrowCli)" />
      <defs>
        <marker id="arrowCli" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7 Z" fill="#22c55e" />
        </marker>
      </defs>

      <rect x="208" y="44" width="94" height="112" rx="14" fill="#ecfdf5" stroke="#16a34a" strokeWidth="2" />
      <circle cx="255" cy="88" r="22" fill="#fff" stroke="#16a34a" strokeWidth="2" />
      <circle cx="247" cy="84" r="3.5" fill="#16a34a" />
      <circle cx="263" cy="84" r="3.5" fill="#16a34a" />
      <path d="M246 96 Q255 104 264 96" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="226" y="122" width="58" height="8" rx="4" fill="#bbf7d0" />
      <rect x="234" y="136" width="42" height="6" rx="3" fill="#dcfce7" />
    </svg>
  );
}

export function IllusZeroDependency() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="本地数据与无外置中间件示意图"
    >
      <rect x="28" y="52" width="72" height="96" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
      <ellipse cx="64" cy="52" rx="36" ry="12" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
      <ellipse cx="64" cy="52" rx="20" ry="6" fill="#86efac" opacity="0.7" />
      <text x="64" y="112" textAnchor="middle" fontSize="12" fill="#14532d" fontWeight="700">
        SQLite
      </text>

      <rect x="120" y="64" width="64" height="76" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
      <path
        d="M132 78h20l8 10h16v40H132V78z"
        fill="#fff"
        stroke="#16a34a"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="140" y="100" width="28" height="5" rx="2" fill="#86efac" />
      <rect x="140" y="112" width="20" height="5" rx="2" fill="#bbf7d0" />
      <text x="152" y="158" textAnchor="middle" fontSize="10" fill="#15803d">
        .md
      </text>

      <path d="M196 102 L226 102" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowLocal)" />
      <defs>
        <marker id="arrowLocal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#22c55e" />
        </marker>
      </defs>

      <rect x="236" y="50" width="68" height="100" rx="12" fill="#ecfdf5" stroke="#16a34a" strokeWidth="2" />
      <rect x="248" y="66" width="44" height="10" rx="5" fill="#86efac" />
      <circle cx="256" cy="98" r="5" fill="#22c55e" />
      <circle cx="270" cy="98" r="5" fill="#22c55e" />
      <circle cx="284" cy="98" r="5" fill="#86efac" />
      <rect x="248" y="118" width="44" height="6" rx="3" fill="#bbf7d0" />
      <rect x="248" y="130" width="32" height="6" rx="3" fill="#dcfce7" />
    </svg>
  );
}

export function IllusNoAccount() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="无账户协作示意图"
    >
      <line x1="160" y1="48" x2="64" y2="140" stroke="#86efac" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="160" y1="48" x2="160" y2="156" stroke="#86efac" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="160" y1="48" x2="256" y2="140" stroke="#86efac" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="64" y1="140" x2="160" y2="156" stroke="#bbf7d0" strokeWidth="1.6" strokeDasharray="4 4" />
      <line x1="256" y1="140" x2="160" y2="156" stroke="#bbf7d0" strokeWidth="1.6" strokeDasharray="4 4" />

      <circle cx="160" cy="48" r="22" fill="#fff" stroke="#16a34a" strokeWidth="3" />
      <circle cx="160" cy="48" r="9" fill="#86efac" />

      <circle cx="64" cy="140" r="16" fill="#fff" stroke="#4ade80" strokeWidth="2.5" />
      <circle cx="64" cy="140" r="5" fill="#4ade80" />
      <circle cx="160" cy="156" r="16" fill="#fff" stroke="#4ade80" strokeWidth="2.5" />
      <circle cx="160" cy="156" r="5" fill="#4ade80" />
      <circle cx="256" cy="140" r="16" fill="#fff" stroke="#4ade80" strokeWidth="2.5" />
      <circle cx="256" cy="140" r="5" fill="#4ade80" />

      {/* unlock cue */}
      <rect x="248" y="28" width="28" height="22" rx="5" stroke="#86efac" strokeWidth="2" fill="#fff" />
      <path
        d="M254 36 V30 Q254 24 260 24 Q266 24 266 30 V36"
        stroke="#86efac"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="260" cy="40" r="2.5" fill="#22c55e" />
    </svg>
  );
}

export const SELLING_POINT_ILLUSTRATIONS: Record<SellingPointId, ReactNode> = {
  'onboarding-ai': <IllusOnboardingAi />,
  'knowledge-graph': <IllusKnowledgeGraph />,
  'agent-dev-loop': <IllusCliAgent />,
  'private-deploy': <IllusZeroDependency />,
  'no-account': <IllusNoAccount />,
};
