import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  learnMore: string;
  delay: number;
}

export function FeatureCard({ icon, title, description, learnMore, delay }: FeatureCardProps) {
  return (
    <div
      className="feature-card"
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: 'clamp(24px, 4vw, 32px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `featureFadeIn 0.4s ease-out ${delay}s forwards`,
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 4px 16px rgba(60,205,110,0.12), 0 8px 24px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)';
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '10px',
            color: '#4CAF50',
          }}
        >
          <div style={{ display: 'flex', flexShrink: 0 }}>{icon}</div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#2c3e2f',
              margin: 0,
              lineHeight: 1.3,
              textAlign: 'left',
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            fontSize: '0.9375rem',
            color: '#4b5563',
            lineHeight: 1.65,
            margin: '0 0 16px',
          }}
        >
          {description}
        </p>
      </div>

      <a href={learnMore} className="mdocs-learn-more">
        了解更多
        <ChevronRight className="mdocs-learn-more-icon" size={20} strokeWidth={2.5} aria-hidden />
      </a>

      <style>{`
        @keyframes featureFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
