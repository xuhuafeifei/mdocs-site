import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  learnMore: string;
  delay: number;
}

export function FeatureCard({ icon, title, description, tags, learnMore, delay }: FeatureCardProps) {
  return (
    <div
      className="feature-card"
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '32px',
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
        {/* Icon */}
        <div style={{ color: '#3ccd6e', marginBottom: '16px' }}>{icon}</div>

        {/* Title */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#2c3e2f', margin: '0 0 8px' }}>
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: '#6b7280',
            lineHeight: 1.6,
            margin: '0 0 16px',
          }}
        >
          {description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                color: '#2ba357',
                background: '#ebf9f0',
                borderRadius: '16px',
                padding: '3px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <a
          href={learnMore}
          style={{
            color: '#2ba357',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          了解更多 →
        </a>
      </div>

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
