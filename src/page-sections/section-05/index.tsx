import Franquias from "../../assets/franquias-dark.jpeg";
import {
  Box,
  HStack,
  Heading,
  Image,
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
        p="2"
        gap="10"
        bg="var(--background-dark)"
        color="var(--text-sand-light)"
      >
        <Heading>O que você irá aprender</Heading>
        <HStack gap="24">
          <Box boxSize="md">
            <VStack>
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
          <Box boxSize="md">
            <Image src={Franquias} alt="Maiores Franquias" />
          </Box>
        </HStack>
      </VStack>
    </>
  );
};
