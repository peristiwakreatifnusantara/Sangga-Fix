'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Image from 'next/image';
import Kantor from '../../../public/images/kantor.jpeg';

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 6rem;
  background: transparent;
  
  @media (max-width: 900px) {
    padding: 3rem 2rem;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 80vh;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 50vh;
    border-radius: 20px;
  }
`;

const ProfileHero = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <HeroSection>
      <ImageCard ref={cardRef}>
        <Image src={Kantor} alt="Kantor PT. SSB" priority />
      </ImageCard>
    </HeroSection>
  );
};

export default ProfileHero;
