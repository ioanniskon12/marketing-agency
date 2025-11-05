'use client';

import styled from 'styled-components';
import Link from 'next/link';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: #fafafa;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.6rem 1.3rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #667eea;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #0a0a0a;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(Link)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  border: 2px solid #f0f0f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin-bottom: 1.8rem;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0a0a0a;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.span`
  color: #667eea;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover &::after {
    transform: translateX(5px);
  }
`;

const services = [
  {
    icon: '🎯',
    title: 'Brand Strategy',
    description: 'Develop a powerful brand identity that resonates with your target audience and sets you apart.',
    link: '/services/brand-strategy'
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Engage your audience across all platforms with creative content and data-driven strategies.',
    link: '/services/social-media'
  },
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'Eye-catching designs that capture attention and communicate your message effectively.',
    link: '/services/creative-design'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Comprehensive campaigns that drive traffic, generate leads, and boost conversions.',
    link: '/services/digital-marketing'
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    description: 'Compelling content that tells your story and drives meaningful engagement.',
    link: '/services/content-creation'
  },
  {
    icon: '🎬',
    title: 'Video Production',
    description: 'Professional video content that brings your brand to life and captivates audiences.',
    link: '/services/video-production'
  }
];

export default function Services() {
  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <Badge>What We Do</Badge>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive marketing solutions tailored to your unique business needs
          </SectionSubtitle>
        </Header>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} href={service.link}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMore>Learn more</LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
}
