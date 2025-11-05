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

const StatsSection = styled.div`
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  padding: 5rem 2rem;
  border-radius: 32px;
  color: white;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 102, 255, 0.25);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
`;

const StatBox = styled.div``;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StatLabel = styled.div`
  font-size: 1.15rem;
  opacity: 0.95;
  font-weight: 500;
`;

const PlatformSection = styled.div`
  margin: 4rem 0;
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Platform = styled.div`
  padding: 2rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    border-color: #0066FF;
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 102, 255, 0.2);
  }
`;

const PlatformIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
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

export default function SocialMediaPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>📱 Social Media Marketing</Title>
            <Subtitle>
              Engage your audience across all platforms with creative content and 
              data-driven social media strategies
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#0f172a', letterSpacing: '-0.02em' }}>
              Our Services
            </h2>
            
            <Grid>
              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Strategy Development</FeatureTitle>
                <FeatureText>
                  Custom social media strategies aligned with your business goals 
                  and target audience behavior.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>✍️</FeatureIcon>
                <FeatureTitle>Content Creation</FeatureTitle>
                <FeatureText>
                  Engaging posts, graphics, videos, and stories that capture attention 
                  and drive engagement.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📅</FeatureIcon>
                <FeatureTitle>Content Calendar</FeatureTitle>
                <FeatureText>
                  Strategic planning and scheduling of content to maintain consistent 
                  presence across platforms.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>💬</FeatureIcon>
                <FeatureTitle>Community Management</FeatureTitle>
                <FeatureText>
                  Active engagement with your audience, responding to comments and 
                  building relationships.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📈</FeatureIcon>
                <FeatureTitle>Analytics & Reporting</FeatureTitle>
                <FeatureText>
                  Detailed performance tracking and insights to optimize your 
                  social media presence.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>💰</FeatureIcon>
                <FeatureTitle>Paid Advertising</FeatureTitle>
                <FeatureText>
                  Targeted ad campaigns to reach new audiences and drive conversions 
                  across social platforms.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <StatsSection>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
                Our Results
              </h2>
              <p style={{ fontSize: '1.3rem', opacity: '0.95', position: 'relative', zIndex: 1 }}>
                Proven track record of social media success
              </p>
              <StatsGrid>
                <StatBox>
                  <StatNumber>250%</StatNumber>
                  <StatLabel>Average Engagement Increase</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>10M+</StatNumber>
                  <StatLabel>Total Reach Generated</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>500K+</StatNumber>
                  <StatLabel>Followers Gained</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>95%</StatNumber>
                  <StatLabel>Client Satisfaction Rate</StatLabel>
                </StatBox>
              </StatsGrid>
            </StatsSection>

            <PlatformSection>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', textAlign: 'center', color: '#0f172a', letterSpacing: '-0.02em' }}>
                Platforms We Master
              </h2>
              <PlatformGrid>
                <Platform>
                  <PlatformIcon>📘</PlatformIcon>
                  <strong>Facebook</strong>
                </Platform>
                <Platform>
                  <PlatformIcon>📸</PlatformIcon>
                  <strong>Instagram</strong>
                </Platform>
                <Platform>
                  <PlatformIcon>🐦</PlatformIcon>
                  <strong>Twitter/X</strong>
                </Platform>
                <Platform>
                  <PlatformIcon>💼</PlatformIcon>
                  <strong>LinkedIn</strong>
                </Platform>
                <Platform>
                  <PlatformIcon>📹</PlatformIcon>
                  <strong>TikTok</strong>
                </Platform>
                <Platform>
                  <PlatformIcon>📌</PlatformIcon>
                  <strong>Pinterest</strong>
                </Platform>
              </PlatformGrid>
            </PlatformSection>

            <CTASection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0f172a', fontWeight: '800', letterSpacing: '-0.02em' }}>Ready to Grow Your Social Presence?</h2>
              <p style={{ fontSize: '1.3rem', color: '#475569', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Let's create a social media strategy that delivers results
              </p>
              <CTAButton href="/contact">Start Your Campaign</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
