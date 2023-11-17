import { CTAButton } from "../../components/cta-button";
import {
  CTAContainer,
  Container,
  Image,
  ImageContainer,
  Section,
  TextContainer,
} from "./styles";
import Mentor from "../../assets/curso-como-franquear.jpg";

export const Section07Mentor = () => {
  return (
    <>
      <Section>
        <Container>
          <TextContainer>
            <h1>Como faturar 7 MILHÕES por mês com franquias</h1>
            <p>
              Se você é um empreendedor que sonha em faturar alto, mas não sabe
              como fazer isso, este curso é para você. Marcos Junior, o mentor
              desse curso, é um especialista em franquias que já faturou mais de
              7 milhões de reais com seu negócio. Em apenas 2 anos, Marcos
              Junior transformou sua pequena empresa em uma franquia de sucesso,
              com mais de 100 unidades espalhadas pelo Brasil.
            </p>
            <p>
              Neste curso, Marcos Junior vai te ensinar tudo o que você precisa
              saber para franquear seu negócio e alcançar o sucesso. Ele vai te
              mostrar: Como escolher o modelo de franquia ideal para o seu
              negócio Como estruturar seu negócio para ser franqueável Como
              encontrar e atrair investidores Como gerenciar uma franquia Se
              você está cansado de trabalhar duro e não ver resultados, este
              curso é a sua chance de mudar de vida. Com as estratégias de
              Marcos Junior, você pode faturar 7 milhões de reais por mês com
              franquias.
              <strong>Não perca essa oportunidade!</strong>
            </p>
          </TextContainer>
          <ImageContainer>
            <Image src={Mentor} alt="Maiores Franquias" />
          </ImageContainer>
        </Container>
        <CTAContainer>
          <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};
