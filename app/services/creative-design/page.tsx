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

export default function CreativeDesignPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>🎨 Creative Design</Title>
            <Subtitle>
              Eye-catching designs that capture attention and communicate your 
              message effectively across all mediums
            </Subtitle>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
              Design Services
            </h2>
            
            <Grid>
              <FeatureCard>
                <FeatureIcon>🎨</FeatureIcon>
                <FeatureTitle>Logo Design</FeatureTitle>
                <FeatureText>
                  Custom logo designs that represent your brand identity and leave 
                  a lasting impression on your audience.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>UI/UX Design</FeatureTitle>
                <FeatureText>
                  User-centered interface designs that provide seamless experiences 
                  and drive user engagement.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🌐</FeatureIcon>
                <FeatureTitle>Website Design</FeatureTitle>
                <FeatureText>
                  Beautiful, responsive website designs that convert visitors into 
                  customers and enhance your online presence.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📄</FeatureIcon>
                <FeatureTitle>Print Design</FeatureTitle>
                <FeatureText>
                  Professional print materials including brochures, business cards, 
                  posters, and packaging design.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Social Media Graphics</FeatureTitle>
                <FeatureText>
                  Engaging visual content optimized for social media platforms to 
                  boost your online engagement.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎬</FeatureIcon>
                <FeatureTitle>Motion Graphics</FeatureTitle>
                <FeatureText>
                  Animated graphics and visual effects that bring your brand story 
                  to life in dynamic ways.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Infographic Design</FeatureTitle>
                <FeatureText>
                  Data visualization and infographics that make complex information 
                  easy to understand and share.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📧</FeatureIcon>
                <FeatureTitle>Email Templates</FeatureTitle>
                <FeatureText>
                  Custom email designs that increase open rates and drive conversions 
                  for your campaigns.
                </FeatureText>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎁</FeatureIcon>
                <FeatureTitle>Packaging Design</FeatureTitle>
                <FeatureText>
                  Creative packaging solutions that make your products stand out on 
                  shelves and delight customers.
                </FeatureText>
              </FeatureCard>
            </Grid>

            <CTASection>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Elevate Your Brand's Design?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Let's create stunning visuals that make your brand unforgettable
              </p>
              <CTAButton href="/contact">Start Your Project</CTAButton>
            </CTASection>
          </Container>
        </ContentSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
