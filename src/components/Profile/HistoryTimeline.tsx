'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: -5rem 2rem;
  background-color: var(--Background);
  position: relative;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const LineOffset = styled.div`
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
    
    @media (min-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
    }
`;

const ProgressLine = styled.div`
    position: absolute;
    left: 20px;
    top: 0;
    width: 2px;
    background: var(--green);
    height: 0%;
    
    @media (min-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Item = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  justify-content: ${(props) => (props.$align === 'left' ? 'flex-end' : 'flex-start')};
  padding: 2rem 0;
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const Content = styled.div`
  width: 45%;
  background: var(--light-gray);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(50px);
  color: var(--white);

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: var(--green);
  }
`;

const milestones = [
    { year: '1953', title: 'Foundation', desc: 'PT . Swadharma Sangga Buana merupakan anak perusahaan Yang didirikan oleh yayasan Danar Dana Swadharma, PT . Bank Negara Indonesia (Persero), Tbk.' },
    { year: '1953', title: 'Journey', desc: 'Perjalanan PT .SSB, berawal dari bisnis dibidang Perhotelan sejak tahun 1953, berlokasi di Cipanas– Cianjur dan terus berkembang hingga saat ini menjadi Resort & Convention Hotel.' },
    { year: '2012', title: 'Beginning', desc: 'Seiring dengan perkembangan bisnis akan berbagai kebutuhan berbagai macam jasa layanan, tahun 2012 bisnis BM-TAD (jasa layanan kebersihan dan pengamanan gedung kantor, pengelolaan tenaga outsourcing).' },
    { year: '2013', title: 'Innovating', desc: 'Tahun 2013membuka jasa persewaan kendaraan Pick Up service uang, kendaraanoperasional mitra bisnis.' },
    { year: '2014', title: 'Expanding', desc: ' PT . SSB juga menggeluti bisnis di bidang properti (pembangunan perumahan,jual beli dan renovasi properti), pengelolaan limbah elektronik dan equipment,pekerjaan renovasi bangunan gedung dan kantor, jasa pemeliharaan dankebersihan ruang ATM, berikut AC dan elektrikal lainnya.' },
];

const HistoryTimeline = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const line = lineRef.current;

        // Animate the line
        gsap.to(line, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            }
        });

        // Animate items
        itemsRef.current.forEach((item, i) => {
            if (item) {
                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%', // When top of item hits 80% viewport
                        toggleActions: 'play none none reverse'
                    }
                });
            }
        });

    }, []);

    return (
        <Section ref={sectionRef}>
            <TimelineContainer>
                <LineOffset />
                <ProgressLine ref={lineRef} />
                {milestones.map((m, i) => (
                    <Item key={i} $align={i % 2 === 0 ? 'left' : 'right'}>
                        <Content ref={el => itemsRef.current[i] = el}>
                            <h3>{m.year} - {m.title}</h3>
                            <p>{m.desc}</p>
                        </Content>
                    </Item>
                ))}
            </TimelineContainer>
        </Section>
    );
};

export default HistoryTimeline;
