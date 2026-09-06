import {
  FEATURES_HEADING,
  FEATURES_SUBHEADING,
  SELLING_POINTS,
} from '../constants';
import { SELLING_POINT_ILLUSTRATIONS } from '../selling-point-illustrations';

const modules = SELLING_POINTS.map((point) => ({
  ...point,
  illustration: SELLING_POINT_ILLUSTRATIONS[point.id],
}));

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
  padding: '48px 8px',
  borderBottom: '1px solid #e0e0e0',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  borderRadius: '8px',
};

const textStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '280px',
  padding: '0 8px',
};

const imgWrapStyle: React.CSSProperties = {
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  borderRadius: '12px',
};

function FeatureModule({
  data,
  imageRight,
}: {
  data: (typeof modules)[number];
  imageRight: boolean;
}) {
  const handleRowHover = (el: HTMLDivElement, enter: boolean) => {
    el.style.transform = enter ? 'translateY(-2px)' : 'translateY(0)';
    el.style.boxShadow = enter ? '0 4px 12px rgba(0,0,0,0.06)' : 'none';
  };

  const handleImgHover = (el: HTMLDivElement, enter: boolean) => {
    el.style.transform = enter ? 'scale(1.05)' : 'scale(1)';
    el.style.boxShadow = enter ? '0 4px 12px rgba(0,0,0,0.1)' : 'none';
  };

  const handleTagHover = (el: HTMLSpanElement, enter: boolean) => {
    el.style.transform = enter ? 'translateY(-1px)' : 'translateY(0)';
    el.style.boxShadow = enter ? '0 2px 8px rgba(60,205,110,0.25)' : 'none';
  };

  const textContent = (
    <div style={textStyle}>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#333',
          margin: '0 0 12px',
        }}
      >
        {data.title}
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, margin: '0 0 16px' }}>
        {data.subtitle}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {data.tags.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              background: data.tagBg,
              color: data.tagColor,
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => handleTagHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleTagHover(e.currentTarget, false)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div
      style={imgWrapStyle}
      onMouseEnter={(e) => handleImgHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleImgHover(e.currentTarget, false)}
    >
      {data.illustration}
    </div>
  );

  return (
    <div
      className="mdocs-why-row"
      style={{
        ...rowStyle,
        flexDirection: imageRight ? 'row' : 'row-reverse',
      }}
      onMouseEnter={(e) => handleRowHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleRowHover(e.currentTarget, false)}
    >
      {imageRight ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
}

export function WhyMdocsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        @media (max-width: 767px) {
          .mdocs-why-row {
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>

      <div style={{ textAlign: 'center', paddingTop: '16px', marginBottom: '8px' }}>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#2ba357',
            margin: '0 0 8px',
          }}
        >
          {FEATURES_HEADING}
        </p>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
          {FEATURES_SUBHEADING}
        </p>
      </div>

      {modules.map((mod, i) => (
        <FeatureModule key={mod.id} data={mod} imageRight={i % 2 === 0} />
      ))}
    </div>
  );
}
