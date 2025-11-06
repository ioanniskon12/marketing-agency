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
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
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

const BlogSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 102, 255, 0.25);
  }
`;

const ArticleImage = styled.div`
  height: 220px;
  background: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #475569;
`;

const Category = styled.span`
  color: #0066FF;
  font-weight: 600;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0f172a;
  line-height: 1.3;
`;

const ArticleExcerpt = styled.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.span`
  color: #0066FF;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  ${ArticleCard}:hover &::after {
    transform: translateX(5px);
  }
`;

const articles = [
  {
    title: '10 Social Media Trends to Watch in 2025',
    category: 'Social Media',
    date: 'Nov 1, 2025',
    readTime: '5 min read',
    excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape digital marketing in the coming year.',
    emoji: '📱',
    color: 'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)'
  },
  {
    title: 'The Ultimate Guide to Brand Positioning',
    category: 'Branding',
    date: 'Oct 28, 2025',
    readTime: '8 min read',
    excerpt: 'Learn how to position your brand effectively in a competitive market and stand out from the crowd.',
    emoji: '🎯',
    color: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)'
  },
  {
    title: 'How Video Marketing Drives Conversions',
    category: 'Video Marketing',
    date: 'Oct 25, 2025',
    readTime: '6 min read',
    excerpt: 'Discover the power of video content and how it can dramatically increase your conversion rates.',
    emoji: '🎬',
    color: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)'
  },
  {
    title: 'Content Marketing ROI: Measuring Success',
    category: 'Content Marketing',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    excerpt: 'Learn how to measure and maximize the return on investment from your content marketing efforts.',
    emoji: '📊',
    color: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)'
  },
  {
    title: 'SEO Best Practices for 2025',
    category: 'SEO',
    date: 'Oct 15, 2025',
    readTime: '10 min read',
    excerpt: 'Master the latest SEO techniques to improve your search rankings and drive organic traffic.',
    emoji: '🔍',
    color: 'linear-gradient(135deg, #6366F1 0%, #0066FF 100%)'
  },
  {
    title: 'Building an Authentic Brand Voice',
    category: 'Branding',
    date: 'Oct 10, 2025',
    readTime: '5 min read',
    excerpt: 'Create a unique brand voice that resonates with your audience and builds lasting connections.',
    emoji: '🎤',
    color: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Marketing Insights</Title>
            <Subtitle>
              Expert tips, strategies, and insights to help you master modern marketing
            </Subtitle>
          </Container>
        </HeroSection>

        <BlogSection>
          <Container>
            <Grid>
              {articles.map((article, index) => (
                <ArticleCard key={index}>
                  <ArticleImage $color={article.color}>
                    {article.emoji}
                  </ArticleImage>
                  <ArticleContent>
                    <ArticleMeta>
                      <Category>{article.category}</Category>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </ArticleMeta>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                    <ReadMore>Read More</ReadMore>
                  </ArticleContent>
                </ArticleCard>
              ))}
            </Grid>

            <div style={{ textAlign: 'center', marginTop: '5rem', padding: '4rem 2rem', background: '#f8f9fa', borderRadius: '24px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0f172a' }}>Want Marketing Tips in Your Inbox?</h2>
              <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2rem' }}>
                Subscribe to our newsletter for weekly marketing insights
              </p>
              <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: '1',
                    minWidth: '250px',
                    padding: '1rem 1.5rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '32px',
                    fontSize: '1rem'
                  }}
                />
                <button style={{
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '32px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0, 102, 255, 0.3)'
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </Container>
        </BlogSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
