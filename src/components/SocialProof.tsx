import { GITHUB_REPO } from '../constants';

const useCases = ['个人知识库', '团队文档协作', '笔记备份', '技术文档'];

export function SocialProof() {
  return (
    <section style={{ background: '#ffffff', padding: '64px 24px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginBottom: '36px' }}
        >
          <img
            src="https://img.shields.io/github/stars/xuhuafeifei/mdocs?style=social"
            alt="GitHub Stars"
            style={{ height: '28px' }}
          />
        </a>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '36px',
          }}
        >
          {useCases.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.8125rem',
                color: '#2ba357',
                background: '#ebf9f0',
                borderRadius: '20px',
                padding: '6px 16px',
                fontWeight: 500,
                border: '1px solid #d0f0e0',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
