import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  HistoryTimeline
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistoryTimeline />
      <Featured />
      <FinancialFuture />
      <FinancilaFreedom />
      <FAQ />
    </main>
  );
}
