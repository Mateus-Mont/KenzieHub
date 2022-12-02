import { FormLogin } from "../../Components/FormLogin";
import { StyledContainerLogin, StyledDatasForm, StyledRegister } from "./style";
import {Link} from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin/header";

export const Login = () => {
  return (
    <>
      <StyledContainerLogin>
       <HeaderLogin/>
        <StyledDatasForm>
          <h3>Login</h3>
          <FormLogin />
          <StyledRegister>
            <small>Ainda não possui uma conta?</small>

            <Link to={"register"}>Cadastre-se</Link>
          </StyledRegister>
        </StyledDatasForm>
      </StyledContainerLogin>
    </>
  );
};
