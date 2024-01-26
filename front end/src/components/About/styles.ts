import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 2rem;

  @media (max-width: 740px) {
    width: 95%;
    text-align:center;
    flex-direction: column;
  };

  @media (max-width: 1200px) {
    width: 95%;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    width: fit-content;
  };

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
    width: fit-content;
  };

  p {
    max-width: 28rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.primary};
  };

  @media (max-width: 1200px) {
    width: 100%;
  };
  @media (max-width: 740px) {
    width: 100%;
    align-items: center;
    text-align: center;
  };
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 30%;


  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 33.8rem;
  };

  img:first-of-type {
    left: -50%;
    top: 12rem;
    z-index: 2;
    /* border: 5px solid red; */
    position: absolute;
  };

  @media (max-width: 996px) {
    display: none;
  };
`;