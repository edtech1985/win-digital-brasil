import { useState } from "react";
import { HeaderContainer, NavList, NavItem, NavLink } from "./styles";

export const Section01Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <HeaderContainer
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      hovered={hovered}
    >
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#section1">Sobre Nós</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section2">Nosso Curso</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section3">Franqueados</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section4">Investimento e Qualidade</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Contato</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Social Media</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};
