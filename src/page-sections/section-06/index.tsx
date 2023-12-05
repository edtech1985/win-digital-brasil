import {
  Heading,
  Highlight,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

export const Section06 = () => {
  return (
    <>
      <VStack py={{ base: "0", sm: "16" }} bg="var(--background-light)">
        <Card bg="var(--background-dark)" p={{ base: "2", sm: "10" }}>
          <CardHeader>
            <Heading>Bônus Exclusivos</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4" gap="4">
              <VStack gap="6">
                <Highlight
                  query={["Sessões de Mentoria"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "var(--sand-light)",
                    fontSize: "xl",
                  }}
                >
                  Sessões de Mentoria
                </Highlight>
                <Text>
                  Participe de sessões ao vivo para esclarecer dúvidas e receber
                  orientação personalizada.
                </Text>
              </VStack>

              <VStack gap="6">
                <Highlight
                  query={["Material de Apoio"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "var(--sand-light)",
                    fontSize: "xl",
                  }}
                >
                  Material de Apoio
                </Highlight>
                <Text>
                  Tenha acesso a recursos adicionais, checklists e modelos para
                  facilitar a implementação das estratégias aprendidas.
                </Text>
              </VStack>
            </Stack>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
};
