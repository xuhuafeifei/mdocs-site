import { BookOpen, Rocket } from 'lucide-react';
import mdocsLogoUrl from '../assets/mdocs-logo.svg?url';

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

      <h1 className="mdocs-hero-title">自由书写，一字不落</h1>

      <p className="mdocs-hero-subtitle-en">Write freely. Never lose a word.</p>

      <p
        style={{
          fontSize: '1.0625rem',
          color: '#3d6b52',
          margin: '0 0 32px',
          lineHeight: 1.6,
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        你的数据，你做主。无需服务器，无需注册，打开即写。
      </p>

      <div className="mdocs-hero-actions">
        {beforeHeroActions}
        <a className="mdocs-btn mdocs-btn-primary" href="/docs/getting-started/installation">
          <Rocket size={18} strokeWidth={2} aria-hidden />
          快速开始
        </a>
        <a className="mdocs-btn mdocs-btn-secondary" href="/docs/">
          <BookOpen size={18} strokeWidth={2} aria-hidden />
          查看文档
        </a>
        {afterHeroActions}
      </div>

      {afterHero}
    </section>
  );
}
