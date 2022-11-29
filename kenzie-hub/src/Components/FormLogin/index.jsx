import { StyledFormLogin } from "./style.js";

export const FormLogin = () => {
  return (
    <>
      <StyledFormLogin action="">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Digite seu email aqui..." />
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite sua senha aqui..." />
        <button type="submit">Entrar</button>
      </StyledFormLogin>
    </>
  );
};
