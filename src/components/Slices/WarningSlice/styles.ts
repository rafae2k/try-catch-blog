import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.body};

  background-color: #fffbeb;
  border-left: 1rem solid #fbbf24;
  padding: 2rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.neutral[80]};

  p {
    line-height: 2.5rem;
    overflow-wrap: break-word;
  }

  ul {
    list-style-type: disc;
  }

  li {
    margin-left: 4rem;
    padding-bottom: 1rem;
  }
`;
export const Header = styled.div``;
