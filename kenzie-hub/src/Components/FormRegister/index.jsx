import { StyledFormDatas } from "./style";

export const FormRegister = () => {
  return (
    <>
      <StyledFormDatas action="">
        <label htmlFor="">Nome</label>
        <input type="text" placeholder="Digite aqui  seu nome" />
        <label htmlFor="">Email</label>
        <input type="emai" placeholder="Digite aqui seu  email" />
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite aqui seua senha" />
        <label htmlFor="">Confirmar Senha</label>
        <input type="password" placeholder="Digite aqui novamente sua senha" />
        <label htmlFor="">Bio</label>
        <input type="text" placeholder="Fale sobre você" />
        <label htmlFor="">Contato</label>
        <input type="text" placeholder="Opção de contato" />
        <label htmlFor="">Selecionar módulo</label>
        <select name="" id="">
          <option value="" selected>
            Primeiro Módulo
          </option>
        </select>

        <button type="submit">Cadastrar</button>
      </StyledFormDatas>
    </>
  );
};
