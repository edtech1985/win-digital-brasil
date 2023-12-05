import { YouTubeVideo } from "./YouTubeVideo";
import { Button, Heading, VStack } from "@chakra-ui/react";

export const Section02 = () => {
  return (
    <>
      <VStack
        p={{ base: "4", sm: "10" }}
        pt={{ base: "40", sm: "32" }}
        bg="var(--background-dark)"
      >
        <Heading color="var(--text-sand-light)">
          {" "}
          Transforme Seu Negócio em uma Franquia: Curso Online
        </Heading>

        <Heading>
          Seja bem-vindo ao curso que revolucionará sua abordagem empresarial,
          transformando seu negócio em uma franquia de sucesso.
        </Heading>
        <YouTubeVideo />

        <VStack p="8">
          <Button
            bg="black"
            border="2px solid"
            borderColor="yellow.400"
            borderRadius="lg"
            size="lg"
            _hover={{
              background: "black",
              color: "yellow.500",
              borderColor: "yellow.500",
              boxShadow: "0 0 0 2px #f6e05e",
            }}
          >
            Quero Escalar o Meu Negócio
          </Button>
        </VStack>
      </VStack>
    </>
  );
};
