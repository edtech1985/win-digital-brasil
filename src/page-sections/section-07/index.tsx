import Mentor from "../../assets/mj.jpeg";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Section07 = () => {
  return (
    <>
      <HStack bg="var(--background-dark)">
        <VStack px="12">
          <Heading>O que os Alunos Dizem</Heading>
          <Text>
            "O curso Como Franquear Meu Negócio é um divisor de águas para quem
            quer expandir seu negócio. O Marcos Junior é um profissional
            extremamente qualificado e experiente, que compartilha seu
            conhecimento de forma clara e objetiva. Recomendo fortemente!"
          </Text>
          <Divider />
          <Text>
            "O curso Como Franquear Meu Negócio é um divisor de águas para quem
            quer expandir seu negócio. O Marcos Junior é um profissional
            extremamente qualificado e experiente, que compartilha seu
            conhecimento de forma clara e objetiva. Recomendo fortemente!"
          </Text>
          <Divider />
          <Text>
            "O curso Como Franquear Meu Negócio é um divisor de águas para quem
            quer expandir seu negócio. O Marcos Junior é um profissional
            extremamente qualificado e experiente, que compartilha seu
            conhecimento de forma clara e objetiva. Recomendo fortemente!"
          </Text>
          <Divider />
          <Text>
            "O curso Como Franquear Meu Negócio é um divisor de águas para quem
            quer expandir seu negócio. O Marcos Junior é um profissional
            extremamente qualificado e experiente, que compartilha seu
            conhecimento de forma clara e objetiva. Recomendo fortemente!"
          </Text>

          <Divider />

          <Box pt="8">
            <Button>
              Pronto para Transformar Seu Negócio? Inscreva-se Agora!
            </Button>
          </Box>
        </VStack>

        <Image src={Mentor} alt="Marcos Junior" />
      </HStack>
    </>
  );
};
