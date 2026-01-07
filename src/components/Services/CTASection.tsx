'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Section = styled.section`
  padding: 8rem 2rem;
  background-color: var(--Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 4rem;
  color: var(--white);
  margin-bottom: 3rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1.5rem 3rem;
  font-size: 1.25rem;
  background: var(--emerald);
  color: #000;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
`;

const CTASection = () => {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const btn = btnRef.current;
        if (btn) {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        }
    }, []);

    return (
        <Section>
            <Title>Ready to Transform Your Business?</Title>
            <Button ref={btnRef}>Get Started Now</Button>
        </Section>
    );
};

export default CTASection;
