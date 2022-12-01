import { StyledFormDatas } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formScheme";
import { useState } from "react";
import { Api } from "../../Services/api.js";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema()),
  });

  async function onSubmitFunction(formData) {
    try {
      const response = await Api.post("users", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledFormDatas>
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="">Nome</label>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          {errors.name?.message && <small>{errors.name.message}</small>}

          <label htmlFor="">Email</label>
          <input placeholder="Digite aqui seu  email" {...register("email")} />
          {errors.email?.message && <small>{errors.email.message}</small>}

          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui seua senha"
            {...register("password")}
          />
          {errors.password?.message && <small>{errors.password.message}</small>}
          <label htmlFor="">Confirmar Senha</label>
          <input
            placeholder="Digite aqui novamente sua senha"
            {...register("passwordConfirmation")}
          />
          {errors.passwordConfirmation?.message && (
            <small>{errors.passwordConfirmation.message}</small>
          )}

          <label htmlFor="">Bio</label>
          <input placeholder="Fale sobre você" {...register("bio")} />
          {errors.bio?.message && <small>{errors.bio.message}</small>}

          <label htmlFor="">Contato</label>
          <input placeholder="Opção de contato" {...register("contact")} />
          {errors.contact?.message && <small>{errors.contact.message}</small>}

          <label htmlFor="">Selecionar módulo</label>
          <select name="" id="" {...register("course_module")}>
            <option value="" hidden>
              Selecionar módulo
            </option>
            <option value="1° módulo">1° módulo</option>
            <option value="2° módulo">2° módulo</option>
            <option value="3° módulo">3° módulo</option>
            <option value="4° módulo">4° módulo</option>
            <option value="5° módulo">5° módulo</option>
            <option value="6° módulo">6° módulo</option>
          </select>
          {errors.course_module?.message && (
            <small>{errors.course_module.message}</small>
          )}

          <button type="submit">Cadastrar</button>
        </form>
      </StyledFormDatas>
    </>
  );
};
