import styled from "styled-components";

export const StyledContainerHeader = styled.div`
  width: 100%;
  border-bottom: solid 1px var(--grey-2);
`;

export const StyledNavUser = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  height: 72px;

  h2 {
    color: var(--color-primary);
    font-size: 17px;
  }

  button {
    background-color: var(--grey-3);
    border: none;
    color: var(--grey-0);
    padding: 7px 16px 7px 16px;
    border-radius: var(--radius-1);
  }
`;
