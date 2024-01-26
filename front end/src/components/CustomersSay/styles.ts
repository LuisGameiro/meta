import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 70%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  padding-top: 4rem;
  /* background-color: rgba(251, 218, 187, .3); */

  ::before {
    content: '';
    width: 100%;
    height: 100vh;
    min-height: 59rem;
    margin-bottom: -4rem;
    position: absolute;
    background-color: rgba(251, 218, 187, .3);
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

export const Title = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-wrap: wrap;
  };

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  };
`;