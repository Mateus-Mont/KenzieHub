import { StyledFormLogin } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema.js";
import { Api } from "../../Services/api.js";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema()),
  });

  async function onSubmitFunction(formData) {
    try{
      const response = await Api.post("sessions",formData)
      console.log(response)
      response.status === 200 && navigate("home")
    }
    catch (error){
      console.log(error)
    }
  }

  return (
    <StyledFormLogin>
      <form  onSubmit={handleSubmit(onSubmitFunction)}>
        <label htmlFor="">Email</label>
        <input placeholder="Digite seu email aqui..." {...register("email")} />
        {errors.email?.message && <small>{errors.email.message}</small>}

        <label htmlFor="">Senha</label>
        <input type="password"
          placeholder="Digite sua senha aqui..."
          {...register("password")}
        />
        {errors.password?.message && <small>{errors.password.message}</small>}

        <button type="submit">Entrar</button>
      </form>
    </StyledFormLogin>
  );
};
