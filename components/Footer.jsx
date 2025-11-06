'use client';

import styled from 'styled-components';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #2196F3;
  }
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
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    color: #2196F3;
    transform: translateX(4px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #2196F3;
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
    border-color: #2196F3;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2.5rem 0;
`;

const Copyright = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
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
