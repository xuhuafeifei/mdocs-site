import { BookOpen, Rocket } from 'lucide-react';

export function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(90deg, #d0f0e0 0%, #c0e8d5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#14532d', margin: '0 0 8px' }}>
        准备好开始了吗？
      </h2>
      <p style={{ fontSize: '1rem', color: '#4b5563', margin: '0 0 28px', lineHeight: 1.5 }}>
        开源 · 私有 · 文档级协作
      </p>
      <div className="mdocs-cta-actions">
        <a className="mdocs-btn mdocs-btn-primary" href="/docs/">
          <BookOpen size={18} strokeWidth={2} aria-hidden />
          阅读文档
        </a>
        <a className="mdocs-btn mdocs-btn-secondary" href="/docs/getting-started/installation">
          <Rocket size={18} strokeWidth={2} aria-hidden />
          快速上手
        </a>
      </div>
    </section>
  );
}
