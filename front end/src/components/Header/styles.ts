import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .3s ease-in-out;
  position: fixed;
  top: 0;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 2rem;
  z-index: 5;

  @media (max-width: 1024px) {
    height: 8rem;
    padding: 0 2rem;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 80%;

  @media (max-width: 1200px) {
    width: 100%;
  };


`;