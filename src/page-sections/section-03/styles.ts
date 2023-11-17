import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 0 0;
  margin: 0 0 0 0;

  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const Content = styled.div`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const CTAContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 15rem;
  height: 15rem;
  padding: 1rem;
  border-radius: 1rem;

  background-color: var(--background-light);
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
`;

export const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
`;
