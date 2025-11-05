'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

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

const AccordionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const AccordionItem = styled.div<{ $isOpen: boolean; $gradient: string }>`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  margin-bottom: 1.5rem;
  border-radius: 20px;
  border: 2px solid ${props => props.$isOpen ? 'transparent' : 'rgba(226, 232, 240, 0.8)'};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$isOpen ? '0 20px 50px rgba(0, 102, 255, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)'};

  ${props => props.$isOpen && `
    background: ${props.$gradient};
  `}
`;

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 2rem 2.5rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
`;

const IconWrapper = styled.div<{ $isOpen: boolean }>`
  width: 70px;
  height: 70px;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.95)' : 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)'};
  backdrop-filter: blur(10px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$isOpen ? '0 8px 24px rgba(255, 255, 255, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.08)'};
  flex-shrink: 0;
`;

const HeaderContent = styled.div``;

const ServiceTitle = styled.h3<{ $isOpen: boolean }>`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.$isOpen ? '#ffffff' : '#0f172a'};
  margin-bottom: 0.3rem;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
`;

const ServiceShortDesc = styled.p<{ $isOpen: boolean }>`
  color: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.9)' : '#64748b'};
  font-size: 0.95rem;
  transition: color 0.3s ease;
`;

const ExpandIcon = styled.div<{ $isOpen: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 102, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.$isOpen ? '#ffffff' : '#0066FF'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContentInner = styled.div`
  padding: 0 2.5rem 2rem 2.5rem;
`;

const ServiceDescription = styled.p<{ $isOpen: boolean }>`
  color: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.95)' : '#475569'};
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const FeatureItem = styled.li<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.95)' : '#475569'};
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &::before {
    content: '✓';
    width: 24px;
    height: 24px;
    background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 102, 255, 0.15)'};
    color: ${props => props.$isOpen ? '#ffffff' : '#0066FF'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
    flex-shrink: 0;
  }
`;

const LearnMoreButton = styled(Link)<{ $isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.9rem 1.8rem;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.95)' : 'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)'};
  color: ${props => props.$isOpen ? '#0066FF' : '#ffffff'};
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const gradients = [
  'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)',
  'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
  'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
  'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
  'linear-gradient(135deg, #F59E0B 0%, #0066FF 100%)',
  'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
];

const services = [
  {
    icon: '🎯',
    title: 'Brand Strategy',
    shortDesc: 'Build a powerful brand identity',
    description: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from the competition. We help you define your brand essence and communicate it effectively.',
    features: ['Brand Identity Design', 'Market Research', 'Brand Positioning', 'Messaging Strategy'],
    link: '/services/brand-strategy'
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    shortDesc: 'Engage across all platforms',
    description: 'Engage your audience across all platforms with creative content and data-driven strategies. We create compelling social media campaigns that drive engagement and build community.',
    features: ['Content Strategy', 'Community Management', 'Social Analytics', 'Influencer Partnerships'],
    link: '/services/social-media'
  },
  {
    icon: '🎨',
    title: 'Creative Design',
    shortDesc: 'Eye-catching visual content',
    description: 'Eye-catching designs that capture attention and communicate your message effectively. Our creative team brings your brand vision to life with stunning visuals.',
    features: ['Graphic Design', 'UI/UX Design', 'Print Materials', 'Brand Assets'],
    link: '/services/creative-design'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    shortDesc: 'Drive traffic and conversions',
    description: 'Comprehensive campaigns that drive traffic, generate leads, and boost conversions. We use data-driven strategies to maximize your ROI across all digital channels.',
    features: ['SEO & SEM', 'PPC Campaigns', 'Email Marketing', 'Conversion Optimization'],
    link: '/services/digital-marketing'
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    shortDesc: 'Tell your story effectively',
    description: 'Compelling content that tells your story and drives meaningful engagement. From blog posts to case studies, we create content that resonates with your audience.',
    features: ['Copywriting', 'Blog Content', 'Case Studies', 'Content Strategy'],
    link: '/services/content-creation'
  },
  {
    icon: '🎬',
    title: 'Video Production',
    shortDesc: 'Bring your brand to life',
    description: 'Professional video content that brings your brand to life and captivates audiences. We handle everything from concept to final delivery.',
    features: ['Video Production', 'Motion Graphics', 'Video Editing', 'Animation'],
    link: '/services/video-production'
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        <AccordionContainer>
          {services.map((service, index) => (
            <AccordionItem
              key={index}
              $isOpen={openIndex === index}
              $gradient={gradients[index]}
            >
              <AccordionHeader
                $isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <HeaderLeft>
                  <IconWrapper $isOpen={openIndex === index}>
                    {service.icon}
                  </IconWrapper>
                  <HeaderContent>
                    <ServiceTitle $isOpen={openIndex === index}>
                      {service.title}
                    </ServiceTitle>
                    <ServiceShortDesc $isOpen={openIndex === index}>
                      {service.shortDesc}
                    </ServiceShortDesc>
                  </HeaderContent>
                </HeaderLeft>
                <ExpandIcon $isOpen={openIndex === index}>
                  ⌄
                </ExpandIcon>
              </AccordionHeader>

              <AccordionContent $isOpen={openIndex === index}>
                <ContentInner>
                  <ServiceDescription $isOpen={openIndex === index}>
                    {service.description}
                  </ServiceDescription>
                  <FeatureList>
                    {service.features.map((feature, fIndex) => (
                      <FeatureItem key={fIndex} $isOpen={openIndex === index}>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                  <LearnMoreButton
                    href={service.link}
                    $isOpen={openIndex === index}
                  >
                    Learn more
                  </LearnMoreButton>
                </ContentInner>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </Container>
    </ServicesSection>
  );
}
