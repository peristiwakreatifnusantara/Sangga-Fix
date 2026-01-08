import BusinessHero from '@/components/Business/BusinessHero';
import StatsCounter from '@/components/Business/StatsCounter';
import ProjectsGallery from '@/components/Business/ProjectsGallery';
import BusinessServices from '@/components/Business/BusinessServices';

export default function Business() {
    return (
        <main style={{ minHeight: '100vh' }}>
            <BusinessHero />
            <BusinessServices />
            <StatsCounter />
            <ProjectsGallery />
        </main>
    );
}
