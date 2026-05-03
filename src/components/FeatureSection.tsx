import {
  Database,
  Folder,
  FileText,
  Pen,
  Lock,
  Mail,
  Cloud,
  Save,
} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function FeatureSection() {
  return (
    <section
      id="features"
      style={{
        background: '#ffffff',
        padding: '72px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mdocs-features-heading-wrap">
          <h2 className="mdocs-features-heading">为什么选择 mdocs</h2>
          <p className="mdocs-features-sub">
            轻量、私有、开箱即用 — 你的知识库，由你完全掌控。
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
          }}
        >
          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Database size={24} strokeWidth={2} />
                <Folder size={24} strokeWidth={2} />
              </div>
            }
            title="纯私有化"
            description="SQLite + 本地文件，零依赖，数据完全在你手中。"
            learnMore="/docs/deployment/requirements"
            delay={0}
          />

          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <FileText size={24} strokeWidth={2} />
                <Pen size={24} strokeWidth={2} />
              </div>
            }
            title="Markdown 原生"
            description="完整语法支持，拖拽生成图表，所见即所得。"
            learnMore="/docs/usage/markdown"
            delay={0.1}
          />

          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Lock size={24} strokeWidth={2} />
                <Mail size={24} strokeWidth={2} />
              </div>
            }
            title="无账户协作"
            description="分享链接即可协作，权限精细可控，无需注册。"
            learnMore="/docs/core-concepts/invitation"
            delay={0.2}
          />

          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Cloud size={24} strokeWidth={2} />
                <Save size={24} strokeWidth={2} />
              </div>
            }
            title="草稿永不丢"
            description="自动保存，离线可用，断网崩溃也不丢数据。"
            learnMore="/docs/usage/drafts"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
