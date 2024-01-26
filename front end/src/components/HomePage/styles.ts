import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 70%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  margin-top: 12rem;
  gap: 4rem;

  ::before {
    content: "";
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  };

  @media (max-width: 1200px) {
    width: 95%;
  };

  @media (max-width: 740px) {
    width: 95%;
    text-align:center;
    flex-direction: column;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 60%;
  height: 50rem;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  };

  p {
    margin: 1rem 0;
  };

  button {
    width: fit-content;
  };

  @media (max-width: 740px) {
    width: 100%;
    align-items: center;
    text-align: center;
  };
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 40%;

  img {
    object-fit: cover;
    width: 100%;
    height: 40rem;
    border-radius: ${({ theme }) => theme.border.radius};
  };

  @media (max-width: 1120px) {
    margin: 0 auto;
    };
  };

  @media (max-width: 740px) {
    display:none
  };
`