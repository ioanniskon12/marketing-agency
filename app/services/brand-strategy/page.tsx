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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
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
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ProcessSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 2rem;
  border-radius: 20px;
  color: white;
  margin-top: 4rem;
`;

const ProcessTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Step = styled.div`
  text-align: center;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  color: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #f8f9fa;
  border-radius: 20px;
  margin-top: 4rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

export default function BrandStrategyPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>🎯 Brand Strategy</Title>
            <Subtitle>
              Build a powerful brand identity that resonates with your audience and 
              sets you apart from the competition
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Build Your Brand?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
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
