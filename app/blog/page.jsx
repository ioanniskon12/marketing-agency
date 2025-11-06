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

const ArticleImage = styled.div`
  height: 220px;
  background: #e8eaf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: #546e7a;
  border-bottom: 1px solid #e0e0e0;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #546e7a;
`;

const Category = styled.span`
  color: #2196F3;
  font-weight: 600;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a2e;
  line-height: 1.3;
`;

const ArticleExcerpt = styled.p`
  color: #546e7a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.span`
  color: #2196F3;
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
    excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape digital marketing in the coming year.'
  },
  {
    title: 'The Ultimate Guide to Brand Positioning',
    category: 'Branding',
    date: 'Oct 28, 2025',
    readTime: '8 min read',
    excerpt: 'Learn how to position your brand effectively in a competitive market and stand out from the crowd.'
  },
  {
    title: 'How Video Marketing Drives Conversions',
    category: 'Video Marketing',
    date: 'Oct 25, 2025',
    readTime: '6 min read',
    excerpt: 'Discover the power of video content and how it can dramatically increase your conversion rates.'
  },
  {
    title: 'Content Marketing ROI: Measuring Success',
    category: 'Content Marketing',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    excerpt: 'Learn how to measure and maximize the return on investment from your content marketing efforts.'
  },
  {
    title: 'SEO Best Practices for 2025',
    category: 'SEO',
    date: 'Oct 15, 2025',
    readTime: '10 min read',
    excerpt: 'Master the latest SEO techniques to improve your search rankings and drive organic traffic.'
  },
  {
    title: 'Building an Authentic Brand Voice',
    category: 'Branding',
    date: 'Oct 10, 2025',
    readTime: '5 min read',
    excerpt: 'Create a unique brand voice that resonates with your audience and builds lasting connections.'
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
                  <ArticleImage>
                    [Featured Image]
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

            <div style={{ textAlign: 'center', marginTop: '5rem', padding: '4rem 2rem', background: '#f5f5f5', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a2e' }}>Want Marketing Tips in Your Inbox?</h2>
              <p style={{ fontSize: '1.2rem', color: '#546e7a', marginBottom: '2rem' }}>
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
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
                <button style={{
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #2196F3 0%, #1976d2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
