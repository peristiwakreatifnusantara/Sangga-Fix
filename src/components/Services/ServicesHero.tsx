'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Section = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  background-color: transparent;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  
  h1 {
    font-size: 5rem;
    color: var(--white);
    line-height: 1;
    margin-bottom: 2rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    
    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
  }
  
  p {
      font-size: 1.25rem;
      color: var(--link-color);
      transform: translateY(20px);
      opacity: 0;
  }
`;

const Visual = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  
  .box {
    width: 400px;
    height: 500px;
    background: var(--green);
    border-radius: 30px;
    transform: translateX(100px) rotate(10deg);
    opacity: 0;
  }
`;

const ServicesHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.from(titleRef.current, { y: 100, opacity: 0 })
      .to(textRef.current, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
      .to(boxRef.current, { x: 0, rotation: 0, opacity: 1 }, '-=1');

  }, []);

  return (
    <Section>
      <Content>
        <h1 ref={titleRef}>Solutions<br />That Scale</h1>
        <p ref={textRef}>End-to-end services designed to help you navigate the digital landscape with confidence and speed.</p>
      </Content>
      <Visual>
        <div ref={boxRef} className="box"></div>
      </Visual>
    </Section>
  );
};

export default ServicesHero;
