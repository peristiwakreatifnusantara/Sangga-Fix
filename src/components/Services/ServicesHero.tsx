'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Section = styled.section`
  height: 90vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const Content = styled.div`
  z-index: 2;
  text-align: center;
  color: var(--white);
  max-width: 800px;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: var(--link-color);
  opacity: 0;
  transform: translateY(30px);
`;

const ServicesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Content animation
    const tl = gsap.timeline();
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to(descRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5');
  }, []);

  return (
    <Section ref={sectionRef}>
      <Content>
        <Title ref={titleRef}>Solusi Komprehensif untuk Pertumbuhan Bisnis</Title>
        <Description ref={descRef}>
          Dari manajemen fasilitas hingga solusi digital, kami mengintegrasikan keahlian dan teknologi untuk mengoptimalkan performa perusahaan Anda.
        </Description>
      </Content>
    </Section>
  );
};

export default ServicesHero;
