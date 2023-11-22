import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--background-light);
  max-width: 100vw;
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  

  @media screen and (max-width: 600px) {
   width: 100%;
  }
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

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
  line-height: 1.25rem;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
