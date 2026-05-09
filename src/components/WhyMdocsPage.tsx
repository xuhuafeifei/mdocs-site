import type { ReactNode } from "react";

/* ===== SVG Placeholder Illustrations ===== */

function IllusZeroDependency() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="零依赖部署示意图"
    >
      <rect
        x="16"
        y="60"
        width="64"
        height="80"
        rx="8"
        fill="#d0f0e0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <ellipse
        cx="48"
        cy="60"
        rx="32"
        ry="10"
        fill="#d0f0e0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <text
        x="48"
        y="105"
        textAnchor="middle"
        fontSize="11"
        fill="#1c7a40"
        fontWeight="600"
      >
        SQLite
      </text>
      <rect
        x="110"
        y="70"
        width="56"
        height="64"
        rx="8"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <path
        d="M118 78 L130 88 L158 78"
        stroke="#2ba357"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="118" y="98" width="40" height="6" rx="3" fill="#a5e7bc" />
      <rect x="118" y="110" width="28" height="6" rx="3" fill="#a5e7bc" />
      <path
        d="M185 105 L215 105"
        stroke="#3ccd6e"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#arrowGreen)"
      />
      <defs>
        <marker
          id="arrowGreen"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="#3ccd6e" />
        </marker>
      </defs>
      <rect
        x="224"
        y="58"
        width="80"
        height="88"
        rx="10"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <rect x="236" y="72" width="56" height="8" rx="4" fill="#a5e7bc" />
      <circle cx="244" cy="100" r="4" fill="#3ccd6e" />
      <circle cx="256" cy="100" r="4" fill="#3ccd6e" />
      <circle cx="268" cy="100" r="4" fill="#a5e7bc" />
      <rect x="236" y="116" width="56" height="6" rx="3" fill="#d0f0e0" />
      <rect x="236" y="128" width="40" height="6" rx="3" fill="#d0f0e0" />
    </svg>
  );
}

function IllusDualEditing() {
  return (
    <svg
      width="400"
      height="220"
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="双模编辑体验示意图"
    >
      <rect
        x="8"
        y="12"
        width="180"
        height="196"
        rx="10"
        fill="#f9fafb"
        stroke="#d0f0e0"
        strokeWidth="2"
      />
      <rect x="16" y="24" width="164" height="24" rx="6" fill="#d0f0e0" />
      <circle cx="28" cy="36" r="4" fill="#f87171" />
      <circle cx="40" cy="36" r="4" fill="#fbbf24" />
      <circle cx="52" cy="36" r="4" fill="#3ccd6e" />
      <rect x="24" y="60" width="148" height="3" rx="1" fill="#e5e7eb" />
      <rect x="24" y="70" width="120" height="3" rx="1" fill="#e5e7eb" />
      <rect x="24" y="80" width="148" height="3" rx="1" fill="#e5e7eb" />
      <rect x="24" y="90" width="96" height="3" rx="1" fill="#e5e7eb" />
      <rect x="24" y="102" width="60" height="3" rx="1" fill="#e5e7eb" />
      <rect
        x="24"
        y="118"
        width="100"
        height="22"
        rx="6"
        fill="#ebf9f0"
        stroke="#3ccd6e"
        strokeWidth="1.5"
      />
      <rect
        x="132"
        y="118"
        width="40"
        height="22"
        rx="6"
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />
      <rect
        x="24"
        y="152"
        width="80"
        height="22"
        rx="6"
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />
      <path
        d="M210 60 L240 40 L270 60 L240 80 Z"
        fill="#d0f0e0"
        stroke="#2ba357"
        strokeWidth="1.5"
      />
      <rect
        x="232"
        y="82"
        width="16"
        height="20"
        rx="3"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="1.5"
      />
      <rect
        x="260"
        y="70"
        width="50"
        height="16"
        rx="8"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="1.5"
      />
      <rect
        x="320"
        y="92"
        width="50"
        height="16"
        rx="8"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="1.5"
      />
      <path d="M248 92 L248 102" stroke="#2ba357" strokeWidth="2" />
      <path
        d="M248 102 L310 102"
        stroke="#2ba357"
        strokeWidth="2"
        markerEnd="url(#arrowEdit)"
      />
      <defs>
        <marker
          id="arrowEdit"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="#2ba357" />
        </marker>
      </defs>
      <rect
        x="270"
        y="132"
        width="100"
        height="14"
        rx="7"
        fill="#ebf9f0"
        stroke="#a5e7bc"
        strokeWidth="1"
      />
      <rect
        x="280"
        y="156"
        width="80"
        height="14"
        rx="7"
        fill="#d0f0e0"
        stroke="#a5e7bc"
        strokeWidth="1"
      />
      <rect
        x="275"
        y="178"
        width="60"
        height="14"
        rx="7"
        fill="#ebf9f0"
        stroke="#a5e7bc"
        strokeWidth="1"
      />
      <rect
        x="300"
        y="90"
        width="80"
        height="12"
        rx="6"
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />
      <rect x="300" y="110" width="70" height="3" rx="1" fill="#e5e7eb" />
      <rect x="300" y="118" width="56" height="3" rx="1" fill="#e5e7eb" />
    </svg>
  );
}

function IllusNoAccount() {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="无账户协作示意图"
    >
      <circle cx="150" cy="70" r="6" fill="#3ccd6e" opacity="0.3">
        <animate
          attributeName="r"
          values="6;10;6"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <rect
        x="120"
        y="40"
        width="60"
        height="60"
        rx="12"
        fill="#ebf9f0"
        stroke="#3ccd6e"
        strokeWidth="2.5"
      />
      <rect x="130" y="50" width="40" height="5" rx="2" fill="#a5e7bc" />
      <rect x="130" y="62" width="32" height="5" rx="2" fill="#a5e7bc" />
      <rect x="130" y="74" width="36" height="5" rx="2" fill="#a5e7bc" />
      <line
        x1="150"
        y1="100"
        x2="150"
        y2="120"
        stroke="#3ccd6e"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="120"
        x2="80"
        y2="148"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="120"
        x2="150"
        y2="155"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="120"
        x2="220"
        y2="148"
        stroke="#9ca3af"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="148"
        r="14"
        fill="#d0f0e0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <rect x="74" y="141" width="12" height="14" rx="2" fill="#2ba357" />
      <path
        d="M80 157 L80 167"
        stroke="#2ba357"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="150"
        cy="155"
        r="14"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <path
        d="M144 162 L156 162 M150 156 L150 168"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="220"
        cy="148"
        r="14"
        fill="#f3f4f6"
        stroke="#9ca3af"
        strokeWidth="2"
      />
      <circle cx="220" cy="143" r="5" fill="#9ca3af" />
      <path
        d="M214 157 Q220 153 226 157"
        stroke="#9ca3af"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function IllusDrafts() {
  return (
    <svg
      width="380"
      height="200"
      viewBox="0 0 380 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="智能草稿管理示意图"
    >
      <rect
        x="8"
        y="40"
        width="90"
        height="64"
        rx="8"
        fill="#ebf9f0"
        stroke="#2ba357"
        strokeWidth="2"
      />
      <rect
        x="18"
        y="50"
        width="70"
        height="44"
        rx="4"
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <rect x="24" y="56" width="58" height="4" rx="2" fill="#d0f0e0" />
      <rect x="24" y="66" width="44" height="4" rx="2" fill="#e5e7eb" />
      <rect x="24" y="76" width="52" height="4" rx="2" fill="#e5e7eb" />
      <rect x="24" y="86" width="36" height="4" rx="2" fill="#e5e7eb" />
      <path
        d="M125 85 C140 65, 170 65, 185 85"
        stroke="#2ba357"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 3"
        fill="none"
      />
      <path
        d="M140 55 C150 45, 160 45, 170 55"
        stroke="#3ccd6e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M135 70 C150 58, 160 58, 175 70"
        stroke="#3ccd6e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M195 55 L240 55 L230 35 L260 60 L230 85 L240 65 L195 65 Z"
        fill="#d0f0e0"
        stroke="#2ba357"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="268"
        y="36"
        width="90"
        height="72"
        rx="10"
        fill="#f9fafb"
        stroke="#d0f0e0"
        strokeWidth="2"
      />
      <rect x="280" y="52" width="66" height="6" rx="3" fill="#a5e7bc" />
      <rect x="280" y="66" width="52" height="6" rx="3" fill="#e5e7eb" />
      <rect x="280" y="80" width="58" height="6" rx="3" fill="#e5e7eb" />
      <path
        d="M355 72 L370 72"
        stroke="#3ccd6e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="370" cy="72" r="4" fill="#3ccd6e" />
      <path
        d="M313 120 L313 100"
        stroke="#2ba357"
        strokeWidth="2"
        markerEnd="url(#arrowSync)"
      />
      <defs>
        <marker
          id="arrowSync"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="#2ba357" />
        </marker>
      </defs>
      <text
        x="313"
        y="144"
        textAnchor="middle"
        fontSize="11"
        fill="#1c7a40"
        fontWeight="600"
      >
        本地保存
      </text>
    </svg>
  );
}

function IllusCliAgent() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CLI 与 Agent 接入示意图">
      <rect x="20" y="40" width="130" height="120" rx="8" fill="#f9fafb" stroke="#2ba357" strokeWidth="2" />
      <rect x="20" y="40" width="130" height="24" rx="8" fill="#d0f0e0" stroke="#2ba357" strokeWidth="2" />
      <circle cx="36" cy="52" r="4" fill="#f87171" />
      <circle cx="48" cy="52" r="4" fill="#fbbf24" />
      <circle cx="60" cy="52" r="4" fill="#3ccd6e" />
      <rect x="44" y="78" width="80" height="4" rx="2" fill="#a5e7bc" />
      <rect x="32" y="94" width="70" height="4" rx="2" fill="#e5e7eb" />
      <rect x="32" y="110" width="90" height="4" rx="2" fill="#e5e7eb" />
      <rect x="32" y="126" width="60" height="4" rx="2" fill="#e5e7eb" />
      <rect x="32" y="142" width="76" height="4" rx="2" fill="#e5e7eb" />
      <path d="M165 100 L205 100" stroke="#3ccd6e" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowCliAgent)" />
      <defs>
        <marker id="arrowCliAgent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#3ccd6e" />
        </marker>
      </defs>
      <rect x="220" y="50" width="80" height="100" rx="12" fill="#ebf9f0" stroke="#2ba357" strokeWidth="2" />
      <rect x="240" y="70" width="40" height="28" rx="6" fill="#fff" stroke="#a5e7bc" strokeWidth="1.5" />
      <circle cx="254" cy="84" r="4" fill="#2ba357" />
      <circle cx="266" cy="84" r="4" fill="#2ba357" />
      <rect x="250" y="94" width="20" height="3" rx="1.5" fill="#a5e7bc" />
      <line x1="260" y1="50" x2="260" y2="38" stroke="#2ba357" strokeWidth="2" />
      <circle cx="260" cy="34" r="4" fill="#3ccd6e" />
      <rect x="240" y="110" width="44" height="5" rx="2.5" fill="#d0f0e0" />
      <rect x="240" y="122" width="32" height="5" rx="2.5" fill="#d0f0e0" />
      <rect x="240" y="134" width="38" height="5" rx="2.5" fill="#d0f0e0" />
    </svg>
  );
}

/* ===== Data ===== */

interface ModuleData {
  title: string;
  subtitle: string;
  tags: string[];
  illustration: ReactNode;
}

const modules: ModuleData[] = [
  {
    title: "零依赖部署",
    subtitle:
      "SQLite + 文件系统驱动，无需任何数据库、缓存或消息队列中间件。单文件即可运行，部署极简，维护零成本",
    tags: ["一键启动"],
    illustration: <IllusZeroDependency />,
  },
  {
    title: "双模编辑体验",
    subtitle:
      "完整的 Markdown 语法支持 + 可视化富文本工具栏。拖拽生成流程图和图表，所有内容以纯文本存储在 .md 文件中",
    tags: ["所见即所得"],
    illustration: <IllusDualEditing />,
  },
  {
    title: "无账户协作模型",
    subtitle:
      "访问者即身份，无需注册登录。通过「域隔离 + 文档级邀请」实现从完全私有到开放协作的灵活权限控制，适合小团队快速启动。",
    tags: ["无需注册", "精细权限"],
    illustration: <IllusNoAccount />,
  },
  {
    title: "智能草稿管理",
    subtitle:
      "编辑内容自动保存至本地，网络空闲时同步到后端。支持手动/自动切换，断网不丢数据",
    tags: ["自动保存", "断网不丢数据"],
    illustration: <IllusDrafts />,
  },
  {
    title: 'CLI 与 Agent 原生接入',
    subtitle: '独立 CLI 客户端 + Token 认证，支持命令行批量管理文档、CI/CD 流水线集成，以及 AI Agent（如 Claude Code）直接读写知识库。',
    tags: ['CLI 工具', 'Agent Ready'],
    illustration: <IllusCliAgent />,
  },
];

/* ===== Feature Module ===== */

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "48px",
  padding: "48px 8px",
  borderBottom: "1px solid #e0e0e0",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  borderRadius: "8px",
};

const textStyle: React.CSSProperties = {
  flex: 1,
  minWidth: "280px",
  padding: "0 8px",
};

const imgWrapStyle: React.CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  borderRadius: "12px",
};

function FeatureModule({
  data,
  imageRight,
}: {
  data: ModuleData;
  imageRight: boolean;
}) {
  const handleRowHover = (el: HTMLDivElement, enter: boolean) => {
    el.style.transform = enter ? "translateY(-2px)" : "translateY(0)";
    el.style.boxShadow = enter ? "0 4px 12px rgba(0,0,0,0.06)" : "none";
  };

  const handleImgHover = (el: HTMLDivElement, enter: boolean) => {
    el.style.transform = enter ? "scale(1.05)" : "scale(1)";
    el.style.boxShadow = enter ? "0 4px 12px rgba(0,0,0,0.1)" : "none";
  };

  const handleTagHover = (el: HTMLSpanElement, enter: boolean) => {
    el.style.transform = enter ? "translateY(-1px)" : "translateY(0)";
    el.style.boxShadow = enter ? "0 2px 8px rgba(60,205,110,0.25)" : "none";
  };

  const textContent = (
    <div style={textStyle}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#1a2e1f",
          margin: "0 0 12px",
        }}
      >
        {data.title}
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "#4b5563",
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        {data.subtitle}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {data.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#e8f5e9",
              color: "#1c7a40",
              padding: "4px 14px",
              borderRadius: "16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              display: "inline-block",
              border: "1px solid #d0f0e0",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => handleTagHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleTagHover(e.currentTarget, false)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div
      style={imgWrapStyle}
      onMouseEnter={(e) => handleImgHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleImgHover(e.currentTarget, false)}
    >
      {data.illustration}
    </div>
  );

  return (
    <div
      className="mdocs-why-row"
      style={rowStyle}
      onMouseEnter={(e) => handleRowHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleRowHover(e.currentTarget, false)}
    >
      {imageRight ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
}

/* ===== Page ===== */

export function WhyMdocsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
      <style>{`
        @media (max-width: 767px) {
          .mdocs-why-row {
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>

      <div
        style={{ textAlign: "center", paddingTop: "16px", marginBottom: "8px" }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "#2ba357",
            margin: "0 0 8px",
          }}
        >
          为什么选择 mdocs
        </p>
        <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>
          四个维度，了解 mdocs 的与众不同
        </p>
      </div>

      <FeatureModule data={modules[0]} imageRight />
      <FeatureModule data={modules[1]} imageRight={false} />
      <FeatureModule data={modules[2]} imageRight />
      <FeatureModule data={modules[3]} imageRight={false} />
      <FeatureModule data={modules[4]} imageRight />
    </div>
  );
}
