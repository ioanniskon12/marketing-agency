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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

export default function DigitalMarketingPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Digital Marketing</Title>
            <Subtitle>
              Comprehensive digital marketing campaigns that drive traffic, generate
              leads, and boost conversions
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a1a2e' }}>
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

            <ImageSection>
              <ImagePlaceholder>
                [Digital Marketing Service Image]
              </ImagePlaceholder>
            </ImageSection>

            <CTASection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e', fontWeight: '800' }}>Ready to Scale Your Digital Presence?</h2>
              <p style={{ fontSize: '1.3rem', color: '#546e7a', marginBottom: '2.5rem', lineHeight: '1.8' }}>
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
