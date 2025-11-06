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

export default function VideoProductionPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Video Production</Title>
            <Subtitle>
              Professional video content that brings your brand to life and
              captivates your audience
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a1a2e' }}>
              Video Services
            </h2>

            <Grid>
              <FeatureCard>
                <FeatureIcon>🎥</FeatureIcon>
                <FeatureTitle>Corporate Videos</FeatureTitle>
                <FeatureText>
                  Professional company videos that showcase your brand, culture,
                  and values to clients and stakeholders.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📺</FeatureIcon>
                <FeatureTitle>Commercial Production</FeatureTitle>
                <FeatureText>
                  High-quality commercials for TV, social media, and digital
                  platforms that drive sales and brand awareness.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Social Media Videos</FeatureTitle>
                <FeatureText>
                  Short-form video content optimized for Instagram, TikTok,
                  Facebook, and other social platforms.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎓</FeatureIcon>
                <FeatureTitle>Explainer Videos</FeatureTitle>
                <FeatureText>
                  Animated or live-action videos that simplify complex concepts
                  and educate your audience.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎬</FeatureIcon>
                <FeatureTitle>Product Videos</FeatureTitle>
                <FeatureText>
                  Showcase your products in action with compelling demos and
                  testimonials that drive conversions.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎤</FeatureIcon>
                <FeatureTitle>Event Coverage</FeatureTitle>
                <FeatureText>
                  Professional filming and editing of conferences, launches,
                  and corporate events.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎨</FeatureIcon>
                <FeatureTitle>Motion Graphics</FeatureTitle>
                <FeatureText>
                  Dynamic animated graphics and visual effects that enhance
                  your video content.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📹</FeatureIcon>
                <FeatureTitle>Testimonial Videos</FeatureTitle>
                <FeatureText>
                  Authentic customer testimonials that build trust and credibility
                  for your brand.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>✂️</FeatureIcon>
                <FeatureTitle>Video Editing</FeatureTitle>
                <FeatureText>
                  Professional editing services to transform raw footage into
                  polished, engaging content.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <ImageSection>
              <ImagePlaceholder>
                [Video Production Service Image]
              </ImagePlaceholder>
            </ImageSection>

            <CTASection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e', fontWeight: '800' }}>Ready to Bring Your Vision to Life?</h2>
              <p style={{ fontSize: '1.3rem', color: '#546e7a', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Let's create video content that captivates and converts
              </p>
              <CTAButton href="/contact">Start Your Video Project</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
