'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ImageWrapper from '../Common/ImageWrapper';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: transparent;
  color: var(--white);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Tabs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  text-align: left;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => (props.$active ? 'var(--green)' : '#ccc')};
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--green);
  }
`;

const Display = styled.div`
  flex: 1.5;
  position: relative;
  min-height: 500px;
`;

const DisplayContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  
  &.active {
    opacity: 1;
    z-index: 1;
  }
  
  h3 {
    margin: 1.5rem 0;
    font-size: 2rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--link-color);
  }
`;

const sectors = [
  {
    id: 'finance',
    name: 'Finance & Banking',
    title: 'Revolutionizing Financial Transactions',
    desc: 'We provide secure, scalable infrastructure for next-generation banking.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'health',
    name: 'Healthcare',
    title: 'Digital Health Solutions',
    desc: 'Connecting patients and providers through seamless technology.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    title: 'Smart Retail Experiences',
    desc: 'Bridging the gap between physical and digital shopping.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
];

const SectorsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate content change
    if (displayRef.current) {
      const activeContent = displayRef.current.querySelector('.active');
      if (activeContent) {
        gsap.fromTo(activeContent,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }
    }
  }, [activeTab]);

  return (
    <Section>
      <Container>
        <Tabs>
          {sectors.map((s, i) => (
            <Tab key={s.id} $active={activeTab === i} onClick={() => setActiveTab(i)}>
              {s.name}
            </Tab>
          ))}
        </Tabs>
        <Display ref={displayRef}>
          {sectors.map((s, i) => (
            <DisplayContent key={s.id} className={activeTab === i ? 'active' : ''}>
              <ImageWrapper
                src={s.img}
                alt={s.title}
                width={800}
                height={500}
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }}
              />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </DisplayContent>
          ))}
        </Display>
      </Container>
    </Section>
  );
};

export default SectorsShowcase;
