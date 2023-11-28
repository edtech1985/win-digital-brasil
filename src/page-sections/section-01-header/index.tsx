import { useState } from "react";
import {
  HeaderContainer,
  NavList,
  NavItem,
  NavLink,
  LogoContainer,
  Logo,
  NavContainer,
  CTAContainer,
} from "./styles";
import { CTAButton } from "../../components/cta-button";

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
      <LogoContainer>
        <Logo>Logo</Logo>
      </LogoContainer>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLink href="#section1">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section2">Curso</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section4">Bônus</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Depoimentos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Contato</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <CTAContainer>
        <CTAButton>Inscreva-se</CTAButton>
      </CTAContainer>
    </HeaderContainer>
  );
};
