'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWrapper from '../Common/ImageWrapper';
import Masauddin from '../../../public/images/masaudin.png';
import Dadangsuryawan from '../../../public/images/dadang.png';
import NusyirwanIsmail from '../../../public/images/profile.png';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
    padding: 6rem 2rem;
    overflow: hidden;
  `;

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
  `;

const Header = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 3rem;
      font-weight: 800;
      color: #1b1b1b;
    }

    p {
      color: #666;
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  `;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  `;

/* CARD */
const PersonCard = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 18px;
    cursor: pointer;

    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

    opacity: 0;
    transform: translateY(40px);

    /* ACTIVE STATE (Click) */
    &.active {
      flex-direction: row-reverse;
      box-shadow: 0 16px 42px rgba(0, 0, 0, 0.13);
      background: rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      &.active {
        flex-direction: column; 
      }
    }
  `;

const Photo = styled.div`
    min-width: 200px;
    height: 250px;

    border-radius: 14px;
    overflow: hidden;

    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
    transition: 0.6s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

const Info = styled.div`
    flex: 1;
    transition: 0.6s ease;

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #1b1b1b;
      margin-bottom: 0.2rem;
    }

    h4 {
      font-size: 1.1rem;
      color: #3d7c74;
      font-weight: 600;
      margin-bottom: 0.9rem;
    }

    p.desc {
      color: #555;
      line-height: 1.65;
      font-size: 1rem;
      transition: opacity 0.4s ease, max-height 0.4s ease;
      max-height: 100px; /* arbitrary height to allow animation */
      opacity: 1;
    }

    ul.experience {
      margin-top: 0.7rem;
      padding-left: 1.2rem;
      color: #444;
      font-size: 1rem;
      line-height: 1.65;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: opacity 0.6s ease, max-height 0.6s ease;
    }

    /* Saat active card → deskripsi hilang, experience muncul */
    ${PersonCard}.active & {
      p.desc {
        opacity: 0;
        max-height: 0;
        margin: 0;
      }

      ul.experience {
        opacity: 1;
        max-height: 500px; /* large enough to fit content */
        margin-top: 1rem;
      }
    }
  `;

const team = [
  {
    title: "Komisaris",
    name: "Nusyirwan Ismail",
    desc:
      "Komisaris bertanggung jawab dalam memberikan arahan strategis dan memastikan perusahaan berjalan sesuai prinsip tata kelola.",
    experience: [
      "Pengalaman kerja di Bank BNI 1946 30 tahun, sebagai Analis Kredit,Marketing Funding, Control Intern, Pemimpin Bidang Operasional,Pemimpin Cabang, Pemimpin Pengawasan PT . Tri Handayani Utama,Direktur Keuangan PT . Swadharma Griya Satya, Bidang Penghimpunan Yayasan Bamuis BNI, Bendahara Induk Koperasi Swadharma Sejahtera Bersama."
    ],
    img:
      NusyirwanIsmail
  },
  {
    title: "Direktur Utama",
    name: "Dadang Suryawan",
    desc:
      "Direktur Utama memimpin arah operasional dan strategi perusahaan secara keseluruhan dengan visi kuat.",
    experience: [
      "Pengalaman kerja di Bank BNI 1946 30 tahun, sebagai Analis Kredit, Pengelola, Pemimpin Bidang Pelayanan Nasabah, Pemimpin Bidang Operasional, Pemimpin Cabang, Head of Consumer & Retail Banking, Head of Network & Services, Financial Advisor di PT . Deli Pratama Coal (Sinar Deli Group), Direktur Operasional di PT . Swa Indomedika Prima, Direktur Utama di PT . Swa Indomedika Prima."
    ],
    img:
      Dadangsuryawan
  },
  {
    title: "Direktur Operasional",
    name: "Masauddin",
    desc:
      "Bertanggung jawab memastikan seluruh proses bisnis berjalan efektif dan efisien.",
    experience: [
      "Pengalaman kerja di Bank BNI 1946 29 tahun, sebagai Pemasaran Bisnis, Analis Kredit, Superviser Logistik, Team Task Force Call Center, Team Task Force NCB, Manager Sentra Kas, Department Head Cash Center.",
      "General Manager Operasional PT . Swadharma Sarana mformatikaI, Thn.2022",
      "Direktur Utama PT Swadharma Sanggah Buana), Thn 2023-2025",
      "Keta Umum Perhimpunan Kasir Bank-Jabodetabek (PERKAJA) 2016-2021"
    ],
    img:
      Masauddin
  }
];

const TeamStructure = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = blockRef.current?.children;
    if (items) {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.35,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: blockRef.current,
          start: 'top 75%'
        }
      });
    }
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Header>
          <h2>Struktur Kepemimpinan</h2>
          <p>Komisaris • Direktur Utama • Direktur Operasional</p>
        </Header>

        <Block ref={blockRef}>
          {team.map((person, i) => (
            <PersonCard
              key={i}
              className={activeIndex === i ? 'active' : ''}
              onClick={() => handleCardClick(i)}
            >
              <Photo>
                <ImageWrapper
                  src={person.img}
                  alt={person.name}
                  width={500}
                  height={500}
                />
              </Photo>

              <Info>
                <h3>{person.title}</h3>
                <h4>{person.name}</h4>

                <p className="desc">{person.desc}</p>

                <ul className="experience">
                  {person.experience.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </Info>
            </PersonCard>
          ))}
        </Block>
      </Container>
    </Section>
  );
};

export default TeamStructure;
