import {
  FEATURES_HEADING,
  FEATURES_SUBHEADING,
  SELLING_POINTS,
} from '../constants';
import {
  SELLING_POINT_ILLUSTRATIONS,
  SHOT_LAYOUT,
} from '../selling-point-illustrations';

const modules = SELLING_POINTS.map((point) => ({
  ...point,
  illustration: SELLING_POINT_ILLUSTRATIONS[point.id],
  layout: SHOT_LAYOUT[point.id],
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
  minWidth: '240px',
  padding: '0 8px',
};

function FeatureModule({ data }: { data: (typeof modules)[number] }) {
  const { imageRight, widthPx, maxSharePct = 58, stackVertical } = data.layout;
  const imgWrapStyle: React.CSSProperties = {
    flex: `0 0 min(${widthPx}px, ${maxSharePct}%)`,
    width: `min(${widthPx}px, ${maxSharePct}%)`,
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleRowHover = (el: HTMLDivElement, enter: boolean) => {
    el.style.transform = enter ? 'translateY(-2px)' : 'translateY(0)';
    el.style.boxShadow = enter ? '0 4px 12px rgba(0,0,0,0.06)' : 'none';
  };

  const handleTagHover = (el: HTMLSpanElement, enter: boolean) => {
    el.style.transform = enter ? 'translateY(-1px)' : 'translateY(0)';
    el.style.boxShadow = enter ? '0 2px 8px rgba(60,205,110,0.25)' : 'none';
  };

  const textContent = (
    <div style={stackVertical ? { ...textStyle, minWidth: 0, width: '100%' } : textStyle}>
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

  const imageContent = stackVertical ? (
    <div style={{ width: '100%' }}>{data.illustration}</div>
  ) : (
    <div style={imgWrapStyle}>{data.illustration}</div>
  );

  return (
    <div
      className="mdocs-why-row"
      style={{
        ...rowStyle,
        flexDirection: stackVertical ? 'column' : 'row',
        alignItems: stackVertical ? 'stretch' : 'center',
        gap: stackVertical ? '28px' : '48px',
      }}
      onMouseEnter={(e) => handleRowHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleRowHover(e.currentTarget, false)}
    >
      {stackVertical ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : imageRight ? (
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
          .mdocs-pipeline-trio {
            grid-template-columns: 1fr !important;
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
        {FEATURES_SUBHEADING ? (
          <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
            {FEATURES_SUBHEADING}
          </p>
        ) : null}
      </div>

      {modules.map((mod) => (
        <FeatureModule key={mod.id} data={mod} />
      ))}
    </div>
  );
}
