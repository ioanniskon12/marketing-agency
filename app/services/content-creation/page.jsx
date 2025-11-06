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

export default function ContentCreationPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Content Creation</Title>
            <Subtitle>
              Compelling content that tells your story, educates your audience,
              and drives meaningful engagement
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a1a2e' }}>
              Content Services
            </h2>

            <Grid>
              <FeatureCard>
                <FeatureIcon>📝</FeatureIcon>
                <FeatureTitle>Blog Writing</FeatureTitle>
                <FeatureText>
                  SEO-optimized blog posts that educate your audience and drive
                  organic traffic to your website.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📄</FeatureIcon>
                <FeatureTitle>Copywriting</FeatureTitle>
                <FeatureText>
                  Persuasive copy for websites, landing pages, and marketing materials
                  that convert readers into customers.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Social Media Content</FeatureTitle>
                <FeatureText>
                  Engaging posts and captions designed to spark conversations and
                  grow your social media following.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📧</FeatureIcon>
                <FeatureTitle>Email Newsletters</FeatureTitle>
                <FeatureText>
                  Informative and engaging email content that keeps your audience
                  connected with your brand.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📖</FeatureIcon>
                <FeatureTitle>E-books & Whitepapers</FeatureTitle>
                <FeatureText>
                  In-depth content that establishes your authority and generates
                  qualified leads.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureTitle>Case Studies</FeatureTitle>
                <FeatureText>
                  Compelling success stories that showcase your expertise and
                  build trust with potential clients.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎙️</FeatureIcon>
                <FeatureTitle>Podcast Scripts</FeatureTitle>
                <FeatureText>
                  Engaging scripts and show notes for podcast episodes that keep
                  listeners coming back.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📹</FeatureIcon>
                <FeatureTitle>Video Scripts</FeatureTitle>
                <FeatureText>
                  Compelling scripts for promotional videos, explainers, and
                  social media content.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Content Strategy</FeatureTitle>
                <FeatureText>
                  Comprehensive content strategies aligned with your business
                  goals and audience needs.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <ImageSection>
              <ImagePlaceholder>
                [Content Creation Service Image]
              </ImagePlaceholder>
            </ImageSection>

            <CTASection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e', fontWeight: '800' }}>Ready to Tell Your Story?</h2>
              <p style={{ fontSize: '1.3rem', color: '#546e7a', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Let's create content that resonates with your audience
              </p>
              <CTAButton href="/contact">Start Creating Content</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
