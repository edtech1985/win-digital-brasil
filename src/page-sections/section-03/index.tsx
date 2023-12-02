import { YouTubeVideo } from "./YouTubeVideo";
import { Card } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCommentsDollar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";

export const Section03 = () => {
  return (
    <>
      <VStack pt="32" bg="var(--background-dark)">
        <Heading color="var(--text-sand-light)">
          {" "}
          Transforme Seu Negócio em uma Franquia: Curso Online
        </Heading>

        <Heading>
          Seja bem-vindo ao curso que revolucionará sua abordagem empresarial,
          transformando seu negócio em uma franquia de sucesso.
        </Heading>
        <VStack p="8">
          <Button>Quero Escalar o Meu Negócio</Button>
        </VStack>
        <YouTubeVideo />

        <VStack w="full" py="8" bg="var(--background-gold)">
          <Heading as="h3">Por que este curso é essencial para você?</Heading>
          <HStack gap="8">
            <Card>
              <FontAwesomeIcon
                icon={faTrophy}
                bounce
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <Heading>Experiência Comprovada</Heading>
              <Text>
                Minha trajetória no mundo das franquias deu origem a estratégias
                eficazes, testadas e comprovadas.
              </Text>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faCommentsDollar}
                beat
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <Heading>Resultados Tangíveis</Heading>
              <Text>
                Aprenda a replicar seu modelo de negócio de forma consistente,
                expandindo e multiplicando seus lucros.
              </Text>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faBook}
                bounce
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <Heading>Acesso a Conhecimento Exclusivo</Heading>
              <Text>
                Desvende segredos, estratégias e táticas que só os grandes
                empresários de franquias conhecem.
              </Text>
            </Card>
          </HStack>
          <VStack p="8">
            <Button>Quero Me Inscrever!</Button>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};
