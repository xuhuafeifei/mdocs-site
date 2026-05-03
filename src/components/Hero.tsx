import { BookOpen } from 'lucide-react';
import mdocsLogoUrl from '../assets/mdocs-logo.svg?url';
import { GITHUB_REPO } from '../constants';

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
          fontSize: '0.9375rem',
          color: '#4b5563',
          margin: '0 0 32px',
          lineHeight: 1.5,
        }}
      >
        开源 Markdown 知识库 · 纯私有化 · 无账户协作
      </p>

      <div className="mdocs-hero-actions">
        {beforeHeroActions}
        <a className="mdocs-btn mdocs-btn-primary" href="/docs/">
          <BookOpen size={18} strokeWidth={2} aria-hidden />
          阅读文档
        </a>
        <a
          className="mdocs-btn mdocs-btn-secondary"
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        {afterHeroActions}
      </div>

      {afterHero}
    </section>
  );
}
