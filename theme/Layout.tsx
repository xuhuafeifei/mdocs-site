import { Layout as DefaultLayout } from 'rspress/theme';

function Footer() {
  return (
    <footer
      style={{
        background: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#2ba357',
              marginBottom: '4px',
            }}
          >
            mdocs
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
            Write freely. Never lose a word.
          </p>
          <span
            style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '0.75rem',
              color: '#6b7280',
              background: '#f3f4f6',
              borderRadius: '8px',
              padding: '2px 8px',
            }}
          >
            MIT License
          </span>
        </div>

        <div>
          <div
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '8px',
            }}
          >
            链接
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a
              href="/mdocs-site/docs/"
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              文档
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              GitHub
            </a>
            <a
              href="/mdocs-site/docs/changelog"
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              更新日志
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              问题反馈
            </a>
          </nav>
        </div>

        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2ba357' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid #e5e7eb',
          marginTop: '32px',
          paddingTop: '16px',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#9ca3af',
        }}
      >
        &copy; 2026 mdocs &middot; 开源协议 MIT
      </div>
    </footer>
  );
}

export function Layout(props: any) {
  return <DefaultLayout {...props} bottom={<Footer />} />;
}
