'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Image from 'next/image';
import logoPT from '../.. /../../../public/logo.png';

const HeroSection = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 3rem 2rem;
    height: auto;
  }
`;

/* Soft Green Aurora Background */
const Aurora = styled.div`
  position: absolute;
  top: 10%;
  left: -10%;
  width: 120%;
  height: 120%;
  filter: blur(60px);
  z-index: 0;
`;

const LeftSide = styled.div`
margin-right: 2rem;
  flex: 1;
  z-index: 2;
`;

const RightSide = styled.div`
margin-bottom: 12rem;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlassCircle = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-top: -13rem;
  color: #111;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(40px);

  span {
    color: #00c763ff;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #000000ff;
  max-width: 500px;
  opacity: 0;
  transform: translateY(40px);
`;

const ProfileHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: 'power4.out',
    });

    // Subtitle animation
    gsap.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay: 0.3,
      ease: 'power3.out',
    });

    // Floating Logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'ease.inOut',
    });
  }, []);

  return (
    <HeroSection>
      <Aurora />

      {/* LEFT SIDE */}
      <LeftSide>
        <Title ref={titleRef}>
          <span>PT. Swadharma Sangga Buana</span>
        </Title>

        <Subtitle ref={subtitleRef}>
          PT. Swadharma Sanggah Buana hadir sebagai mitra terpercaya yang menyediakan layanan operasional terpadu mulai dari alih daya, penyewaan kantor, hingga kendaraan untuk membantu perusahaan bekerja lebih efisien, hemat waktu, dan terstruktur. Dengan dukungan tenaga profesional, armada yang terawat, serta sistem layanan yang responsif, kami memastikan setiap kebutuhan operasional klien berjalan lancar dan berkualitas. Komitmen kami adalah memberikan kemudahan, keandalan, dan efektivitas jangka panjang, sehingga perusahaan dapat fokus pada pertumbuhan dan mencapai kinerja terbaiknya.
        </Subtitle>
      </LeftSide>

      {/* RIGHT SIDE */}
      <RightSide>
        <GlassCircle />
        <div ref={logoRef} style={{ position: 'relative', zIndex: 3 }}>
          <Image
            src={logoPT}
            alt="Logo PT"
            width={360}
            height={360}
            style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,200,100,0.4))' }}
          />
        </div>
      </RightSide>
    </HeroSection>
  );
};

export default ProfileHero;
