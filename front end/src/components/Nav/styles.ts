import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.nav<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height:10rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };

  li {
    padding:0.5rem;
  }

  .basketIcon {
    max-width: 3.5rem;
  };

  .orderBtn {
    padding: 1rem;
    text-align:center;
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.colors.primary};
    background-size: cover;
    
  };

  @media (max-width: 1024px) {
    display: none;
  };

`;