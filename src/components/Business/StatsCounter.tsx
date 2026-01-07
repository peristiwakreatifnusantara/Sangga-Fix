'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: var(--emerald);
  color: #000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  
  p {
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 12, suffix: '', label: 'Global Offices' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 5, suffix: 'M+', label: 'Users Impacted' },
];

const StatsCounter = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const items = container.querySelectorAll('.counter-val');

            items.forEach(item => {
                const target = parseInt(item.getAttribute('data-target') || '0');

                gsap.to(item, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                    }
                });
            });
        }
    }, []);

    return (
        <Section>
            <Container ref={containerRef}>
                {stats.map((s, i) => (
                    <StatItem key={i}>
                        <h3>
                            <span className="counter-val" data-target={s.value}>0</span>
                            <span>{s.suffix}</span>
                        </h3>
                        <p>{s.label}</p>
                    </StatItem>
                ))}
            </Container>
        </Section>
    );
};

export default StatsCounter;
