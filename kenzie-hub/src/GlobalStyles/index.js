import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Noto+Serif+SC:wght@200&family=Nunito&family=Poppins:wght@100&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Inter', sans-serif;
    background-color: var(--grey-4);


}
input{
  
    height: 48px;
    border-radius: var(--radius-1);
    padding-left: 10px;
    outline: none;
    background-color: var(--grey-2);
    border: none;
    color: var(--grey-0);
 }
 button{
    font-family: 'Inter', sans-serif;
    cursor: pointer;
 }


:root{
    --color-primary:#FF577f;
    --color-primary-focus:#FF427f;
    --color-primary-negative:#59323F;

    --grey-4:#121214;
    --grey-3:#212529;
    --grey-2:#343b41;
    --grey-1:#868e96;
    --grey-0:#f8f9fa;

    --sucess:#3fe864;
    --negative:#e83f5b;

    --radius-1:4px;
}


`;
