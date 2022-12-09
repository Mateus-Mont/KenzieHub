import styled from "styled-components";

export const StyledModalConteiner=styled.section`
padding: 20px;

position: fixed;
justify-content: center;
display: flex;
align-items: center;
height: 100%;
width: 100%;
background-color :rgba(5, 4, 6, 0.37);
`


export const StyledHeaderModal=styled.header`
display: flex;
justify-content: space-between;
padding: 15px;
background-color: var(--grey-2);
align-items: center;
border-radius: var(--radius-1) var(--radius-1) 0 0;

h4{
    color: var(--grey-0);
}

button{
    background-color: var(--grey-2);
    border: none;
    font-size: 17px;
    color: var(--grey-1);
}
`

export const StyledModalContent=styled.section`
width: 369px;
height: 342px;
border-radius: var(--radius-1);


form{
    padding: 15px;
    background-color: var(--gry-2-opc);
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 0 0  var(--radius-1) var(--radius-1);

    button{
        height: 48px;
        color: var(--grey-0);
        background-color: var(--color-primary);
        border: none;
        border-radius: var(--radius-1);
        font-size: 17px;
    }

    small{
        color: var(--color-primary);
        font-size: 12px;
        padding: 0;
    }


}
label{
    color: var(--grey-1);
    font-size: 12px;
}

select{
    height: 48px;
    border-radius: var(--radius-1);
    background-color: var(--grey-2);
    outline: none;
    border: none;
    color: var(--grey-0);
    padding-left: 5px;
}


`