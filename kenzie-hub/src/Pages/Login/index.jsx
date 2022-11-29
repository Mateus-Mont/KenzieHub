import { FormLogin } from "../../Components/FormLogin";
import { StyledContainerLogin, StyledDatasForm, StyledRegister } from "./style";

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

            <button>Cadastre-se</button>
          </StyledRegister>
        </StyledDatasForm>
      </StyledContainerLogin>
    </>
  );
};
