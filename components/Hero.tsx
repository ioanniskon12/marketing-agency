'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const GeometricShape = styled.div<{ $top?: string; $left?: string; $right?: string; $bottom?: string; $size?: string; $color?: string; $rotation?: string }>`
  position: absolute;
  width: ${props => props.$size || '300px'};
  height: ${props => props.$size || '300px'};
  top: ${props => props.$top || 'auto'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};
  background: ${props => props.$color || 'rgba(102, 126, 234, 0.1)'};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: rotate(${props => props.$rotation || '0deg'});
  animation: float 20s ease-in-out infinite;
  z-index: 0;

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
  padding: 0.7rem 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #667eea;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease;

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
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease 0.1s backwards;
  letter-spacing: -0.02em;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s backwards;
  line-height: 1.6;
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
  padding: 1.2rem 2.8rem;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1.2rem 2.8rem;
  background: white;
  color: #0a0a0a;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease 0.4s backwards;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <GeometricShape $top="10%" $left="5%" $size="400px" $color="rgba(102, 126, 234, 0.08)" $rotation="25deg" />
      <GeometricShape $bottom="15%" $right="8%" $size="350px" $color="rgba(118, 75, 162, 0.08)" $rotation="-15deg" />
      <GeometricShape $top="50%" $left="80%" $size="200px" $color="rgba(102, 126, 234, 0.06)" $rotation="45deg" />
      
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
