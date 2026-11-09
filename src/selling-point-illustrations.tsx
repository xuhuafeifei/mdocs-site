import type { CSSProperties, ReactNode } from 'react';
import type { SellingPointId } from './selling-points';

import wysiwygUrl from '../img/suojianjisuode-qingxiban.png';
import inlineDiffUrl from '../img/inline-diff.png';
import agentOpsUrl from '../img/all-in-agent.png';
import versioningUrl from '../img/history-diff.png';
import chajianShichangUrl from '../img/chajian-shichang.png';
import chajianAnzhuangUrl from '../img/chajian-anzhuang.png';
import chajianAiAnzhuangUrl from '../img/chajian-aianzhuang.png';

/** Per-shot layout — fine-tune one id at a time with the user. */
export type ShotLayout = {
  /** Image on the right of the text. Ignored when stackVertical. */
  imageRight: boolean;
  /** Frame max width in px. */
  widthPx: number;
  /**
   * Optional fixed frame ratio (e.g. `'16 / 10'`).
   * Omit for portrait / natural-height shots — no landscape box cropping.
   */
  aspectRatio?: string;
  objectFit: 'contain' | 'cover';
  /** Max share of the row width (default 58). */
  maxSharePct?: number;
  /** Text on top, illustration full-width below. */
  stackVertical?: boolean;
};

export const SHOT_LAYOUT: Record<SellingPointId, ShotLayout> = {
  // 清晰版截图：右图、略放大，方便看清编辑器
  wysiwyg: {
    imageRight: true,
    widthPx: 640,
    aspectRatio: '16 / 10',
    objectFit: 'contain',
  },
  // 竖构图：左图，跟原图比例，不用横框压扁
  'inline-diff': {
    imageRight: false,
    widthPx: 500,
    objectFit: 'contain',
  },
  // 竖构图：右图，跟原图比例，不用横框
  'agent-ops': {
    imageRight: true,
    widthPx: 420,
    objectFit: 'contain',
  },
  // 横图：框贴合截图，不裁正文；占行更宽
  versioning: {
    imageRight: false,
    widthPx: 860,
    maxSharePct: 72,
    objectFit: 'contain',
  },
  // 上文下图：三张插件截图横排
  pipeline: {
    imageRight: true,
    widthPx: 1200,
    maxSharePct: 100,
    objectFit: 'contain',
    stackVertical: true,
  },
};

const frameBase: CSSProperties = {
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
  background: '#f8fafc',
  overflow: 'hidden',
};

function Shot({
  src,
  alt,
  layout,
}: {
  src: string;
  alt: string;
  layout: ShotLayout;
}) {
  const fixedFrame = Boolean(layout.aspectRatio);
  return (
    <div
      style={{
        ...frameBase,
        width: `min(${layout.widthPx}px, 100%)`,
        ...(fixedFrame ? { aspectRatio: layout.aspectRatio } : undefined),
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={
          fixedFrame
            ? {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: layout.objectFit,
                objectPosition: 'center',
              }
            : {
                display: 'block',
                width: '100%',
                height: 'auto',
              }
        }
      />
    </div>
  );
}

function PipelineTrio() {
  const shots = [
    { src: chajianShichangUrl, alt: '插件市场' },
    { src: chajianAnzhuangUrl, alt: '插件安装流水线' },
    { src: chajianAiAnzhuangUrl, alt: 'AI 安装插件' },
  ];
  return (
    <div
      className="mdocs-pipeline-trio"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '16px',
        width: '100%',
      }}
    >
      {shots.map((s) => (
        <div key={s.alt} style={{ ...frameBase, width: '100%' }}>
          <img
            src={s.src}
            alt={s.alt}
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
}

/** Homepage / why-mdocs: real product screenshots from `/img`. */
export const SELLING_POINT_ILLUSTRATIONS: Record<SellingPointId, ReactNode> = {
  wysiwyg: (
    <Shot
      src={wysiwygUrl}
      alt="所见即所得 Markdown 编辑"
      layout={SHOT_LAYOUT.wysiwyg}
    />
  ),
  'inline-diff': (
    <Shot
      src={inlineDiffUrl}
      alt="Markdown inline Diff · Keep / Undo"
      layout={SHOT_LAYOUT['inline-diff']}
    />
  ),
  'agent-ops': (
    <Shot
      src={agentOpsUrl}
      alt="智能助手代劳查文档与读写"
      layout={SHOT_LAYOUT['agent-ops']}
    />
  ),
  versioning: (
    <Shot
      src={versioningUrl}
      alt="版本历史预览与对比"
      layout={SHOT_LAYOUT.versioning}
    />
  ),
  pipeline: <PipelineTrio />,
};
