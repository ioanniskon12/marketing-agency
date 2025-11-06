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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
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
  color: #0f172a;
  text-decoration: none;
  letter-spacing: -0.03em;
  transition: all 0.2s ease;

  span {
    background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #475569;
  font-weight: 600;
  padding: 0.7rem 1.3rem;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 1.3rem;
    right: 1.3rem;
    height: 2px;
    background: linear-gradient(90deg, #0066FF, #6366F1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #0066FF;
    background: rgba(0, 102, 255, 0.06);

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 968px) {
    padding: 1rem 1.5rem;
    font-size: 1.05rem;

    &::after {
      display: none;
    }
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.button`
  color: #475569;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: inherit;
  padding: 0.7rem 1.3rem;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;

  &::after {
    content: '⌄';
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 1.3rem;
    right: 1.3rem;
    height: 2px;
    background: linear-gradient(90deg, #0066FF, #6366F1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #0066FF;
    background: rgba(0, 102, 255, 0.06);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    font-size: 1.05rem;

    &::before {
      display: none;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 0.5rem;
  min-width: 240px;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(226, 232, 240, 0.8);

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
    backdrop-filter: none;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  color: #475569;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
    color: #0066FF;
    transform: translateX(4px);
  }
`;

const CTAButton = styled(Link)`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  color: white;
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 102, 255, 0.4);

    &::before {
      left: 100%;
    }
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
  color: #0f172a;
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
