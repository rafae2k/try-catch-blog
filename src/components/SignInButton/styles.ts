import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  height: 3rem;
  padding: 2rem 1.5rem;

  border-radius: 3rem;

  background-color: #1f2729;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  transition: filter 0.2s ease-in;

  :hover {
    filter: brightness(120%);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
