import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCommentsDollar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Section03 = () => {
  return (
    <>
      <VStack p={{ base: "4", sm: "0" }}>
        <VStack w="full" py="8" px="8" bg="var(--text-sand-dark)">
          <Heading as="h3" color="var(--text-dark)">
            Por que este curso é essencial para você?
          </Heading>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(250px, 3fr))"
          >
            <Card
              size="lg"
              overflow="hidden"
              align="center"
              bg="black"
              border="3px solid"
              borderColor="yellow.400"
            >
              <CardHeader style={{ height: "135px" }}>
                <Heading as="h4" fontSize="22px">
                  Experiência Comprovada
                </Heading>
              </CardHeader>
              <FontAwesomeIcon
                icon={faTrophy}
                bounce
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <CardBody>
                <Text>
                  Minha trajetória no mundo das franquias deu origem a
                  estratégias eficazes, testadas e comprovadas.
                </Text>
              </CardBody>
            </Card>
            <Card
              size="lg"
              overflow="hidden"
              bg="black"
              border="3px solid"
              borderColor="yellow.400"
            >
              <CardHeader style={{ height: "135px" }}>
                <Heading as="h4" fontSize="22px">
                  Resultados Tangíveis
                </Heading>
              </CardHeader>
              <FontAwesomeIcon
                icon={faCommentsDollar}
                beat
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <CardBody>
                <Text>
                  Aprenda a replicar seu modelo de negócio de forma consistente,
                  expandindo e multiplicando seus lucros.
                </Text>
              </CardBody>
            </Card>
            <Card
              size="lg"
              overflow="hidden"
              bg="black"
              border="3px solid"
              borderColor="yellow.400"
            >
              <CardHeader style={{ height: "135px" }}>
                <Heading as="h4" fontSize="22px">
                  Acesso a Conhecimento Exclusivo
                </Heading>
              </CardHeader>
              <FontAwesomeIcon
                icon={faBook}
                bounce
                size="xl"
                style={{ color: "var(--sand)" }}
              />
              <CardBody>
                <Text>
                  Desvende segredos, estratégias e táticas que só os grandes
                  empresários de franquias conhecem.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </VStack>
    </>
  );
};
