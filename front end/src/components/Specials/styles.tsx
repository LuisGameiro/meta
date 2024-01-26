import styled from "styled-components";
import {HTMLAttributes} from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 70%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const Top = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 20rem;
  }

  @media (max-width: 840px) {
    flex-direction: column;

    h1 {
      text-align: center;
    }
  }
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }
`;
