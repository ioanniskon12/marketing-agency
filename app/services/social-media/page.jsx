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

const StatsSection = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 5rem 2rem;
  border-radius: 8px;
  color: white;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const StatBox = styled.div``;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: white;
`;

const StatLabel = styled.div`
  font-size: 1.15rem;
  opacity: 0.95;
  font-weight: 500;
  color: white;
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
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #2196F3;
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const PlatformIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
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

export default function SocialMediaPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Social Media Marketing</Title>
            <Subtitle>
              Engage your audience across all platforms with creative content and
              data-driven social media strategies
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a1a2e' }}>
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

            <ImageSection>
              <ImagePlaceholder>
                [Social Media Marketing Service Image]
              </ImagePlaceholder>
            </ImageSection>

            <StatsSection>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                Our Results
              </h2>
              <p style={{ fontSize: '1.3rem', opacity: '0.95' }}>
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
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', textAlign: 'center', color: '#1a1a2e' }}>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e', fontWeight: '800' }}>Ready to Grow Your Social Presence?</h2>
              <p style={{ fontSize: '1.3rem', color: '#546e7a', marginBottom: '2.5rem', lineHeight: '1.8' }}>
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
