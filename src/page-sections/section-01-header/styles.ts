import styled from "styled-components";

interface HeaderProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hovered: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  background-color: var(--background-brown);
  padding: 1rem;
  width: 100%;
  max-width: 100vw;
  height: auto;
  display: flex;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 1.5s, opacity 1.5s;
  z-index: 1000;
  opacity: ${(props) => (props.hovered ? 1 : 0.4)};
  justify-content: space-between;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 400px) {
    padding: 1rem 0;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    padding: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const LogoContainer = styled.div`
  width: auto;
  height: 100%;
  text-align: center;
  background-color: yellow;
  padding: 1rem;
`;

export const Logo = styled.h3`
  font-size: 1.75rem;
  color: var(--text-sand-light);
  font-weight: bold;
  margin: 0;
  background-color: red;

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const NavContainer = styled.nav`
  padding: 1rem;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;

  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 15px;

  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    margin: 0;
  }

  @media (min-width: 400px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--text-sand-light);
  font-weight: bold;
  font-size: 1rem;

  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--text-sand-dark);
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;

export const CTAContainer = styled.div`
  width: auto;
  height: 100%;
  text-align: center;
  background-color: yellow;
  padding: 0.5rem 1rem;
`;
