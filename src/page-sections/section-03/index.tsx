import { YouTubeVideo } from "./YouTubeVideo";
import {
  CTAContainer,
  Card,
  CardText,
  CardsContainer,
  Content,
  Section,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faPhoneVolume,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { CTAButton } from "../../components/cta-button";

export const Section03 = () => {
  return (
    <>
      <Section>
        <Content>
          <Title>
            Como Transformar o Seu Negócio em Uma Franquia e Escalar o Seu
            Faturamento em 2024
          </Title>
          <CTAContainer>
            <CTAButton>Quero Escalar o Meu Negócio</CTAButton>
          </CTAContainer>
          <YouTubeVideo />

          <CardsContainer>
            <Card>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                shake
                size="xl"
                style={{ color: "#000" }}
              />
              <CardText>
                Compreensão abrangente do processo de leilão de imóveis
              </CardText>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faCommentsDollar}
                beat
                size="xl"
                style={{ color: "#000" }}
              />
              <CardText>
                Conhecimento sobre como pesquisar e avaliar imóveis antes do
                leilão
              </CardText>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faTrophy}
                bounce
                size="xl"
                style={{ color: "#000" }}
              />
              <CardText>
                Estratégias eficazes para fazer lances e aumentar suas chances
                de sucesso
              </CardText>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faTrophy}
                bounce
                size="xl"
                style={{ color: "#000" }}
              />
              <CardText>
                Orientações sobre como lidar com questões legais e contratuais
              </CardText>
            </Card>
          </CardsContainer>
        </Content>
      </Section>
    </>
  );
};
