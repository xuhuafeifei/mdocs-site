import { useState } from 'react';
import { BookOpen, Rocket, X } from 'lucide-react';
import mdocsLogoUrl from '../assets/mdocs-logo.svg?url';

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

interface HeroProps {
  beforeHero?: React.ReactNode;
  afterHero?: React.ReactNode;
  beforeHeroActions?: React.ReactNode;
  afterHeroActions?: React.ReactNode;
}

const DEMO_URL = 'https://xuhuafeifei.github.io/mdocs/';

function DemoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.4)',
        padding: '16px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '420px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '4px',
            color: '#9ca3af',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: '2rem',
              marginBottom: '12px',
            }}
          >
            🎮
          </div>
          <h2
            style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#1f2937',
              margin: '0 0 8px',
            }}
          >
            进入 Demo 体验
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              lineHeight: 1.6,
              margin: '0 0 24px',
            }}
          >
            您将进入 Demo 界面。部分功能将受到限制，且数据都存储在您的浏览器中。
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#2ba357',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 28px',
              fontSize: '0.9375rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Rocket size={18} />
            确定进入 Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function Hero({ beforeHero, afterHero, beforeHeroActions, afterHeroActions }: HeroProps) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ebf9f0 0%, #d0f0e0 100%)',
        padding: '100px 24px 96px',
        textAlign: 'center',
      }}
    >
      {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}

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
        <button className="mdocs-btn mdocs-btn-primary" onClick={() => setShowDemoModal(true)}>
          <Rocket size={18} strokeWidth={2} aria-hidden />
          立即体验 · 无需注册
        </button>
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
