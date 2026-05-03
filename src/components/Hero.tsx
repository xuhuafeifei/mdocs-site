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
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      {beforeHero}

      <img
        src={mdocsLogoUrl}
        alt=""
        width={64}
        height={64}
        style={{ display: 'block', margin: '0 auto 8px' }}
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

      {/* Main title */}
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 600,
          color: '#1c7a40',
          margin: '0 0 12px',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}
      >
        自由书写，一字不落
      </h1>

      {/* English subtitle */}
      <p
        style={{
          fontSize: '1.25rem',
          fontStyle: 'italic',
          fontWeight: 300,
          color: '#6b7280',
          margin: '0 0 16px',
        }}
      >
        Write freely. Never lose a word.
      </p>

      {/* Tagline */}
      <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 32px' }}>
        开源 Markdown 知识库 · 纯私有化 · 无账户协作
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {beforeHeroActions}
        <a
          href="/docs/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'linear-gradient(135deg, #3ccd6e, #2ba357)',
            color: '#ffffff',
            fontWeight: 500,
            padding: '12px 24px',
            borderRadius: '32px',
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'filter 0.2s, transform 0.1s',
            boxShadow: '0 2px 8px rgba(60,205,110,0.3)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.08)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)';
          }}
        >
          📖 阅读文档
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            border: '2px solid #3ccd6e',
            color: '#3ccd6e',
            fontWeight: 500,
            padding: '12px 24px',
            borderRadius: '32px',
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = '#3ccd6e';
            el.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'transparent';
            el.style.color = '#3ccd6e';
          }}
        >
          ⭐ GitHub
        </a>
        {afterHeroActions}
      </div>

      {afterHero}
    </section>
  );
}
