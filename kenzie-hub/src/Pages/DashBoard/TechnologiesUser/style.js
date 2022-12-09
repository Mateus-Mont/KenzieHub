import styled from "styled-components";

export const StyledContainerTechnologies = styled.ul`
  background-color: var(--gry-2-opc);
  height: 100%;
  margin-top: 20px;
  padding: 30px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-1);
  width: 100%;

  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const StyledCardTechnologies = styled.li`
  display: flex;

  background-color: var();
  background-color: var(--grey-4);
  align-items: center;
  padding: 20px;
  border-radius: var(--radius-1);
  gap: 10px;

  :hover {
    background-color: var(--grey-2);
  }

  h4 {
    color: var(--grey-0);
  }

  img {
    background-color: var(--grey-4);
  }
`;

export const StyledNivel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  p {
    color: var(--grey-1);
  }
  img {
    cursor: pointer;
  }
`;

export const StyledDataTech = styled.div`
  color: var(--grey-1);

  width: 98%;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  p {
    font-size: 14px;
  }

  @media (max-width: 427px) {
    h4 {
      width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
