import { CTAButton } from "../../components/cta-button";
import {
  CTAContainer,
  Container,
  Image,
  ImageContainer,
  Section,
  Text,
  TextContainer,
  Title,
} from "./styles";
import Mentor from "../../assets/curso-como-franquear.jpg";

export const Section07 = () => {
  return (
    <>
      <Section>
        <Container>
          <TextContainer>
            <Title>O que os Alunos Dizem:</Title>
            <Text>
              "O curso Como Franquear Meu Negócio é um divisor de águas para
              quem quer expandir seu negócio. O Marcos Junior é um profissional
              extremamente qualificado e experiente, que compartilha seu
              conhecimento de forma clara e objetiva. Recomendo fortemente!"
            </Text>
            <Text>
              "O curso Como Franquear Meu Negócio é um divisor de águas para
              quem quer expandir seu negócio. O Marcos Junior é um profissional
              extremamente qualificado e experiente, que compartilha seu
              conhecimento de forma clara e objetiva. Recomendo fortemente!"
            </Text>
            <Text>
              "O curso Como Franquear Meu Negócio é um divisor de águas para
              quem quer expandir seu negócio. O Marcos Junior é um profissional
              extremamente qualificado e experiente, que compartilha seu
              conhecimento de forma clara e objetiva. Recomendo fortemente!"
            </Text>
            <Text>
              "O curso Como Franquear Meu Negócio é um divisor de águas para
              quem quer expandir seu negócio. O Marcos Junior é um profissional
              extremamente qualificado e experiente, que compartilha seu
              conhecimento de forma clara e objetiva. Recomendo fortemente!"
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={Mentor} alt="Maiores Franquias" />
          </ImageContainer>
        </Container>
        <CTAContainer>
          <CTAButton>
            Pronto para Transformar Seu Negócio? Inscreva-se Agora!
          </CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};
