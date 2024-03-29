import styled from "styled-components";

export const StyledContainerLogin = styled.div`
  width: 26%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;


  @media(max-width: 1024px){
    width: 50%;
  }
  @media(max-width:493px){
    width: 90%;
  }


`;

export const StyledDatasForm = styled.div`
  height: 540px;
  background-color: var(--grey-3);
  border-radius: var(--radius-1);
  margin-top: 20px;

  h3 {
    width: 100%;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    color: var(--grey-0);
   
  }
`;

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 22px 42px 22px;
  background-color: var(--grey-3);
  border-radius: var(--radius-1);

  small {
    width: 100%;
    text-align: center;
    color: var(--grey-1);
    margin-bottom: 42px;
  }
  a {
    justify-content: center;
    align-items: center;
    display: flex;
    text-decoration: none;
    height: 48px;
    border: none;
    border-radius: var(--radius-1);
    color: var(--grey-0);
    background-color: var(--grey-1);
    font-size: 16px;
  }
`;
