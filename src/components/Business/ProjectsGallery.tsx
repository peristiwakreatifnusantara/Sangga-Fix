'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWrapper from '../Common/ImageWrapper';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 2rem;
  background-color: transparent;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  color: var(--white);
  
  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #1b1b1b;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  opacity: 0;
  transform: translateY(50px);

  /* ZIGZAG: Genap row-reverse */
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    flex-direction: column !important;
    gap: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
  height: 400px;
  
  img {
    transition: transform 0.7s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 300px;
  }
`;

const Info = styled.div`
  flex: 1;
  
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1b1b1b;
    font-weight: 700;
  }

  h5 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--emerald);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const projects = [
  {
    title: 'Pengadaan Armada Operasional',
    cat: 'Jasa Persewaan Kendaraan',
    desc: 'Menyediakan lebih dari 50 unit armada operasional terbaru untuk perusahaan logistik multinasional, lengkap dengan sistem pemantauan GPS real-time dan layanan pemeliharaan rutin, memastikan efisiensi pengiriman meningkat sebesar 30%.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Maintenance Gedung Perkantoran',
    cat: 'Jasa Pengelola Gedung',
    desc: 'Kontrak pengelolaan fasilitas menyeluruh untuk gedung perkantoran 20 lantai di pusat Jakarta. Mencakup pemeliharaan sistem HVAC, kelistrikan, dan manajemen energi yang berhasil menurunkan biaya operasional hingga 15% per tahun.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Layanan Kebersihan Terpadu',
    cat: 'Jasa Pelayanan Kebersihan',
    desc: 'Implementasi standar kebersihan rumah sakit internasional untuk jaringan klinik kesehatan. Menggunakan bahan pembersih ramah lingkungan dan protokol sterilisasi ketat demi keamanan pasien dan staf medis.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Revitalisasi Kantor Cabang',
    cat: 'Jasa Renovasi',
    desc: 'Proyek renovasi 10 kantor cabang bank swasta dengan konsep modern dan open-space. Selesai tepat waktu dalam 3 bulan dengan zero accident, menciptakan lingkungan kerja yang lebih kolaboratif dan nyaman.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Konstruksi Fasilitas Industri',
    cat: 'Jasa Konstruksi',
    desc: 'Pembangunan gudang penyimpanan berkapasitas 5.000 ton dengan struktur baja bentang lebar. Dilengkapi lantai beton heavy-duty dan sistem ventilasi industri, mendukung operasional logistik berskala besar.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sistem Keamanan Gedung Pusat',
    cat: 'Jasa Pengamanan',
    desc: 'Penyediaan 24/7 personel keamanan bersertifikat dan integrasi sistem CCTV cerdas dengan AI detection untuk kantor pusat BUMN. Menjamin keamanan aset vital dan ketertiban area publik.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Investasi & Renovasi Properti',
    cat: 'Jual Beli Properti',
    desc: 'Akuisisi dan renovasi total ruko tua menjadi ruang usaha co-working space modern yang fully-furnished. Nilai aset meningkat 200% pasca-renovasi dan terjual dalam waktu singkat.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Pengolahan Limbah Elektronik',
    cat: 'Pengelola Limbah',
    desc: 'Kemitraan strategis dengan perusahaan teknologi untuk daur ulang 2 ton limbah elektronik per bulan. Memastikan pembuangan komponen berbahaya sesuai regulasi lingkungan hidup yang berlaku.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
];

const ProjectsGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = galleryRef.current?.children;
      if (items) {
        Array.from(items).forEach((item) => {
          gsap.fromTo(item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
              }
            }
          );
        });
      }
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <h2>Featured Projects</h2>
          <p>Portofolio unggulan dari dedikasi kami dalam memberikan layanan terbaik di berbagai sektor industri.</p>
        </Header>
        <Gallery ref={galleryRef}>
          {projects.map((p, i) => (
            <ProjectItem key={i}>
              <ImageContainer>
                <ImageWrapper
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  widthCSS="100%"
                  heightCSS="100%"
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
              <Info>
                <h5>{p.cat}</h5>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </Info>
            </ProjectItem>
          ))}
        </Gallery>
      </Container>
    </Section>
  );
};

export default ProjectsGallery;
