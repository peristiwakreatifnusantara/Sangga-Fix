'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--green);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2.25rem;

  /* Animasi default */
  animation: pulse 1.5s infinite;
  transition: background 0.25s ease;

  /* Hover */
  &:hover {
    background: orange;
    animation: shake 0.4s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 255, 100, 0.5);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 15px rgba(0, 255, 100, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 255, 100, 0);
    }
  }

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    50% { transform: translateX(3px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
  }
`;
