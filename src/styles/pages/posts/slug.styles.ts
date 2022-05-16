import styled from "styled-components";

export const ImgContainer = styled.div`
  max-width: 70rem;
  min-width: 100%;
  height: 45rem;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;

  img {
    min-height: 101% !important;
    min-width: 101% !important;
  }

  @media (max-width: 700px) {
    height: 25rem;
  }
`;

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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
`;
