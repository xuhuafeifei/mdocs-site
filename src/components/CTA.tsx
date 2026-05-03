export function CTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #d0f0e0 0%, #c0e8d5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#1c7a40', margin: '0 0 8px' }}>
        准备好开始了吗？
      </h2>
      <p style={{ fontSize: '1rem', color: '#6b7280', margin: '0 0 24px' }}>
        开源 · 私有 · 文档级协作
      </p>
      <a
        href="/docs/"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #3ccd6e, #2ba357)',
          color: '#ffffff',
          fontWeight: 500,
          padding: '14px 32px',
          borderRadius: '32px',
          fontSize: '1.125rem',
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
    </section>
  );
}
