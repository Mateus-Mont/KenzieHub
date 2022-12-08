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

  @media(max-width: 1200px){
    padding: 10px;
}
`;

export const StyledCardTechnologies = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: var();
  background-color: var(--grey-4);
  align-items: center;
  padding: 20px;
  border-radius: var(--radius-1);

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
  img{
    cursor: pointer;
  }


`;
