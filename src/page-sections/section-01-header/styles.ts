import styled from "styled-components";

interface HeaderProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hovered: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  background-color: var(--background-brown);
  padding: 2rem 0;
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
  justify-content: center;
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
  width: 25%;
  height: 100%;
  text-align: center;
`;

export const Logo = styled.h3`
  font-size: 1.5rem;
  color: var(--text-sand-light);
  font-weight: bold;
  margin: 0;

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
  }
`;

export const NavContainer = styled.nav`
  width: 75%;
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
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 15px;

  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin: 0 5px;
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
    font-size: 0.4rem;
  }

  @media (min-width: 401px) and (max-width: 550px) {
    font-size: 0.5rem;
  }

  @media (min-width: 551px) and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
