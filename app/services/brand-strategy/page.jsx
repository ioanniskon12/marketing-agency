'use client';

import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
  color: white;
`;

const ContentSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  padding: 2.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a2e;
`;

const FeatureText = styled.p`
  color: #546e7a;
  line-height: 1.8;
  font-size: 1.05rem;
`;

const ProcessSection = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 5rem 2rem;
  border-radius: 8px;
  color: white;
  margin-top: 4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProcessTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  color: white;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const Step = styled.div`
  text-align: center;
`;

const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  background: white;
  color: #2196F3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 auto 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const ImageSection = styled.div`
  margin: 4rem 0;
`;

const ImagePlaceholder = styled.div`
  height: 400px;
  background: #e8eaf6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #546e7a;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid #e0e0e0;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 4rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.4rem 3.5rem;
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.15rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }
`;

export default function BrandStrategyPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Brand Strategy</Title>
            <Subtitle>
              Build a powerful brand identity that resonates with your audience and
              sets you apart from the competition
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a1a2e' }}>
              What We Offer
            </h2>

            <Grid>
              <FeatureCard>
                <FeatureIcon>🎨</FeatureIcon>
                <FeatureTitle>Brand Identity</FeatureTitle>
                <FeatureText>
                  Create a cohesive visual identity including logo design, color palette,
                  typography, and brand guidelines that reflect your values.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Market Research</FeatureTitle>
                <FeatureText>
                  In-depth analysis of your target audience, competitors, and market
                  trends to position your brand effectively.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>💡</FeatureIcon>
                <FeatureTitle>Brand Positioning</FeatureTitle>
                <FeatureText>
                  Define your unique value proposition and position your brand to
                  stand out in a crowded marketplace.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📝</FeatureIcon>
                <FeatureTitle>Messaging Strategy</FeatureTitle>
                <FeatureText>
                  Develop consistent brand messaging and tone of voice that connects
                  with your audience across all touchpoints.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureTitle>Brand Guidelines</FeatureTitle>
                <FeatureText>
                  Comprehensive documentation ensuring consistent brand application
                  across all channels and materials.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🚀</FeatureIcon>
                <FeatureTitle>Launch Strategy</FeatureTitle>
                <FeatureText>
                  Strategic planning for brand launch or rebranding initiatives to
                  maximize impact and reach.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <ImageSection>
              <ImagePlaceholder>
                [Brand Strategy Service Image]
              </ImagePlaceholder>
            </ImageSection>

            <ProcessSection>
              <ProcessTitle>Our Process</ProcessTitle>
              <ProcessSteps>
                <Step>
                  <StepNumber>1</StepNumber>
                  <StepTitle>Discovery</StepTitle>
                  <p>Understanding your business, goals, and target audience</p>
                </Step>
                <Step>
                  <StepNumber>2</StepNumber>
                  <StepTitle>Research</StepTitle>
                  <p>Market analysis and competitive landscape review</p>
                </Step>
                <Step>
                  <StepNumber>3</StepNumber>
                  <StepTitle>Strategy</StepTitle>
                  <p>Developing positioning and messaging frameworks</p>
                </Step>
                <Step>
                  <StepNumber>4</StepNumber>
                  <StepTitle>Design</StepTitle>
                  <p>Creating visual identity and brand assets</p>
                </Step>
                <Step>
                  <StepNumber>5</StepNumber>
                  <StepTitle>Implementation</StepTitle>
                  <p>Launch and brand rollout across all channels</p>
                </Step>
              </ProcessSteps>
            </ProcessSection>

            <CTASection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e', fontWeight: '800' }}>Ready to Build Your Brand?</h2>
              <p style={{ fontSize: '1.3rem', color: '#546e7a', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Let's create a brand strategy that drives growth
              </p>
              <CTAButton href="/contact">Get Started Today</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
