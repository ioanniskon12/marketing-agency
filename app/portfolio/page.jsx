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

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active ? 'linear-gradient(135deg, #2196F3 0%, #1976d2 100%)' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#546e7a'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PortfolioSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: #f5f5f5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: #e8eaf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: #546e7a;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectCategory = styled.div`
  color: #2196F3;
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
  color: #1a1a2e;
`;

const ProjectDescription = styled.p`
  color: #546e7a;
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
  color: #2196F3;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #546e7a;
`;

const projects = [
  {
    category: 'Brand Strategy',
    title: 'TechFlow Rebrand',
    description: 'Complete brand transformation for a leading tech startup, resulting in 300% increase in brand recognition.',
    engagement: '+300%',
    reach: '2M+'
  },
  {
    category: 'Social Media',
    title: 'FitLife Campaign',
    description: 'Social media strategy that grew followers from 5K to 250K in 6 months for a fitness brand.',
    engagement: '+5000%',
    reach: '10M+'
  },
  {
    category: 'Digital Marketing',
    title: 'E-commerce Growth',
    description: 'Comprehensive digital marketing campaign that increased online sales by 450% for a fashion retailer.',
    engagement: '+450%',
    reach: '5M+'
  },
  {
    category: 'Creative Design',
    title: 'Urban Café Visual Identity',
    description: 'Modern brand identity design that helped a local café chain expand to 15 locations.',
    engagement: '+200%',
    reach: '1M+'
  },
  {
    category: 'Content Creation',
    title: 'SaaS Content Hub',
    description: 'Content strategy and creation that positioned a SaaS company as industry thought leaders.',
    engagement: '+380%',
    reach: '3M+'
  },
  {
    category: 'Video Production',
    title: 'Product Launch Video',
    description: 'Award-winning product launch video that generated 5M views and drove record-breaking sales.',
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
                  <ProjectImage>
                    [Project Image]
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a2e' }}>Ready to Be Our Next Success Story?</h2>
              <p style={{ fontSize: '1.2rem', color: '#546e7a', marginBottom: '2rem' }}>
                Let's create something amazing together
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
