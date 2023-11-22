import styled from "styled-components";

export const Section = styled.section`
  max-width: 100vw;
  width: 100%;
  height: auto;
  padding: 2rem;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--background-light);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
  white-space: break-spaces;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
`;

export const CTAContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
