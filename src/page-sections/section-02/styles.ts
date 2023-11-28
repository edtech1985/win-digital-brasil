import styled from "styled-components";

export const Section = styled.section`
  padding: 1rem;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 6rem;
  max-width: 100vw;
  width: 100%;
  height: auto;

  @media (max-width: 400px) {
    margin-top: 7rem;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    margin-top: 8rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 8rem;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 6.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-light);
  text-align: center;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
