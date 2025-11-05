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

export default function DigitalMarketingPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>📈 Digital Marketing</Title>
            <Subtitle>
              Comprehensive digital marketing campaigns that drive traffic, generate 
              leads, and boost conversions
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
              Our Expertise
            </h2>
            
            <Grid>
              <FeatureCard>
                <FeatureIcon>🔍</FeatureIcon>
                <FeatureTitle>SEO Optimization</FeatureTitle>
                <FeatureText>
                  Improve your search engine rankings and drive organic traffic 
                  with our proven SEO strategies.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>💰</FeatureIcon>
                <FeatureTitle>PPC Advertising</FeatureTitle>
                <FeatureText>
                  Strategic paid advertising campaigns on Google Ads, Facebook, and 
                  other platforms for maximum ROI.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📧</FeatureIcon>
                <FeatureTitle>Email Marketing</FeatureTitle>
                <FeatureText>
                  Targeted email campaigns that nurture leads and drive customer 
                  engagement and retention.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureTitle>Conversion Optimization</FeatureTitle>
                <FeatureText>
                  Data-driven optimization to increase conversion rates and maximize 
                  the value of your traffic.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Analytics & Reporting</FeatureTitle>
                <FeatureText>
                  Comprehensive tracking and insights to measure performance and 
                  optimize your marketing efforts.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🤖</FeatureIcon>
                <FeatureTitle>Marketing Automation</FeatureTitle>
                <FeatureText>
                  Streamline your marketing processes with automation tools that 
                  save time and improve results.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🛒</FeatureIcon>
                <FeatureTitle>E-commerce Marketing</FeatureTitle>
                <FeatureText>
                  Specialized strategies for online stores to increase sales and 
                  customer lifetime value.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Mobile Marketing</FeatureTitle>
                <FeatureText>
                  Reach customers on their mobile devices with optimized campaigns 
                  and experiences.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎥</FeatureIcon>
                <FeatureTitle>Video Marketing</FeatureTitle>
                <FeatureText>
                  Leverage the power of video content to engage audiences and drive 
                  conversions across platforms.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <CTASection>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale Your Digital Presence?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Let's create a digital marketing strategy that delivers measurable results
              </p>
              <CTAButton href="/contact">Get Your Free Consultation</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
