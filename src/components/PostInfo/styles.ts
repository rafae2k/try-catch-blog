import styled from "styled-components";

export const Container = styled.div`
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
