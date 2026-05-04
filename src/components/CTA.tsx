import { Rocket } from 'lucide-react';

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(180deg, #d0f0e0 0%, #b8e0cc 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#14532d', margin: '0 0 8px' }}>
        别再等待，现在就开始自由书写
      </h2>
      <p style={{ fontSize: '1rem', color: '#4b5563', margin: '0 0 28px', lineHeight: 1.5 }}>
        免费使用 · 开源可控 · 5分钟部署 · 无需注册
      </p>
      <div className="mdocs-cta-actions">
        <a
          className="mdocs-btn mdocs-btn-primary"
          href={`${BASE}docs/getting-started/installation`}
        >
          <Rocket size={18} strokeWidth={2} aria-hidden />
          立即创建我的知识库
        </a>
      </div>
    </section>
  );
}
