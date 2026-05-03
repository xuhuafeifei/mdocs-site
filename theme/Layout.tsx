import { Layout as DefaultLayout } from 'rspress/theme';
import { GITHUB_ISSUES, GITHUB_REPO, LICENSE_URL } from '../src/constants';

function Footer() {
  const base = import.meta.env.BASE_URL;

  return (
    <footer
      className="mdocs-footer"
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
          <p style={{ color: '#4b5563', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
            Write freely. Never lose a word.
          </p>
          <a
            href={LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '0.75rem',
              color: '#374151',
              background: '#ecfdf5',
              borderRadius: '8px',
              padding: '4px 10px',
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid #d0f0e0',
            }}
          >
            MIT License
          </a>
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
              href={`${base}docs/`}
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              文档
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              GitHub
            </a>
            <a
              href={`${base}docs/changelog`}
              style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              更新日志
            </a>
            <a
              href={GITHUB_ISSUES}
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
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2ba357', display: 'inline-flex' }}
            aria-label="GitHub 仓库"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
          color: '#6b7280',
          lineHeight: 1.6,
        }}
      >
        &copy; 2026 mdocs &middot; Made with &hearts; by{' '}
        <a
          href="https://github.com/xuhuafeifei"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2ba357', textDecoration: 'none' }}
        >
          xuhuafeifei
        </a>
      </div>
    </footer>
  );
}

export function Layout(props: any) {
  return <DefaultLayout {...props} bottom={<Footer />} />;
}
