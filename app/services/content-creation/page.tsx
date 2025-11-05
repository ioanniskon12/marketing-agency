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

export default function ContentCreationPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>✍️ Content Creation</Title>
            <Subtitle>
              Compelling content that tells your story, educates your audience, 
              and drives meaningful engagement
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
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

            <CTASection>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Tell Your Story?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
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
