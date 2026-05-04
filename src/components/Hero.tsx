import { BookOpen, Rocket } from 'lucide-react';
import mdocsLogoUrl from '../assets/mdocs-logo.svg?url';

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

interface HeroProps {
  beforeHero?: React.ReactNode;
  afterHero?: React.ReactNode;
  beforeHeroActions?: React.ReactNode;
  afterHeroActions?: React.ReactNode;
}

export function Hero({ beforeHero, afterHero, beforeHeroActions, afterHeroActions }: HeroProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ebf9f0 0%, #d0f0e0 100%)',
        padding: '100px 24px 96px',
        textAlign: 'center',
      }}
    >
      {beforeHero}

      <img
        src={mdocsLogoUrl}
        alt=""
        width={64}
        height={64}
        className="mdocs-hero-logo"
      />
      <p
        style={{
          fontSize: '1.375rem',
          fontWeight: 600,
          color: '#1c7a40',
          margin: '0 0 20px',
          letterSpacing: '-0.02em',
        }}
      >
        mdocs
      </p>

      <p
        style={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: '#2ba357',
          margin: '0 0 16px',
          letterSpacing: '0.04em',
        }}
      >
        年轻团队首选的知识文档平台
      </p>

      <h1 className="mdocs-hero-title">自由书写，一字不落</h1>

      <p className="mdocs-hero-subtitle-en">Write freely. Never lose a word.</p>

      <p
        style={{
          fontSize: '1rem',
          color: '#3d6b52',
          margin: '0 0 32px',
          lineHeight: 1.6,
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        无需注册 · 打开即写
      </p>

      <div className="mdocs-hero-actions">
        {beforeHeroActions}
        <a className="mdocs-btn mdocs-btn-primary" href={`${BASE}docs/getting-started/installation`}>
          <Rocket size={18} strokeWidth={2} aria-hidden />
          快速开始
        </a>
        <a className="mdocs-btn mdocs-btn-secondary" href={`${BASE}docs/`}>
          <BookOpen size={18} strokeWidth={2} aria-hidden />
          查看文档
        </a>
        {afterHeroActions}
      </div>

      {afterHero}
    </section>
  );
}
