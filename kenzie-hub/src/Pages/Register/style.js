import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;

export const StyledCenterContent = styled.div`
  width: 26%;
  margin: 0 auto;
  padding-top: 50px;

  @media(max-width: 1024px){
    width: 50%;
  }
  @media(max-width:493px){
    width: 90%;
  }
`;

export const StyledMenu = styled.header`
  display: flex;
  justify-content: space-between;


  a {
    font-size: 12px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--grey-3);
    color: var(--grey-0);
    padding: 0px 16px 0px 16px;
    border-radius: var(--radius-1);
  }
`;

export const StyledContainerForm = styled.div`
  margin-top: 30px;
  width: 100%;
  border-radius: var(--radius-1);
  background-color: var(--grey-3);

  h3 {
    padding-top: 20px;
    color: var(--grey-0);
    width: 100%;
    text-align: center;
    font-weight: 700;
  }

  p {
    color: var(--grey-1);
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding-top: 20px;
  }
`;
