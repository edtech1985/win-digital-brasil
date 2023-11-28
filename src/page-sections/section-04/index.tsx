import { CTAButton } from "../../components/cta-button";
import { CTAContainer, Section, Subtitle, Text, Title } from "./styles";

export const Section04 = () => {
  return (
    <>
      <Section>
        <Title>Por que este curso é essencial para você?</Title>
        <Subtitle>Experiência Comprovada</Subtitle>
        <Text>
          Minha trajetória no mundo das franquias deu origem a estratégias
          eficazes, testadas e comprovadas.
        </Text>
        <Subtitle>Resultados Tangíveis</Subtitle>
        <Text>
          Aprenda a replicar seu modelo de negócio de forma consistente,
          expandindo e multiplicando seus lucros.
        </Text>
        <Subtitle>Acesso a Conhecimento Exclusivo</Subtitle>
        <Text>
          Desvende segredos, estratégias e táticas que só os grandes empresários
          de franquias conhecem.
        </Text>

        <CTAContainer>
          <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};
