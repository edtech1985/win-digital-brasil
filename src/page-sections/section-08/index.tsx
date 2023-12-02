import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export const Section08 = () => {
  return (
    <Center bg="var(--background-light)" p="10">
      <VStack boxShadow="" border="5px solid black" borderRadius="2xl" p="20">
        <VStack
          boxShadow="dark-lg"
          py="20"
          px="20"
          rounded="2xl"
          bg="var(--white)"
          gap="6"
        >
          <Heading color="var(--text-dark)">Garantia de Satisfação</Heading>
          <Text color="var(--text-dark)">
            Estamos tão confiantes na qualidade do curso que oferecemos uma
            garantia de satisfação de 30 dias. Se não estiver satisfeito,
            devolvemos seu investimento.
          </Text>
          <Text color="var(--text-dark)">
            Aproveite esta Oportunidade Única para Alavancar Seu Negócio!
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
};
