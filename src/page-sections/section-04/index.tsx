import { CTAButton } from "../../components/cta-button";
import { CTAContainer, Section, Subtitle, Text, Title } from "./styles";

export const Section04 = () => {
  return (
    <>
      <Section>
        <Title>Por que este curso é essencial para você?</Title>

        <Text>
          - Experiência Comprovada: Minha trajetória no mundo das franquias deu
          origem a estratégias eficazes, testadas e comprovadas.
        </Text>
        <Text>
          - Resultados Tangíveis: Aprenda a replicar seu modelo de negócio de
          forma consistente, expandindo e multiplicando seus lucros.
        </Text>
        <Text>
          - Acesso a Conhecimento Exclusivo: Desvende segredos, estratégias e
          táticas que só os grandes empresários de franquias conhecem.
        </Text>

        <CTAContainer>
          <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};
