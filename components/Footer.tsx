'use client';

import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 2rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterText = styled.p`
  color: #999;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #999;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #667eea;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const Copyright = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>CreativeHub</FooterTitle>
            <FooterText>
              Transform your brand with our creative marketing solutions. We're dedicated to 
              helping businesses grow through innovative strategies.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">f</SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">𝕏</SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">📷</SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">in</SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLink href="#services">Brand Strategy</FooterLink>
            <FooterLink href="#services">Social Media Marketing</FooterLink>
            <FooterLink href="#services">Creative Design</FooterLink>
            <FooterLink href="#services">Digital Marketing</FooterLink>
            <FooterLink href="#services">Content Creation</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#services">Our Services</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterText>📧 hello@creativehub.com</FooterText>
            <FooterText>📞 +1 (555) 123-4567</FooterText>
            <FooterText>📍 123 Marketing Street, Digital City, DC 12345</FooterText>
          </FooterColumn>
        </FooterContent>
        
        <Divider />
        
        <Copyright>
          © {new Date().getFullYear()} CreativeHub. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
}
