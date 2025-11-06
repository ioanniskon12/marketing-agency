'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%);
  z-index: 0;
`;

const HeroImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 600px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(33, 150, 243, 0.2);
  z-index: 0;

  &::after {
    content: 'Hero Image Area';
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
  background: rgba(33, 150, 243, 0.15);
  border: 1px solid rgba(33, 150, 243, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #2196F3;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

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
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease 0.1s backwards;
  letter-spacing: -0.03em;
`;

const Highlight = styled.span`
  color: #2196F3;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 3px;
    background: #2196F3;
    border-radius: 2px;
    opacity: 0.5;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.85);
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
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1.3rem 3rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #2196F3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
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
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #2196F3;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #2196F3;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: #2196F3;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <HeroImagePlaceholder />
      <HeroBackground />

      <HeroContent>
        <Badge>
          #1 Marketing Agency 2025
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
