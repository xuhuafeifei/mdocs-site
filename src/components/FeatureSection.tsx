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
      style={{
        background: '#ffffff',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section title */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '48px',
          }}
        >
          为什么选择 mdocs
        </p>

        {/* 2x2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '4px' }}>
                <Database size={28} strokeWidth={1.5} />
                <Folder size={28} strokeWidth={1.5} />
              </div>
            }
            title="纯私有化"
            description="一把 SQLite + 文件系统即跑，不依赖任何外部中间件，数据完全在你手中"
            tags={['无 Redis', '无 MySQL', '无 S3']}
            learnMore="/docs/deployment/requirements"
            delay={0}
          />

          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '4px' }}>
                <FileText size={28} strokeWidth={1.5} />
                <Pen size={28} strokeWidth={1.5} />
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
              <div style={{ display: 'flex', gap: '4px' }}>
                <Lock size={28} strokeWidth={1.5} />
                <Mail size={28} strokeWidth={1.5} />
              </div>
            }
            title="无账户 · 灵活协作"
            description="访问者即身份，无需注册登录，通过「域隔离 + 文档级邀请」实现从完全私有到开放协作"
            tags={['无需注册', '邀请链接', '权限可控']}
            learnMore="/docs/core-concepts/invitation"
            delay={0.2}
          />

          <FeatureCard
            icon={
              <div style={{ display: 'flex', gap: '4px' }}>
                <Cloud size={28} strokeWidth={1.5} />
                <Save size={28} strokeWidth={1.5} />
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
