import { Bot, Rocket } from 'lucide-react';
import { CTA_HEADING, CTA_SUPPORT } from '../constants';

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
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#14532d',
          margin: CTA_SUPPORT ? '0 0 8px' : '0 0 28px',
        }}
      >
        {CTA_HEADING}
      </h2>
      {CTA_SUPPORT ? (
        <p style={{ fontSize: '1rem', color: '#4b5563', margin: '0 0 28px', lineHeight: 1.5 }}>
          {CTA_SUPPORT}
        </p>
      ) : null}
      <div className="mdocs-cta-actions">
        <a
          className="mdocs-btn mdocs-btn-primary"
          href={`${BASE}docs/getting-started/installation`}
        >
          <Rocket size={18} strokeWidth={2} aria-hidden />
          安装并开始写
        </a>
        <a
          className="mdocs-btn mdocs-btn-secondary"
          href={`${BASE}docs/usage/agent-dev-loop`}
        >
          <Bot size={18} strokeWidth={2} aria-hidden />
          接入 Agent Skills
        </a>
      </div>
    </section>
  );
}
