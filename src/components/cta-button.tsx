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
  white-space: nowrap;

  &:hover {
    background-color: var(--background-brown-dark);
  }

  @media (max-width: 400px) {
    font-size: 0.5rem;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 0.5rem;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
