import styled from "styled-components";

export const CTAButton = styled.button`
  background-color: var(--background-brown);
  border-radius: 0.5rem;
  color: var(--text-sand);
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  text-decoration: none;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--background-brown-dark);
  }

  @media (max-width: 600px) {
    font-size: 1.25rem;
    height: auto;
  }
`;
