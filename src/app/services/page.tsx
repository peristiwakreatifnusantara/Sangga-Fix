import ServicesHero from '@/components/Services/ServicesHero';
import ServiceList from '@/components/Services/ServiceList';
import ProcessSteps from '@/components/Services/ProcessSteps';
import CTASection from '@/components/Services/CTASection';

export default function Services() {
    return (
        <main style={{ minHeight: '100vh' }}>
            <ServicesHero />
            <ProcessSteps />
            <ServiceList />
            <CTASection />
        </main>
    );
}
