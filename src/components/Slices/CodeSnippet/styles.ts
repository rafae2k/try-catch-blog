import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;

  button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 2.4rem;
    height: 2.4rem;
    max-width: 2.4rem;
    max-height: 2.4rem;
    border: none;

    svg {
      fill: ${({ theme }) => theme.colors.primary[50]};
    }

    .icon {
      width: 100%;
      height: 100%;
    }
  }

  div {
    padding: 2rem;
    border-radius: 1rem;
  }
`;
