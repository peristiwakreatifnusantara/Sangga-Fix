'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* WRAPPER */
const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

/* GARIS PEMBATAS DI ATAS */
const Divider = styled.div`
  width: 0%;
  height: 2px;
  margin: 0 auto 3rem auto;
  background: #222;
  opacity: 0;
`;

const Aurora = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 40%,
      rgba(0, 255, 150, 0.15),
      transparent 60%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(0, 180, 120, 0.12),
      transparent 70%
    );
  filter: blur(60px);
  opacity: 0.6;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`;

const Title = styled.h2`
  font-size: 3.6rem;
  text-align: center;
  color: var(--white);
  margin-bottom: 4rem;
  font-weight: 800;

  span {
    background: linear-gradient(90deg, #00d67a, #00f090);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div<{ taller?: boolean }>`
  flex: 1;
  padding: 3rem;
  border-radius: 22px;

  /* VISI lebih tinggi */
  min-height: ${(props) => (props.taller ? '420px' : '350px')};

  background: transparent;
  border: 1px solid #2f2f2f;
  box-shadow: 0 0 40px rgba(0, 200, 120, 0.07);

  transform: translateY(60px);
  opacity: 0;

  transition: transform 0.45s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 55px rgba(0, 255, 150, 0.15);
  }

  h3 {
    font-size: 2rem;
    color: #6acb24ff;
    margin-bottom: 1.3rem;
  }

  p {
    color: #000000ff;
    line-height: 1.7;
    font-size: 1.1rem;
  }
`;

const ValuesSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Divider animation (fade + expand)
    gsap.to(dividerRef.current, {
      width: "60%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: dividerRef.current,
        start: "top 80%",
      }
    });

    // Cards animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
        },
      });
    }
  }, []);

  return (
    <Section>
      <Aurora />

      <Container>

        {/* Divider Pembatas */}
        <Divider ref={dividerRef} />

        <Title>
          <span></span>Visi & Misi<span></span> Perusahaan
        </Title>

        <CardsWrapper ref={cardsRef}>

          {/* VISI - Lebih Tinggi */}
          <Card taller>
            <h3>Visi</h3>
            <p>
              Menjadi perusahaan yang profesional di industri jasa layanan dan
              properti, sehingga dapat menghasilkan laba yang optimal.
            </p>
          </Card>

          {/* MISI */}
          <Card>
            <h3>Misi</h3>
            <p>
              • Menjalankan usaha secara profesional. <br /><br />
              • Membantu stakeholders sehingga dapat memberikan nilai lebih terhadap
              pendapatan. <br /><br />
              • Membantu stakeholders dalam rangka mengembangkan Bisnis. <br /><br />
              • Meningkatkan kesejahteraan pensiunan BNI, khususnya dibidang kesehatan.
            </p>
          </Card>

        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default ValuesSection;
