'use client';

import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  color: white;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const TestimonialCard = styled.div`
  background: #f5f5f5;
  padding: 2.5rem;
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 6rem;
    color: #2196F3;
    opacity: 0.2;
    font-family: Georgia, serif;
  }
`;

const Rating = styled.div`
  color: #ffd700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: #1a1a2e;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 2rem;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e0e0e0;
`;

const ClientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e8eaf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  font-weight: 600;
  color: #546e7a;
  border: 1px solid #e0e0e0;
`;

const ClientDetails = styled.div``;

const ClientName = styled.div`
  font-weight: 700;
  color: #1a1a2e;
  font-size: 1.1rem;
`;

const ClientRole = styled.div`
  color: #546e7a;
  font-size: 0.95rem;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 5rem 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  margin: 4rem 0;
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
  font-size: 1.1rem;
  opacity: 0.9;
  color: white;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const testimonials = [
  {
    text: "Working with CreativeHub transformed our brand. Their strategic approach and creative execution exceeded all our expectations. Our engagement is up 400%!",
    name: "Jennifer Smith",
    role: "CEO, TechStart Inc.",
    rating: 5
  },
  {
    text: "The team's expertise in social media marketing helped us grow from 5K to 200K followers in just 8 months. Their content strategy is brilliant!",
    name: "Michael Brown",
    role: "Marketing Director, FitLife",
    rating: 5
  },
  {
    text: "Our ROI has tripled since partnering with CreativeHub. They don't just create campaigns, they create results. Highly recommend!",
    name: "Sarah Davis",
    role: "Founder, EcoStore",
    rating: 5
  },
  {
    text: "The video production quality is outstanding! The team captured our brand essence perfectly and the campaign videos drove incredible engagement.",
    name: "David Wilson",
    role: "CMO, Urban Café",
    rating: 5
  },
  {
    text: "Professional, creative, and results-driven. CreativeHub helped us completely rebrand and reposition in the market. Game changer!",
    name: "Emily Chen",
    role: "CEO, InnovateTech",
    rating: 5
  },
  {
    text: "Their content creation is top-notch. Every piece aligns perfectly with our brand voice and resonates with our audience. Worth every penny!",
    name: "Robert Martinez",
    role: "Director, ContentPro",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Client Success Stories</Title>
            <Subtitle>
              Don't just take our word for it. See what our clients have to say
              about their experience working with us.
            </Subtitle>
          </Container>
        </HeroSection>

        <TestimonialsSection>
          <Container>
            <Grid>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index}>
                  <Rating>{'⭐'.repeat(testimonial.rating)}</Rating>
                  <TestimonialText>"{testimonial.text}"</TestimonialText>
                  <ClientInfo>
                    <ClientAvatar>
                      [Photo]
                    </ClientAvatar>
                    <ClientDetails>
                      <ClientName>{testimonial.name}</ClientName>
                      <ClientRole>{testimonial.role}</ClientRole>
                    </ClientDetails>
                  </ClientInfo>
                </TestimonialCard>
              ))}
            </Grid>

            <StatsSection>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>
                Results That Speak for Themselves
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: '0.9', color: 'white' }}>
                Our client success is our success
              </p>
              <StatsGrid>
                <StatBox>
                  <StatNumber>98%</StatNumber>
                  <StatLabel>Client Satisfaction Rate</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>150+</StatNumber>
                  <StatLabel>Happy Clients</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>350%</StatNumber>
                  <StatLabel>Average ROI Increase</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>5+ years</StatNumber>
                  <StatLabel>Average Client Relationship</StatLabel>
                </StatBox>
              </StatsGrid>
            </StatsSection>

            <CTASection>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a2e' }}>Ready to Join Our Success Stories?</h2>
              <p style={{ fontSize: '1.2rem', color: '#546e7a', marginBottom: '2rem' }}>
                Let's create your marketing success story together
              </p>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                background: 'linear-gradient(135deg, #2196F3 0%, #1976d2 100%)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                Get Started Today
              </Link>
            </CTASection>
          </Container>
        </TestimonialsSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
