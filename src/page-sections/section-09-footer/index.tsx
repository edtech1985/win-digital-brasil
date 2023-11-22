import { Section, Title } from "./styles";

export const Section09Footer = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <Section>
        <Title>Escale Seu Negócio</Title>
        <p>
          Copyright © {getYear()} Win Digital Brasil | Todos os direitos
          reservados
        </p>
      </Section>
    </>
  );
};
