import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.footer<HTMLAttributes<HTMLElement>>`
  width: 95%;
  height: 45.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.white};

  ::before {
    content: "";
    width: 100%;
    height: 45.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;

  };

  @media (max-width: 1120px) {
    width: 90%;
  };


`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 940px) {
    flex-direction: column;
  };
`;

export const Copyright = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-align: center;

  a {
    text-decoration: underline;
    line-height: 150%;
  };
`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  width: 100%;
  object-fit: cover;
  border-radius: .5rem;

  @media (max-width: 1200) {
    display: none;
  };
`;

export const Column = styled.div<HTMLAttributes<HTMLDivElement>>`
  width:25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 7.7rem;
  width:20%;

  h4 {
    height: 4.32rem;
  };

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    li {
      list-style: none;
    };
  };
`;