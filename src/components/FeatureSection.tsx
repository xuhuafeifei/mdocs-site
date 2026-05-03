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
            适合个人知识库与小型团队协作 — 代码于 GitHub 开放，持续迭代，欢迎共建。
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
            description="无需额外服务，SQLite + 本地文件即可运行，数据牢牢掌握在你手中。"
            tags={['无 Redis', '无 MySQL', '无 S3']}
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
            title="Markdown 原生 · 可视化"
            description="完整 Markdown 语法支持，富文本工具栏 + 拖拽生成流程图，图表以纯文本存储在 .md 中"
            tags={['流程图', '表格', '代码块', '所见即所得']}
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
            title="无账户 · 灵活协作"
            description="无需账号：分享链接即可协作，结合域隔离与文档级邀请，权限精细可控。"
            tags={['无需注册', '邀请链接', '权限可控']}
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
            description="编辑自动写入本地，空闲时静默同步服务端，断网、误关、崩溃，打开即恢复"
            tags={['自动保存', '离线可用', '版本安心']}
            learnMore="/docs/usage/drafts"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
