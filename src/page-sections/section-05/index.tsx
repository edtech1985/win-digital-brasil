import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const Section05 = () => {
  return (
    <>
      <VStack
        px={{ base: "4", sm: "10" }}
        pt={{ base: "4", sm: "10" }}
        pb={{ base: "2", sm: "2" }}
        gap={{ base: "6", sm: "0" }}
        bg="var(--background-dark)"
        color="var(--text-sand-light)"
      >
        <Heading>O que você irá aprender</Heading>
        <HStack gap="24" display={{ base: "block", sm: "flex" }}>
          <Box boxSize="md">
            <VStack px={{ base: "6", sm: "0" }}>
              <List spacing={4}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Fundamentos das Franquias: Compreenda os princípios essenciais
                  para transformar seu negócio em uma franquia de sucesso.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Desenvolvimento do Modelo de Negócio: Aprenda a criar um
                  modelo escalável e replicável, pronto para ser replicado em
                  várias localidades.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Marketing e Branding: Descubra como fortalecer a marca da sua
                  franquia e atrair franqueados ideais.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Operações Eficientes: Otimize os processos operacionais para
                  garantir a consistência e a qualidade em todas as unidades.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Aspectos Legais e Contratuais: Navegue pelas complexidades
                  legais e contratuais envolvidas na expansão do seu negócio.
                </ListItem>
              </List>
            </VStack>
          </Box>
        </HStack>
        <VStack pb="4">
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
            Quero Me Inscrever!
          </Button>
        </VStack>
      </VStack>
    </>
  );
};
