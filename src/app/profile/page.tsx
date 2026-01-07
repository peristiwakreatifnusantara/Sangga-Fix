import ProfileHero from '@/components/Profile/ProfileHero';
import HistoryTimeline from '@/components/Profile/HistoryTimeline';
import TeamGrid from '@/components/Profile/TeamGrid';
import ValuesSection from '@/components/Profile/ValuesSection';

export default function Profile() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: 'var(--Background)' }}>
            <ProfileHero />
            <HistoryTimeline />
            <ValuesSection />
            <TeamGrid />
        </main>
    );
}
