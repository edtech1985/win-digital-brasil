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
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 1.5s, opacity 1.5s;
  z-index: 1000;
  opacity: ${(props) => (props.hovered ? 1 : 0.4)};

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    padding: 1rem 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 15px;

  @media (max-width: 600px) {
    margin: 0 5px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--text-sand-light);
  font-weight: bold;
  font-size: 1rem;

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
