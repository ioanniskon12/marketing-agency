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

const FilterSection = styled.div`
  padding: 3rem 2rem;
  background: white;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }
`;

const PortfolioSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: #f8f9fa;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
  }
`;

const ProjectImage = styled.div<{ $color: string }>`
  height: 250px;
  background: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectCategory = styled.div`
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectStats = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

const Stat = styled.div``;

const StatValue = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #999;
`;

const projects = [
  {
    category: 'Brand Strategy',
    title: 'TechFlow Rebrand',
    description: 'Complete brand transformation for a leading tech startup, resulting in 300% increase in brand recognition.',
    emoji: '🚀',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    engagement: '+300%',
    reach: '2M+'
  },
  {
    category: 'Social Media',
    title: 'FitLife Campaign',
    description: 'Social media strategy that grew followers from 5K to 250K in 6 months for a fitness brand.',
    emoji: '💪',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    engagement: '+5000%',
    reach: '10M+'
  },
  {
    category: 'Digital Marketing',
    title: 'E-commerce Growth',
    description: 'Comprehensive digital marketing campaign that increased online sales by 450% for a fashion retailer.',
    emoji: '🛍️',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    engagement: '+450%',
    reach: '5M+'
  },
  {
    category: 'Creative Design',
    title: 'Urban Café Visual Identity',
    description: 'Modern brand identity design that helped a local café chain expand to 15 locations.',
    emoji: '☕',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    engagement: '+200%',
    reach: '1M+'
  },
  {
    category: 'Content Creation',
    title: 'SaaS Content Hub',
    description: 'Content strategy and creation that positioned a SaaS company as industry thought leaders.',
    emoji: '📝',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    engagement: '+380%',
    reach: '3M+'
  },
  {
    category: 'Video Production',
    title: 'Product Launch Video',
    description: 'Award-winning product launch video that generated 5M views and drove record-breaking sales.',
    emoji: '🎬',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    engagement: '+600%',
    reach: '5M+'
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Our Portfolio</Title>
            <Subtitle>
              Discover how we've helped brands achieve remarkable results through 
              creative marketing solutions
            </Subtitle>
          </Container>
        </HeroSection>

        <FilterSection>
          <FilterButtons>
            <FilterButton $active={true}>All Projects</FilterButton>
            <FilterButton>Brand Strategy</FilterButton>
            <FilterButton>Social Media</FilterButton>
            <FilterButton>Digital Marketing</FilterButton>
            <FilterButton>Design</FilterButton>
            <FilterButton>Content</FilterButton>
            <FilterButton>Video</FilterButton>
          </FilterButtons>
        </FilterSection>

        <PortfolioSection>
          <Container>
            <Grid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectImage $color={project.color}>
                    {project.emoji}
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectStats>
                      <Stat>
                        <StatValue>{project.engagement}</StatValue>
                        <StatLabel>Engagement</StatLabel>
                      </Stat>
                      <Stat>
                        <StatValue>{project.reach}</StatValue>
                        <StatLabel>Reach</StatLabel>
                      </Stat>
                    </ProjectStats>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </Grid>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Be Our Next Success Story?</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Let's create something amazing together
              </p>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                Start Your Project
              </Link>
            </div>
          </Container>
        </PortfolioSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
