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

const PricingSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const PricingCard = styled.div<{ $featured?: boolean }>`
  background: ${props => props.$featured ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.$featured ? 'white' : '#333'};
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${props => props.$featured ? 'none' : '2px solid #e0e0e0'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffd700;
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const PriceSubtext = styled.div`
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const Feature = styled.li`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid ${props => props.color === 'white' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'};

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓';
    width: 24px;
    height: 24px;
    background: ${props => props.color === 'white' ? 'rgba(255,255,255,0.2)' : '#667eea'};
    color: ${props => props.color === 'white' ? 'white' : 'white'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const CTAButton = styled(Link)<{ $variant?: string }>`
  display: block;
  width: 100%;
  padding: 1.2rem;
  background: ${props => props.$variant === 'white' ? 'white' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: ${props => props.$variant === 'white' ? '#667eea' : 'white'};
  text-align: center;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FAQSection = styled.div`
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: #f8f9fa;
  border-radius: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
`;

const Question = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #333;
`;

const Answer = styled.p`
  color: #666;
  line-height: 1.6;
`;

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Simple, Transparent Pricing</Title>
            <Subtitle>
              Choose the perfect plan for your business needs. All plans include 
              our core features and dedicated support.
            </Subtitle>
          </Container>
        </HeroSection>

        <PricingSection>
          <Container>
            <PricingGrid>
              <PricingCard>
                <PlanName>Starter</PlanName>
                <Price>$2,999<span style={{ fontSize: '1.2rem', fontWeight: '400' }}>/mo</span></Price>
                <PriceSubtext>Perfect for small businesses</PriceSubtext>
                <FeatureList>
                  <Feature>Social Media Management (2 platforms)</Feature>
                  <Feature>Content Creation (8 posts/month)</Feature>
                  <Feature>Basic Analytics & Reporting</Feature>
                  <Feature>Email Support</Feature>
                  <Feature>Monthly Strategy Call</Feature>
                </FeatureList>
                <CTAButton href="/contact">Get Started</CTAButton>
              </PricingCard>

              <PricingCard $featured>
                <Badge>Most Popular</Badge>
                <PlanName>Professional</PlanName>
                <Price>$5,999<span style={{ fontSize: '1.2rem', fontWeight: '400' }}>/mo</span></Price>
                <PriceSubtext>For growing businesses</PriceSubtext>
                <FeatureList>
                  <Feature color="white">Social Media Management (4 platforms)</Feature>
                  <Feature color="white">Content Creation (20 posts/month)</Feature>
                  <Feature color="white">Advanced Analytics & Reporting</Feature>
                  <Feature color="white">Priority Support</Feature>
                  <Feature color="white">Weekly Strategy Calls</Feature>
                  <Feature color="white">Paid Ad Management ($2K budget)</Feature>
                  <Feature color="white">SEO Optimization</Feature>
                </FeatureList>
                <CTAButton $variant="white" href="/contact">Get Started</CTAButton>
              </PricingCard>

              <PricingCard>
                <PlanName>Enterprise</PlanName>
                <Price>Custom</Price>
                <PriceSubtext>For large organizations</PriceSubtext>
                <FeatureList>
                  <Feature>Everything in Professional</Feature>
                  <Feature>Unlimited Social Platforms</Feature>
                  <Feature>Custom Content Volume</Feature>
                  <Feature>Dedicated Account Manager</Feature>
                  <Feature>24/7 Support</Feature>
                  <Feature>Custom Ad Budget Management</Feature>
                  <Feature>White-Label Reporting</Feature>
                  <Feature>Brand Strategy Consulting</Feature>
                </FeatureList>
                <CTAButton href="/contact">Contact Sales</CTAButton>
              </PricingCard>
            </PricingGrid>

            <FAQSection>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <FAQItem>
                  <Question>Can I change my plan later?</Question>
                  <Answer>
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect 
                    at the start of your next billing cycle.
                  </Answer>
                </FAQItem>
                <FAQItem>
                  <Question>What's included in the setup process?</Question>
                  <Answer>
                    We'll conduct a discovery session, audit your current marketing, develop a 
                    strategy, and create content calendars. Setup typically takes 2-3 weeks.
                  </Answer>
                </FAQItem>
                <FAQItem>
                  <Question>Do you offer custom packages?</Question>
                  <Answer>
                    Absolutely! If our standard plans don't fit your needs, we can create a 
                    custom package tailored to your specific requirements.
                  </Answer>
                </FAQItem>
                <FAQItem>
                  <Question>What payment methods do you accept?</Question>
                  <Answer>
                    We accept all major credit cards, ACH transfers, and wire transfers for 
                    annual contracts.
                  </Answer>
                </FAQItem>
                <FAQItem>
                  <Question>Is there a contract commitment?</Question>
                  <Answer>
                    Our standard plans are month-to-month with no long-term commitment. However, 
                    we offer discounts for 6-month and annual contracts.
                  </Answer>
                </FAQItem>
              </div>
            </FAQSection>
          </Container>
        </PricingSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
