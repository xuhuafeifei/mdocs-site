import { GITHUB_REPO } from '../constants';

const personas = [
  { icon: '\u{1F4DD}', title: '所见即所得', desc: '渲染态编辑 Markdown' },
  { icon: '\u{1F504}', title: 'inline Diff', desc: '渲染态按块 Keep / Undo' },
  { icon: '\u{1F916}', title: 'Agent 代劳', desc: '能力可交给 Agent · Engram' },
  { icon: '\u{1F4E6}', title: 'MCP / CLI', desc: '流水线挂 Skills' },
];

export function SocialProof() {
  return (
    <section style={{ background: '#ffffff', padding: '64px 24px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginBottom: '48px' }}
        >
          <img
            src="https://img.shields.io/github/stars/xuhuafeifei/mdocs?style=social"
            alt="GitHub Stars"
            style={{ height: '28px' }}
          />
        </a>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
          }}
        >
          {personas.map((p) => (
            <div
              key={p.title}
              style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '20px 16px',
                textAlign: 'center',
                transition: 'transform 0.15s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{p.icon}</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                {p.title}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#6b7280', lineHeight: 1.4 }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
