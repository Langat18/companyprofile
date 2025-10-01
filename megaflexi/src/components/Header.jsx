import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'goober';
import { theme } from '../styles/theme';

const HeaderContainer = styled('header')`
  background: ${theme.colors.background};
  box-shadow: ${theme.shadows.md};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const NavLinks = styled('div')`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem 2rem;
    box-shadow: ${theme.shadows.lg};
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.lightBg};
  }
  
  &.active {
    color: ${theme.colors.primary};
    background: ${theme.colors.lightBg};
  }
`;

const MobileToggle = styled('button')`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const ContactButton = styled(Link)`
  background: ${theme.colors.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={closeMenu}>
          MegaFlexi HR
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" className={isActive('/')} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={isActive('/about')} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className={isActive('/services')} onClick={closeMenu}>
            Services
          </NavLink>
          <ContactButton to="/contact" onClick={closeMenu}>
            Contact Us
          </ContactButton>
        </NavLinks>
        
        <MobileToggle onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </MobileToggle>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;