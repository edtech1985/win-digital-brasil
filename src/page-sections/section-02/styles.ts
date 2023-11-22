import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 6rem;
  max-width: 100vw;
  width: 100%;
  height: auto;

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
    padding: 0 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-light);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;

  @media screen and (max-width: 600px) {
font-size: 1.5rem;
  }
`;
