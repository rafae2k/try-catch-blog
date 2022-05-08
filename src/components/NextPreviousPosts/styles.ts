import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  div {
    cursor: pointer;
    width: clamp(20rem, 20rem, 70rem);
    font-size: 2rem;
    transition: all 1s ease-in;
    h3 {
      color: ${({ theme }) => theme.colors.primary[50]};
      padding-bottom: 2rem;
    }

    p {
      font-size: 1.8rem;
    }

    :hover {
      div > p {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary[50]};
      }
    }
  }
`;
