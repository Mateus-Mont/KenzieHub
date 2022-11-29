import { FormRegister } from "../../Components/FormRegister";
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
            <h1>Kenzie Hub</h1>
            <button>Voltar</button>
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


