import { HStack, Text, VStack, Link } from "@chakra-ui/react";

export const Section011Footer = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <VStack p="4" bg="black">
        <Text>
          Copyright © {getYear()} Win Digital Brasil | Todos os direitos
          reservados |<Link> Política de Privacidade </Link>|
          <Link> Termos de Uso </Link>
        </Text>
        <HStack>
          <Text>Desenvolvido por </Text>
          <Link href="www.edtech1985.com.br/projetos" isExternal>
            edtech1985
          </Link>
        </HStack>
      </VStack>
    </>
  );
};
