import styled from "styled-components";

export const StyledContainerDatasUser = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px var(--grey-2);
  div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    color: var(--grey-0);

    @media (max-width: 1200px) {
      width: 95%;
    }
    @media (max-width: 493px) {
      width: 90%;
    }

    h2 {
      font-size: 18px;
    }

    small {
      color: var(--grey-1);
    }
  }
`;
