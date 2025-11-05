'use client';

import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 2rem;
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
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const AboutText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
`;

const AboutImage = styled.div`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
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
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const ImageSubtitle = styled.div`
  font-size: 1.5rem;
  opacity: 0.9;
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
