import { useState } from "react";
import {
  HeaderContainer,
  NavList,
  NavItem,
  NavLink,
  NavContainer,
} from "./styles";
import { Button, Center, HStack, Heading } from "@chakra-ui/react";

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
      <HStack w="full" justify="space-between">
        <Center>
          <Heading>Marcos Junior</Heading>
        </Center>
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
        <Center>
          <a
            href="https://pay.kiwify.com.br/ZInfIgl?fbclid=PAAabEGDsjugCFqbdV06Hqs6Hp-UAChtQN-979GIbD5UEs_rVwRVZZgX69qMY_aem_AY-dkehKaYl5xmlT2pQnv8kt5YHqC0gW__Leg9ObndcW09l2FzQOQpc8dzMYRAAWi9Y"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Inscreva-se</Button>
          </a>
        </Center>
      </HStack>
    </HeaderContainer>
  );
};
