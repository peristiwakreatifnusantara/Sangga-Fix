'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  background-color: var(--Background);
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
`;

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Wandering animation
            gsap.to('.common-bg-circle', {
                x: 'random(-100, 100)',
                y: 'random(-100, 100)',
                scale: 'random(0.8, 1.2)',
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 1
            });

            // Parallax scroll animation
            gsap.utils.toArray<HTMLElement>('.parallax-layer').forEach((layer, i) => {
                const speed = i === 0 ? 100 : -100; // Move layers in different directions/speeds
                gsap.to(layer, {
                    y: speed,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: document.body,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Container ref={containerRef}>
            <div className="parallax-layer" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Circle className="common-bg-circle" style={{ width: '600px', height: '500px', background: 'var(--green)', top: '-10%', left: '-10%' }} />
            </div>
            <div className="parallax-layer" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Circle className="common-bg-circle" style={{ width: '400px', height: '400px', background: 'var(--emerald)', bottom: '-10%', right: '-10%' }} />
            </div>
        </Container>
    );
};

export default AnimatedBackground;
