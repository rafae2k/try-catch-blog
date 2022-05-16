import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 6rem;

  div {
    cursor: pointer;
    width: clamp(20rem, 20rem, 70rem);
    font-size: 2rem;

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

export const NextPrevContainer = styled.div`
  padding: 2rem;
  transition: all 0.2s ease-in;

  :hover {
    background-color: ${({ theme }) =>
      theme.title === "dark"
        ? theme.colors.neutral[90]
        : theme.colors.neutral[10]};
    border-radius: 2rem;
    transform: scale(1.01);
  }
`;
