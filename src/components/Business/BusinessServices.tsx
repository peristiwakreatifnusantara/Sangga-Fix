'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWrapper from '../Common/ImageWrapper';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: transparent;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: #1b1b1b;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;

  img {
    transition: transform 0.6s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  text-align: left;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1b1b1b;
    margin-bottom: 0.8rem;
    line-height: 1.4;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
  }
`;

const services = [
  {
    title: 'Jasa Persewaan Kendaraan Angkutan',
    desc: 'Solusi transportasi andal untuk kebutuhan logistik dan mobilitas perusahaan Anda dengan armada yang terawat.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pengelola Gedung',
    desc: 'Layanan manajemen gedung profesional untuk memastkan operasional properti Anda berjalan efisien dan optimal.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pelayanan Kebersihan',
    desc: 'Layanan kebersihan menyeluruh untuk lingkungan kerja yang sehat, higienis, dan nyaman bagi produktivitas.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Renovasi Gedung Dan Kantor',
    desc: 'Transformasi ruang kerja Anda dengan layanan renovasi yang mengutamakan fungsi, estetika, dan kualitas.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Konstruksi',
    desc: 'Pengerjaan konstruksi kokoh dan presisi, ditangani oleh tenaga ahli berpengalaman di bidang sipil.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pengamanan Gedung',
    desc: 'Sistem keamanan terpadu dan personel terlatih untuk melindungi aset serta memastikan keamanan lingkungan gedung.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Beli, Renovasi & Jual Properti',
    desc: 'Layanan end-to-end untuk investasi properti, mulai dari akuisisi, peningkatan nilai melalui renovasi, hingga penjualan.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Pengelola Limbah Elektronik & Equipment',
    desc: 'Penanganan limbah elektronik yang ramah lingkungan dan sesuai regulasi untuk masa depan yang lebih berkelanjutan.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Alih Daya SDM',
    desc: 'Penyediaan tenaga kerja profesional dan terlatih untuk berbagai posisi operasional dan administratif, mendukung efisiensi bisnis Anda.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  }
];

const BusinessServices = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.children;
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%'
          }
        }
      );
    }
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <h2>Layanan Kami</h2>
          <p>Solusi komprehensif untuk mendukung pertumbuhan bisnis Anda</p>
        </Header>
        <Grid ref={gridRef}>
          {services.map((service, i) => (
            <Card key={i}>
              <ImageContainer>
                <ImageWrapper
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </ImageContainer>
              <Content>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default BusinessServices;
