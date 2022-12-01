import { FormLogin } from "../../Components/FormLogin";
import { StyledContainerLogin, StyledDatasForm, StyledRegister } from "./style";
import {Link} from "react-router-dom"

export const Login = () => {
  return (
    <>
      <StyledContainerLogin>
        <h1>Kenzie Hub</h1>
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
