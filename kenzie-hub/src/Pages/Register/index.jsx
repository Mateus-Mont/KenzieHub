import { Link } from "react-router-dom";
import { FormRegister } from "../../Components/FormRegister";
import { HeaderRegister } from "./HeaderRegister";
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
           <HeaderRegister/>
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


