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
        为个人开发者与小团队打造的极简知识中枢
      </p>

      <h1 className="mdocs-hero-title">自由书写，一字不落</h1>

      <p
        style={{
          fontSize: '0.875rem',
          color: '#4b9e6b',
          margin: '0 0 12px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        {['零依赖部署', '双模编辑', '无账户协作', '智能草稿'].map((tag) => (
          <span
            key={tag}
            style={{
              background: '#ebf9f0',
              color: '#1c7a40',
              borderRadius: '16px',
              padding: '4px 14px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              border: '1px solid #d0f0e0',
            }}
          >
            {tag}
          </span>
        ))}
      </p>

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
          立即体验 · 无需注册
        </a>
        <a className="mdocs-btn mdocs-btn-secondary" href={`${BASE}docs/`}>
          <BookOpen size={18} strokeWidth={2} aria-hidden />
          了解技术原理
        </a>
        {afterHeroActions}
      </div>

      {afterHero}
    </section>
  );
}
