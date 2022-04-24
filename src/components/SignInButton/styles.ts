import styled from "styled-components";

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;

  height: 3rem;
  max-width: 20rem;
  padding: 2rem 1.5rem;

  border-radius: 3rem;
  border: none;

  background-color: #1f2729;
  cursor: pointer;
  transition: filter 0.2s ease-in;

  p {
    color: white;
    font-size: 1.6rem;
    text-overflow: ellipsis;
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  :hover {
    filter: brightness(120%);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
`;
