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
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
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
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
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
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 102, 255, 0.15);
    border-color: #0066FF;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0f172a;
  letter-spacing: -0.01em;
`;

const FeatureText = styled.p`
  color: #475569;
  line-height: 1.8;
  font-size: 1.05rem;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 32px;
  margin-top: 4rem;
  border: 1px solid #e2e8f0;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.4rem 3.5rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  color: white;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.15rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);
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
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#0f172a', letterSpacing: '-0.02em' }}>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0f172a', fontWeight: '800', letterSpacing: '-0.02em' }}>Ready to Scale Your Digital Presence?</h2>
              <p style={{ fontSize: '1.3rem', color: '#475569', marginBottom: '2.5rem', lineHeight: '1.8' }}>
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
