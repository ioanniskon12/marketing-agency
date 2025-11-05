'use client';

import styled from 'styled-components';
import Link from 'next/link';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
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
  padding: 0.7rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border: 2px solid rgba(0, 102, 255, 0.2);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #0066FF;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.15);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  color: #0f172a;
  letter-spacing: -0.03em;
`;

const SectionSubtitle = styled.p`
  color: #475569;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 400;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
`;

const gradients = [
  'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
  'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
  'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
  'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
  'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(0, 102, 255, 0.1) 100%)',
  'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
];

const hoverGradients = [
  'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)',
  'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
  'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
  'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
  'linear-gradient(135deg, #F59E0B 0%, #0066FF 100%)',
  'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
];

const ServiceCard = styled(Link)<{ $gradient: string; $hoverGradient: string }>`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 24px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$gradient};
    opacity: 1;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$hoverGradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: transparent;
    box-shadow: 0 20px 50px rgba(0, 102, 255, 0.2);

    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0f172a;
  letter-spacing: -0.02em;

  ${ServiceCard}:hover & {
    color: #ffffff;
  }
`;

const ServiceDescription = styled.p`
  color: #475569;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  ${ServiceCard}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const LearnMore = styled.span`
  color: #0066FF;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::after {
    content: '→';
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${ServiceCard}:hover & {
    color: #ffffff;

    &::after {
      transform: translateX(5px);
    }
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
            <ServiceCard
              key={index}
              href={service.link}
              $gradient={gradients[index]}
              $hoverGradient={hoverGradients[index]}
            >
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
