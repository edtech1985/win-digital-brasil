import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--background-light);
`;

export const Container = styled.div`
  padding: 3rem;
  margin: 0 auto;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
  white-space: break-spaces;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 0 0 0;
`;
