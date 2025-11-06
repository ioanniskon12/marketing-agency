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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
  font-size: 1.5rem;
  font-weight: 900;
  color: #1a1a2e;
  text-decoration: none;
  letter-spacing: -0.03em;
  transition: all 0.2s ease;

  span {
    color: #2196F3;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const NavLinks = styled.div`
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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    padding: 6rem 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #1a1a2e;
  font-weight: 600;
  padding: 0.7rem 1.3rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;

  &:hover {
    color: #2196F3;
    background: rgba(33, 150, 243, 0.08);
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
  color: #1a1a2e;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: inherit;
  padding: 0.7rem 1.3rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;

  &::after {
    content: '⌄';
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #2196F3;
    background: rgba(33, 150, 243, 0.08);

    &::after {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    font-size: 1.05rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  min-width: 240px;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);

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
    background: rgba(248, 250, 252, 0.8);
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  color: #546e7a;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    background: rgba(33, 150, 243, 0.08);
    color: #2196F3;
    transform: translateX(4px);
  }
`;

const CTAButton = styled(Link)`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 700;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
  }

  &:active {
    transform: translateY(0);
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
  color: #1a1a2e;
  z-index: 1001;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 968px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
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
