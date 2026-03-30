import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'goober';
import { theme } from '../styles/theme';

const HeaderContainer = styled('header')`
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 16px rgba(0,0,0,0.08);
`;

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 80px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

/*
  LOGO IMAGE: Replace the Logo component's inner content with your logo image.
  Example:
  <Logo to="/">
    <img src="/logo.png" alt="TrippleMconsulting" style={{height:'44px'}} />
  </Logo>
  Recommended: PNG/SVG with transparent background, ~200×60px
*/
const Logo = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  color: ${theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.5px;
  white-space: nowrap;
  span { color: ${theme.colors.secondary}; font-weight: 400; font-size: 0.9rem; display: block; line-height: 1; }
`;

const NavLinks = styled('div')`
  display: flex;
  gap: 0;
  align-items: center;
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${p => p.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 1rem 2rem 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    gap: 0;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  font-size: 0.97rem;
  position: relative;
  transition: color 0.2s;
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 1.25rem;
    right: 1.25rem;
    height: 2px;
    background: ${theme.colors.secondary};
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  &:hover        { color: ${theme.colors.secondary}; }
  &:hover::after { transform: scaleX(1); }
  &.active       { color: ${theme.colors.secondary}; }
  &.active::after { transform: scaleX(1); }
`;

const AppointmentBtn = styled(Link)`
  background: ${theme.colors.accent};
  color: ${theme.colors.primary};
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.97rem;
  text-decoration: none;
  transition: all 0.25s;
  margin-left: 1.25rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &:hover { background: ${theme.colors.accentHover}; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(253,185,19,0.35); }
`;

const MobileToggle = styled('button')`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  @media (max-width: ${theme.breakpoints.mobile}) { display: block; }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setIsOpen(false); }, [location]);
  const active = path => location.pathname === path ? 'active' : '';

  return (
    <HeaderContainer>
      <Nav>
        {/* Replace Logo content with <img> once brand assets are available */}
        <Logo to="/">
          TrippleM
          <span>consulting</span>
        </Logo>

        <NavLinks $isOpen={isOpen}>
          <NavLink to="/"         className={active('/')}>Home</NavLink>
          <NavLink to="/about"    className={active('/about')}>About</NavLink>
          <NavLink to="/services" className={active('/services')}>Services</NavLink>
          <NavLink to="/contact"  className={active('/contact')}>Contact</NavLink>
        </NavLinks>

        <AppointmentBtn to="/contact">
          Get Appointment ↗
        </AppointmentBtn>

        <MobileToggle onClick={() => setIsOpen(o => !o)} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </MobileToggle>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;