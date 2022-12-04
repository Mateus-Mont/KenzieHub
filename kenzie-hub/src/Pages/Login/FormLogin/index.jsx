import { StyledFormLogin } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema.js";
import { Api } from "../../../Services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../Components/Input/index.jsx";
import { ButtonForm } from "../../../Components/ButtonForm/index.jsx";
import { useState } from "react";

export const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema()),
  });

  async function onSubmitFunction(formData) {
    try {
      const response = await Api.post("sessions", formData);
      response.status === 200 && navigate(`home`);

      window.localStorage.setItem("token", response.data.token);
     
    } catch (error) {
   
     console.log(error)
    }
  }

  return (
    <StyledFormLogin>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label htmlFor="">Email</label>
        <Input
          type="text"
          id="email"
          register={register("email")}
          placeholder="Digete seu email aqui..."
        />
        {errors.email?.message && <small>{errors.email.message}</small>}

        <label htmlFor="">Senha</label>
        <Input
          type="password"
          id="password"
          register={register("password")}
          placeholder="Digite sua senha aqui..."
        />
        {errors.password?.message && <small>{errors.password.message}</small>}

        <ButtonForm name="Entrar" />
      </form>
    </StyledFormLogin>
  );
};
