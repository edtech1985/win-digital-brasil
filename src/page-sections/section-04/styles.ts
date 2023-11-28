import styled from "styled-components";

export const Section = styled.section`
  max-width: 100vw;
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--background-light);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  text-align: center;
  margin: 1rem;
  padding: 0;
  white-space: break-spaces;
  padding-bottom: 0.75rem;

  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
  margin: 1rem;
  padding: 0;

  @media screen and (max-width: 600px) {
    margin: 0.5rem;
    padding-top: 0.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 601px) {
    margin: 1rem;
    padding-top: 0.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    margin: 1rem;
    padding-top: 0.5rem;
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 1rem;
    padding-top: 0.5rem;
    font-size: 1.75rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-dark);
  text-align: center;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const CTAContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }

  @media screen and (min-width: 600px) {
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem;
  }
`;
