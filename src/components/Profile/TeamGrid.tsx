'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWrapper from '../Common/ImageWrapper';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  
  h2 {
    font-size: 3rem;
    color: var(--Background); // Inverted since bg is white
    margin-bottom: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const MemberCard = styled.div`
  background: var(--light-gray);
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  text-align: center;
  padding-bottom: 1.5rem;
  
  h4 {
    margin-top: 1rem;
    color: var(--Background);
    font-size: 1.25rem;
  }
  
  p {
    color: var(--link-color);
    font-size: 0.9rem;
  }
`;

const team = [
  { name: 'John Doe', role: 'CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jane Smith', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
  { name: 'Mike Johnson', role: 'Lead Design', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sarah Wilson', role: 'CFO', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
];

const TeamGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      gsap.to(grid.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: grid,
          start: 'top 75%',
        }
      });
    }
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <h2>Our Leaders</h2>
          <p style={{ color: 'var(--link-color)' }}>Meeting the minds behind the magic.</p>
        </Header>
        <Grid ref={gridRef}>
          {team.map((member, i) => (
            <MemberCard key={i}>
              <ImageWrapper
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </MemberCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TeamGrid;
