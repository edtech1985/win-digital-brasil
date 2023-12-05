import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export const Section08 = () => {
  return (
    <Center bg="var(--background-light)" p={{ base: "6", sm: "10" }}>
      <VStack
        boxShadow=""
        border="5px solid black"
        borderRadius="2xl"
        p={{ base: "2", sm: "10" }}
      >
        <VStack
          boxShadow="dark-lg"
          py={{ base: "6", sm: "12" }}
          px={{ base: "10", sm: "20" }}
          rounded="2xl"
          bg="var(--white)"
          gap={{ base: "4", sm: "6" }}
        >
          <Heading color="var(--text-dark)" size={{ base: "lg", sm: "xl" }}>
            Garantia de Satisfação
          </Heading>
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
