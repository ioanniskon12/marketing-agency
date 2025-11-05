'use client';

import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 800;
  color: #0a0a0a;
  text-decoration: none;
  letter-spacing: -0.02em;
  
  span {
    background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 80%;
    max-width: 400px;
    flex-direction: column;
    background: white;
    padding: 6rem 2rem 2rem;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #666;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #0a0a0a;
    background: #f5f5f5;
  }

  @media (max-width: 968px) {
    padding: 1rem 1.5rem;
    font-size: 1.05rem;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.button`
  color: #666;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: inherit;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: #0a0a0a;
    background: #f5f5f5;
  }

  &::after {
    content: '⌄';
    font-size: 1.2rem;
  }

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    font-size: 1.05rem;
  }
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 220px;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 968px) {
    position: static;
    box-shadow: none;
    border: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: ${props => props.$isOpen ? 'block' : 'none'};
    padding-left: 1rem;
    margin-top: 0.5rem;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  color: #666;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    background: #f8f8f8;
    color: #667eea;
  }
`;

const CTAButton = styled(Link)`
  padding: 0.7rem 1.8rem;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 968px) {
    margin-top: 1rem;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #0a0a0a;
  z-index: 1001;
  padding: 0.5rem;

  @media (max-width: 968px) {
    display: block;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.$isOpen ? '1' : '0'};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo href="/">Creative<span>Hub</span></Logo>
          <NavLinks $isOpen={isOpen}>
            <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            
            <DropdownWrapper 
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <DropdownTrigger onClick={() => setServicesOpen(!servicesOpen)}>
                Services
              </DropdownTrigger>
              <DropdownMenu $isOpen={servicesOpen}>
                <DropdownLink href="/services/brand-strategy" onClick={() => setIsOpen(false)}>Brand Strategy</DropdownLink>
                <DropdownLink href="/services/social-media" onClick={() => setIsOpen(false)}>Social Media</DropdownLink>
                <DropdownLink href="/services/creative-design" onClick={() => setIsOpen(false)}>Creative Design</DropdownLink>
                <DropdownLink href="/services/digital-marketing" onClick={() => setIsOpen(false)}>Digital Marketing</DropdownLink>
                <DropdownLink href="/services/content-creation" onClick={() => setIsOpen(false)}>Content Creation</DropdownLink>
                <DropdownLink href="/services/video-production" onClick={() => setIsOpen(false)}>Video Production</DropdownLink>
              </DropdownMenu>
            </DropdownWrapper>
            
            <NavLink href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
            <NavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
            <CTAButton href="/contact" onClick={() => setIsOpen(false)}>Get Started</CTAButton>
          </NavLinks>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </MenuButton>
        </NavContainer>
      </Nav>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
}
