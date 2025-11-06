'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: #ffffff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a2e;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  color: #546e7a;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.$currentSlide * 100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const CardContent = styled.div`
  padding: 3rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const ServiceDescription = styled.p`
  color: #546e7a;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$direction === 'prev' ? 'left: 0;' : 'right: 0;'}
  background: #ffffff;
  border: 2px solid #1a1a2e;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #1a1a2e;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #1a1a2e;
    color: #ffffff;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #2196F3;
  background: ${props => props.$active ? '#2196F3' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: #2196F3;
    transform: scale(1.2);
  }
`;

const services = [
  {
    icon: '🎯',
    title: 'Brand Strategy',
    description: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from the competition. We help you define your brand essence and communicate it effectively.',
    link: '/services/brand-strategy'
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Engage your audience across all platforms with creative content and data-driven strategies. We create compelling social media campaigns that drive engagement and build community.',
    link: '/services/social-media'
  },
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'Eye-catching designs that capture attention and communicate your message effectively. Our creative team brings your brand vision to life with stunning visuals.',
    link: '/services/creative-design'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Comprehensive campaigns that drive traffic, generate leads, and boost conversions. We use data-driven strategies to maximize your ROI across all digital channels.',
    link: '/services/digital-marketing'
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    description: 'Compelling content that tells your story and drives meaningful engagement. From blog posts to case studies, we create content that resonates with your audience.',
    link: '/services/content-creation'
  },
  {
    icon: '🎬',
    title: 'Video Production',
    description: 'Professional video content that brings your brand to life and captivates audiences. We handle everything from concept to final delivery.',
    link: '/services/video-production'
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, isPaused]);

  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive marketing solutions tailored to your unique business needs
          </SectionSubtitle>
        </Header>

        <CarouselWrapper
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <NavButton $direction="prev" onClick={prevSlide} aria-label="Previous slide">
            ‹
          </NavButton>

          <CarouselContainer>
            <CarouselTrack $currentSlide={currentSlide}>
              {services.map((service, index) => (
                <Slide key={index}>
                  <ServiceCard>
                    <ImagePlaceholder>
                      Service Image Placeholder
                    </ImagePlaceholder>
                    <CardContent>
                      <IconWrapper>{service.icon}</IconWrapper>
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDescription>{service.description}</ServiceDescription>
                      <LearnMoreButton href={service.link}>
                        Learn More
                      </LearnMoreButton>
                    </CardContent>
                  </ServiceCard>
                </Slide>
              ))}
            </CarouselTrack>
          </CarouselContainer>

          <NavButton $direction="next" onClick={nextSlide} aria-label="Next slide">
            ›
          </NavButton>
        </CarouselWrapper>

        <DotsContainer>
          {services.map((_, index) => (
            <Dot
              key={index}
              $active={currentSlide === index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </Container>
    </ServicesSection>
  );
}
