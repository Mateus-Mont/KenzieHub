import styled from "styled-components";

export const StyledFormDatas = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 10px 18px 34px 18px;
    color: var(--grey-1);
    font-size: 13px;
    gap: 15px;

    padding-bottom: 40px;

    select {
      height: 48px;
      border-radius: var(--radius-1);
      padding-left: 10px;
      outline: none;
      background-color: var(--grey-2);
      border: none;
      color: var(--grey-0);
    }

    button {
      height: 48px;
      border: none;
      border-radius: var(--radius-1);
      color: var(--grey-0);
      background-color: var(--color-primary);
      font-size: 16px;
    }

    small {
      color: #b91b1b;
      font-size: 13px;
     
    }
  }
`;
