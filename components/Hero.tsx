'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const GeometricShape = styled.div<{ $top?: string; $left?: string; $right?: string; $bottom?: string; $size?: string; $gradient?: string; $rotation?: string }>`
  position: absolute;
  width: ${props => props.$size || '300px'};
  height: ${props => props.$size || '300px'};
  top: ${props => props.$top || 'auto'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};
  background: ${props => props.$gradient || 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)'};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: rotate(${props => props.$rotation || '0deg'});
  animation: float 20s ease-in-out infinite;
  z-index: 0;
  filter: blur(40px);

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(${props => props.$rotation || '0deg'}); }
    50% { transform: translate(30px, -30px) rotate(${props => props.$rotation ? `calc(${props.$rotation} + 10deg)` : '10deg'}); }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border: 2px solid rgba(0, 102, 255, 0.2);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #0066FF;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.15);

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease 0.1s backwards;
  letter-spacing: -0.03em;
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
    border-radius: 2px;
    opacity: 0.3;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #475569;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s backwards;
  line-height: 1.7;
  font-weight: 400;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.3s backwards;
  margin-bottom: 5rem;
`;

const PrimaryButton = styled(Link)`
  padding: 1.3rem 3rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1.3rem 3rem;
  background: white;
  color: #0f172a;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #0066FF;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 102, 255, 0.15);
    color: #0066FF;
  }

  &:active {
    transform: translateY(0);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease 0.4s backwards;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 2.5rem 2rem;
  border-radius: 24px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0066FF, #6366F1, #EC4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #0066FF;
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 102, 255, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <GeometricShape
        $top="10%"
        $left="5%"
        $size="500px"
        $gradient="linear-gradient(135deg, rgba(0, 102, 255, 0.12) 0%, rgba(99, 102, 241, 0.12) 100%)"
        $rotation="25deg"
      />
      <GeometricShape
        $bottom="10%"
        $right="5%"
        $size="450px"
        $gradient="linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)"
        $rotation="-15deg"
      />
      <GeometricShape
        $top="50%"
        $left="75%"
        $size="300px"
        $gradient="linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(0, 102, 255, 0.08) 100%)"
        $rotation="45deg"
      />

      <HeroContent>
        <Badge>
          ✨ #1 Marketing Agency 2025
        </Badge>
        <HeroTitle>
          Transform Your Brand<br />with <Highlight>Creative Marketing</Highlight>
        </HeroTitle>
        <HeroSubtitle>
          We craft compelling digital experiences that drive real results. From strategy to execution,
          we're your trusted partner in growth.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton href="/contact">
            Start Your Project
          </PrimaryButton>
          <SecondaryButton href="/services/brand-strategy">
            Explore Services
          </SecondaryButton>
        </HeroButtons>
        <Stats>
          <StatCard>
            <StatNumber>200+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>150+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfaction Rate</StatLabel>
          </StatCard>
        </Stats>
      </HeroContent>
    </HeroSection>
  );
}
