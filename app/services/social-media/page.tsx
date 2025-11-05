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

const StatsSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 2rem;
  border-radius: 20px;
  color: white;
  margin: 4rem 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const StatBox = styled.div``;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
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
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
`;

const PlatformIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
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
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
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
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                Our Results
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>
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
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', textAlign: 'center' }}>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Grow Your Social Presence?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
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
