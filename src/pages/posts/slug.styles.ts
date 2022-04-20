import styled from "styled-components";

// img {
//   max-height: 40rem;
//   width: max-content;
//   margin-bottom: 2rem;
// }

export const Article = styled.article`
  margin-top: 4rem;
  font-size: calc(1.4rem);

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 5.2rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2.8rem;
      line-height: 3rem;
    }
    font-size: 1.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary[50]};
    text-decoration: none;
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
      height: 1.6rem;
      width: auto;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.body};
  }
`;
