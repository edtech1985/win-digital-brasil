import { CTAButton } from "../../components/cta-button";
import { CTAContainer, Section, Subtitle, Text, Title } from "./styles";

export const Section04 = () => {
  return (
    <>
      <Section>
        <Title>Toda pequena empresa pode ser uma grande franquia.</Title>
        <Title>
          A Windigital Brasil é uma empresa de consultoria especializada em
          franquias.
        </Title>
        <Subtitle>
          Nós ajudamos pequenas empresas a se tornarem grandes franquias.
        </Subtitle>
        <Text>
          Você já imaginou abrir 10, 20 ou 50 unidades do seu negócio? Agora
          imagine o custo e o tempo necessários para abrir todas essas unidades
          por conta própria. É por isso que se você tem uma pequena empresa e
          deseja expandir, de forma rápida e sem precisar de muito capital
          próprio, franquear é o caminho.
        </Text>
        <CTAContainer>
          <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};
