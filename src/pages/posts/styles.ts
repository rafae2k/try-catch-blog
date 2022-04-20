import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  > p {
    cursor: pointer;
  }

  :hover {
    h1 {
      color: ${({ theme }) => theme.colors.primary[50]};
    }
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary[50]};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.body};
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.neutral[50]};

    p,
    time {
      color: ${({ theme }) => theme.colors.neutral[50]};
      font-size: 1.4rem;
    }

    svg {
      height: 2rem;
      width: auto;
    }
  }
`;
