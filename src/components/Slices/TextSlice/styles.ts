import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.body};

  p {
    line-height: 2.5rem;
    overflow-wrap: break-word;
  }

  ol,
  li {
    li {
      margin-left: 4rem;
      padding-bottom: 1rem;
    }
  }
`;
export const Header = styled.div``;
