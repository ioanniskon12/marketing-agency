'use client';

import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
`;

const AboutContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
`;

const AboutText = styled.p`
  color: #475569;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &:hover {
    border-color: rgba(0, 102, 255, 0.2);
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
`;

const FeatureText = styled.div`
  color: #0f172a;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
`;

const AboutImage = styled.div`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    filter: blur(40px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    filter: blur(60px);
  }
`;

const ImageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;

const ImageTitle = styled.div`
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ImageSubtitle = styled.div`
  font-size: 1.6rem;
  opacity: 0.95;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const features = [
  { icon: '✨', text: 'Creative Excellence' },
  { icon: '📊', text: 'Data-Driven Strategies' },
  { icon: '🤝', text: 'Collaborative Approach' },
  { icon: '⚡', text: 'Fast Turnaround' }
];

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <SectionTitle>About CreativeHub</SectionTitle>
          <AboutText>
            We're a team of passionate marketers, designers, and strategists dedicated to
            helping brands reach their full potential. With years of experience and a proven
            track record, we've helped hundreds of businesses transform their marketing.
          </AboutText>
          <AboutText>
            Our approach combines creativity with data-driven insights to deliver campaigns
            that not only look great but also drive measurable results. We believe in building
            long-term partnerships with our clients.
          </AboutText>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
        </AboutContent>
        <AboutImage>
          <ImageContent>
            <ImageTitle>10+</ImageTitle>
            <ImageSubtitle>Years of Excellence</ImageSubtitle>
          </ImageContent>
        </AboutImage>
      </Container>
    </AboutSection>
  );
}
