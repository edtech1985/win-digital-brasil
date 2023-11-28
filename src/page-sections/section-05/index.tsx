import {
  Container,
  Image,
  ImageContainer,
  Section,
  Text,
  TextContainer,
  Title,
} from "./styles";
import Franquias from "../../assets/franquias-dark.jpeg";

export const Section05 = () => {
  return (
    <>
      <Section>
        <Container>
          <TextContainer>
            <Title>O que você irá aprender:</Title>
            <Text>
              1. Fundamentos das Franquias: Compreenda os princípios essenciais
              para transformar seu negócio em uma franquia de sucesso.
            </Text>
            <Text>
              2. Desenvolvimento do Modelo de Negócio: Aprenda a criar um modelo
              escalável e replicável, pronto para ser replicado em várias
              localidades.
            </Text>
            <Text>
              3. Marketing e Branding: Descubra como fortalecer a marca da sua
              franquia e atrair franqueados ideais.
            </Text>
            <Text>
              4. Operações Eficientes: Otimize os processos operacionais para
              garantir a consistência e a qualidade em todas as unidades.
            </Text>
            <Text>
              5. Aspectos Legais e Contratuais: Navegue pelas complexidades
              legais e contratuais envolvidas na expansão do seu negócio.
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={Franquias} alt="Maiores Franquias" />
          </ImageContainer>
        </Container>
      </Section>
    </>
  );
};
