'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: var(--Background);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 4rem;
    color: var(--white);
    margin-bottom: 3rem;
    text-align: center;
`;

const CardsContainer = styled.div`
    display: flex;
    gap: 2rem;
    perspective: 1000px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    flex: 1;
    background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 1px solid #333;
    opacity: 0;
    transform: rotateX(45deg) translateY(50px);
    
    h3 {
        color: var(--emerald);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    p {
        color: #ccc;
        line-height: 1.6;
    }
`;

const values = [
    { title: 'Transparency', desc: 'We believe in open communication and honest relationships with our clients.' },
    { title: 'Excellence', desc: 'Striving for perfection in every pixel, every line of code, and every interaction.' },
    { title: 'Innovation', desc: 'Constantly pushing boundaries to discover new solutions to old problems.' },
];

const ValuesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            gsap.to(container.children, {
                opacity: 1,
                rotationX: 0,
                y: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 70%',
                }
            });
        }
    }, []);

    return (
        <Section>
            <Container>
                <Title>Our Values</Title>
                <CardsContainer ref={containerRef}>
                    {values.map((v, i) => (
                        <Card key={i}>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </Card>
                    ))}
                </CardsContainer>
            </Container>
        </Section>
    );
};

export default ValuesSection;
