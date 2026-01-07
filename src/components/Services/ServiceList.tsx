'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: var(--Background);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ServiceItem = styled.div`
  border-bottom: 1px solid #333;
  padding: 2rem 0;
  cursor: pointer;
  position: relative;
  
  &:first-child {
    border-top: 1px solid #333;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    font-size: 2rem;
    color: var(--white);
    transition: color 0.3s ease;
  }
  
  span {
    color: var(--green);
    font-size: 2rem;
  }
  
  &:hover h3 {
    color: var(--green);
  }
`;

const ItemContent = styled.div`
  height: 0;
  overflow: hidden;
  
  p {
    padding-top: 1.5rem;
    color: var(--link-color);
    font-size: 1.1rem;
    max-width: 600px;
  }
`;

const services = [
    { title: 'Digital Transformation', desc: 'Reimagining business processes with modern digital tools.' },
    { title: 'Cloud Infrastructure', desc: 'Scalable, secure, and efficient cloud solutions for your enterprise.' },
    { title: 'Data Analytics', desc: 'Turning raw data into actionable insights for better decision making.' },
    { title: 'Cybersecurity', desc: 'Protecting your digital assets with state-of-the-art security protocols.' },
];

const ServiceList = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        contentRefs.current.forEach((el, i) => {
            if (el) {
                if (i === openIndex) {
                    gsap.to(el, { height: 'auto', duration: 0.5, ease: 'power2.out' });
                } else {
                    gsap.to(el, { height: 0, duration: 0.5, ease: 'power2.in' });
                }
            }
        });
    }, [openIndex]);

    return (
        <Section>
            <Container>
                {services.map((s, i) => (
                    <ServiceItem key={i} onClick={() => setOpenIndex(prev => prev === i ? null : i)}>
                        <ItemHeader>
                            <h3>{s.title}</h3>
                            <span>{openIndex === i ? '-' : '+'}</span>
                        </ItemHeader>
                        <ItemContent ref={el => contentRefs.current[i] = el}>
                            <p>{s.desc}</p>
                        </ItemContent>
                    </ServiceItem>
                ))}
            </Container>
        </Section>
    );
};

export default ServiceList;
