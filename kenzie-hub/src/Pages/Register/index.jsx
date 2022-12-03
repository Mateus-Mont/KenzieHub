import { Link } from "react-router-dom";
import { FormRegister } from "./FormRegister";
import { Header } from "../../Components/Header";
import {
  StyledContainer,
  StyledCenterContent,
  StyledContainerForm,
  StyledMenu,
} from "./style";

 export const Register = () => {
  return (
    <>
      <StyledContainer>
        <StyledCenterContent>
          <StyledMenu>
           <Header/>
            <Link to={"/"}>Voltar</Link>
          </StyledMenu>
          <StyledContainerForm>
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa</p>
            <FormRegister />
          </StyledContainerForm>
        </StyledCenterContent>
      </StyledContainer>
    </>
  );
};


