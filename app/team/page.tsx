'use client';

import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

const TeamSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const TeamCard = styled.div`
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Avatar = styled.div<{ $color: string }>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${props => props.$color};
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  ${TeamCard}:hover & {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MemberRole = styled.div`
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-3px);
  }
`;

const ValuesSection = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  border-radius: 20px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #333;
`;

const ValueText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: '15+ years in marketing strategy. Passionate about helping brands tell their stories.',
    emoji: '👩‍💼',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    bio: 'Award-winning designer with a eye for detail and love for minimalist aesthetics.',
    emoji: '👨‍🎨',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    name: 'Emma Williams',
    role: 'Head of Strategy',
    bio: 'Data-driven strategist who turns insights into actionable marketing plans.',
    emoji: '👩‍💻',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    name: 'David Martinez',
    role: 'Social Media Lead',
    bio: 'Social media guru who knows how to create viral content and engage communities.',
    emoji: '👨‍💼',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: 'Lisa Anderson',
    role: 'Content Manager',
    bio: 'Storyteller at heart. Creates compelling content that resonates with audiences.',
    emoji: '👩‍✍️',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  },
  {
    name: 'James Wilson',
    role: 'Video Producer',
    bio: 'Filmmaker who brings brand stories to life through powerful visual narratives.',
    emoji: '👨‍🎬',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
];

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Meet Our Team</Title>
            <Subtitle>
              A talented group of creatives, strategists, and marketers dedicated 
              to your success
            </Subtitle>
          </Container>
        </HeroSection>

        <TeamSection>
          <Container>
            <Grid>
              {team.map((member, index) => (
                <TeamCard key={index}>
                  <Avatar $color={member.color}>{member.emoji}</Avatar>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <MemberBio>{member.bio}</MemberBio>
                  <SocialLinks>
                    <SocialLink href="#">in</SocialLink>
                    <SocialLink href="#">𝕏</SocialLink>
                    <SocialLink href="#">✉</SocialLink>
                  </SocialLinks>
                </TeamCard>
              ))}
            </Grid>

            <ValuesSection>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>
                Our Core Values
              </h2>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
                The principles that guide everything we do
              </p>
              <ValuesGrid>
                <ValueCard>
                  <ValueIcon>✨</ValueIcon>
                  <ValueTitle>Creativity</ValueTitle>
                  <ValueText>
                    We push boundaries and think outside the box to deliver 
                    innovative solutions.
                  </ValueText>
                </ValueCard>
                <ValueCard>
                  <ValueIcon>🤝</ValueIcon>
                  <ValueTitle>Collaboration</ValueTitle>
                  <ValueText>
                    We work closely with our clients as partners, not just 
                    service providers.
                  </ValueText>
                </ValueCard>
                <ValueCard>
                  <ValueIcon>🎯</ValueIcon>
                  <ValueTitle>Results-Driven</ValueTitle>
                  <ValueText>
                    Every strategy and campaign is designed to deliver 
                    measurable results.
                  </ValueText>
                </ValueCard>
                <ValueCard>
                  <ValueIcon>💡</ValueIcon>
                  <ValueTitle>Innovation</ValueTitle>
                  <ValueText>
                    We stay ahead of trends and continuously evolve our 
                    approach.
                  </ValueText>
                </ValueCard>
              </ValuesGrid>
            </ValuesSection>
          </Container>
        </TeamSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
