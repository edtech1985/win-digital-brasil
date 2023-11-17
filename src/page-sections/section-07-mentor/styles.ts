import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 0 0;
  margin: 0 0 0 0;

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

export const Container = styled.div`
  padding: 0 0 0 0;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 40vw;
`;
export const Image = styled.img`
  width: 100%;
`;
