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

export default function VideoProductionPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>🎬 Video Production</Title>
            <Subtitle>
              Professional video content that brings your brand to life and 
              captivates your audience
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
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

            <CTASection>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Bring Your Vision to Life?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
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
