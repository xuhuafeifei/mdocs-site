import { Rocket } from 'lucide-react';

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
        准备好开始了吗？
      </h2>
      <p style={{ fontSize: '1rem', color: '#4b5563', margin: '0 0 28px', lineHeight: 1.5 }}>
        免费、开源、无门槛
      </p>
      <div className="mdocs-cta-actions">
        <a className="mdocs-btn mdocs-btn-primary" href="/docs/getting-started/installation">
          <Rocket size={18} strokeWidth={2} aria-hidden />
          快速开始
        </a>
      </div>
    </section>
  );
}
