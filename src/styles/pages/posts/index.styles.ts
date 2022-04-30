import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;

  transition: all 0.2s ease;

  > p {
    cursor: pointer;
  }

  :hover {
    h1 {
      color: ${({ theme }) => theme.colors.primary[50]};
    }

    background-color: ${({ theme }) =>
      theme.title === "dark"
        ? theme.colors.neutral[90]
        : theme.colors.neutral[10]};
    border-radius: 2rem;
    transform: scale(1.01);
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.body};
  }
`;
