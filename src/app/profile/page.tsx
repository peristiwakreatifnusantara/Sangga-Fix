import {
    ProfileHero,
    HistoryTimeline,
    ValuesSection,
    TeamGrid
} from '@/components';
export default function Profile() {
    return (
        <main style={{ minHeight: '100vh' }}>
            <ProfileHero />
            <HistoryTimeline />
            <ValuesSection />
            <TeamGrid />
        </main>
    );
}
