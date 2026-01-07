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
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 0rem;
  text-align: center;
  color: var(--white);
  
  h2 {
    font-size: 3rem;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.div<{ $offset?: boolean }>`
  position: relative;
  margin-top: ${(props) => (props.$offset ? '4rem' : '0')};
  
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  
  img {
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Info = styled.div`
  color: var(--white);
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--link-color);
  }
`;

const projects = [
  { title: 'Project Alpha', cat: 'FinTech', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
  { title: 'Project Beta', cat: 'HealthTech', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
  { title: 'Project Gamma', cat: 'E-commerce', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Project Delta', cat: 'Infrastructure', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
];

const ProjectsGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      // Parallax effect for offset items
      const offsetItems = gallery.querySelectorAll('.offset-item');

      offsetItems.forEach(item => {
        gsap.to(item, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <h2>Featured Projects</h2>
        </Header>
        <Gallery ref={galleryRef}>
          {projects.map((p, i) => (
            <ProjectItem key={i} $offset={i % 2 !== 0} className={i % 2 !== 0 ? 'offset-item' : ''}>
              <ImageContainer>
                <ImageWrapper
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </ImageContainer>
              <Info>
                <h4>{p.title}</h4>
                <p>{p.cat}</p>
              </Info>
            </ProjectItem>
          ))}
        </Gallery>
      </Container>
    </Section>
  );
};

export default ProjectsGallery;
