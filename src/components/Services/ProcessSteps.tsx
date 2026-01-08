'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 2rem;
  color: var(--Background);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 5rem;
  
  h2 {
    font-size: 3rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 50px;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #ccc;
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  .fill {
    width: 0%;
    height: 100%;
    background: var(--green);
  }
`;

const Step = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  
  .circle {
    width: 100px;
    height: 100px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
    border: 3px solid transparent;
    transition: all 0.3s;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 250px;
    color: var(--link-color);
  }
`;

const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Memahami tantangan dan tujuan unik bisnis Anda.' },
  { num: '02', title: 'Strategi', desc: 'Mengembangkan peta jalan yang disesuaikan untuk kesuksesan.' },
  { num: '03', title: 'Implementasi', desc: 'Mengeksekusi rencana dengan presisi dan keahlian.' },
];

const ProcessSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const stepsEls = container.querySelectorAll('.step');
      const lineFill = container.querySelector('.fill');

      gsap.to(lineFill, {
        width: '100%',
        duration: 2,
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
        }
      });

      gsap.to(stepsEls, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.5,
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
        <Header>
          <h2>Cara Kerja Kami</h2>
        </Header>
        <StepsContainer ref={containerRef}>
          <Line><div className="fill"></div></Line>
          {steps.map((s, i) => (
            <Step key={i} className="step">
              <div className="circle">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </Step>
          ))}
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default ProcessSteps;
