import { YouTubeVideo } from "./YouTubeVideo";
import {
  CTAContainer,
  Card,
  CardText,
  CardTitle,
  CardsContainer,
  Content,
  Section,
  Subtitle,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCommentsDollar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { CTAButton } from "../../components/cta-button";

export const Section03 = () => {
  return (
    <>
      <Section>
        <Content>
          <Title>
            Seja bem-vindo ao curso que revolucionará sua abordagem empresarial,
            transformando seu negócio em uma franquia de sucesso.
          </Title>
          <CTAContainer>
            <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
          </CTAContainer>
          <YouTubeVideo />

          <Subtitle>Por que este curso é essencial para você?</Subtitle>
          <CardsContainer>
            <Card>
              <FontAwesomeIcon
                icon={faTrophy}
                bounce
                size="xl"
                style={{ color: "#000" }}
              />
              <CardTitle>Experiência Comprovada</CardTitle>
              <CardText>
                Minha trajetória no mundo das franquias deu origem a estratégias
                eficazes, testadas e comprovadas.
              </CardText>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faCommentsDollar}
                beat
                size="xl"
                style={{ color: "#000" }}
              />
              <CardTitle>Resultados Tangíveis</CardTitle>
              <CardText>
                Aprenda a replicar seu modelo de negócio de forma consistente,
                expandindo e multiplicando seus lucros.
              </CardText>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faBook}
                bounce
                size="xl"
                style={{ color: "#000" }}
              />
              <CardTitle>Acesso a Conhecimento Exclusivo</CardTitle>
              <CardText>
                Desvende segredos, estratégias e táticas que só os grandes
                empresários de franquias conhecem.
              </CardText>
            </Card>
          </CardsContainer>
          <CTAContainer>
            <CTAButton>Quero Me Inscrever!</CTAButton>
          </CTAContainer>
        </Content>
      </Section>
    </>
  );
};
