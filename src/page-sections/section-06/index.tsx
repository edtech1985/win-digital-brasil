import { Container, Section, Text, TextContainer, Title } from "./styles";

export const Section06 = () => {
  return (
    <>
      <Section>
        <Container>
          <TextContainer>
            <Title>EXPANDIR POR UNIDADES PRÓPRIAS</Title>
            <Text>
              <ul>
                <li>
                  Precisa de muito capital acumulado para abrir novas unidades
                </li>
                <li>Você tem que fazer a gestão de cada uma das unidades</li>
                <li>Gasta muito a cada unidade aberta</li>
                <li>
                  Você é responsável pelos funcionários de todas as unidades
                </li>
                <li>Precisa cuidar 100% do operacional</li>
                <li>Pouco escalável</li>
                <li>Crescimento lento, pois há muitos custos</li>
              </ul>
            </Text>
          </TextContainer>
          <TextContainer>
            <Title>EXPANDIR POR FRANQUIAS</Title>
            <Text>
              <ul>
                <li>O franqueado é quem investe para abrir sua unidade</li>
                <li>O franqueado faz a gestão da própria unidade</li>
                <li>Recebe taxa de franquia a cada unidade aberta</li>
                <li>O franqueado é responsável pelos próprios funcionários</li>
                <li>Delega o operacional e foca na expansão</li>
                <li>Muito escalável</li>
                <li>Crescimento rápido com capital de terceiros</li>
              </ul>
            </Text>
          </TextContainer>
        </Container>
      </Section>
    </>
  );
};
