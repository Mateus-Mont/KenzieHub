import { FormLogin } from "./FormLogin/index";
import { StyledContainerLogin, StyledDatasForm, StyledRegister } from "./style";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header";

export const Login = () => {
  return (
    <>
      <StyledContainerLogin>
        <Header />
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
