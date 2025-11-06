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
  color: #1a1a2e;
  letter-spacing: -0.03em;
`;

const AboutText = styled.p`
  color: #546e7a;
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
  background: rgba(33, 150, 243, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    border-color: rgba(33, 150, 243, 0.3);
    transform: translateX(8px);
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.15);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);
`;

const FeatureText = styled.div`
  color: #1a1a2e;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
`;

const AboutImage = styled.div`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(33, 150, 243, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%);
    z-index: 1;
  }
`;

const ImageContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;
`;

const ImageTitle = styled.div`
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1;
  color: #2196F3;
`;

const ImageSubtitle = styled.div`
  font-size: 1.6rem;
  opacity: 0.95;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);
`;

const TeamPhotoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
  font-weight: 600;
  z-index: 0;

  &::after {
    content: 'Team Photo Placeholder';
  }
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
          <TeamPhotoPlaceholder />
          <ImageContent>
            <ImageTitle>10+</ImageTitle>
            <ImageSubtitle>Years of Excellence</ImageSubtitle>
          </ImageContent>
        </AboutImage>
      </Container>
    </AboutSection>
  );
}
