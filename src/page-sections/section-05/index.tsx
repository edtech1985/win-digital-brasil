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
            <Title>
              Quando pensamos em franquia, é comum associarmos a grandes
              empresas, como McDonald's, Burger King, KFC e outras tantas.
            </Title>
            <Text>
              No entanto, nenhuma dessas empresas começou a franquear depois de
              se tornar grande. Na verdade, eram pequenas empresas que se
              tornaram grandes justamente por optarem pelo sistema de franquias.
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
