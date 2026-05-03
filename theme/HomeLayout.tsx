import { Hero } from '../src/components/Hero';
import { FeatureSection } from '../src/components/FeatureSection';
import { CTA } from '../src/components/CTA';

export function HomeLayout() {
  return (
    <div style={{ minHeight: 'calc(100vh - var(--rp-nav-height))' }}>
      <Hero />
      <FeatureSection />
      <CTA />
    </div>
  );
}
