import { Section } from "./styles";

export const Section09Footer = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <Section>
        <h4>Escale Seu Negócio</h4>
        <p>
          Copyright © {getYear()} Win Digital Brasil | Todos os direitos
          reservados
        </p>
      </Section>
    </>
  );
};
