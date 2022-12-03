import { StyledFormDatas } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formScheme";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Services/api.js";
import { Input } from "../../../Components/Input";
import { ButtonForm } from "../../../Components/ButtonForm";

export const FormRegister = () => {
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
      const response = await Api.post("users", formData);
      response.status === 201 && navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledFormDatas>
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="">Nome</label>
          <Input
            type="text"
            id="name"
            register={register("name")}
            placeholder="Digite aqui seu nome..."
          />
          {errors.name?.message && <small>{errors.name.message}</small>}

          <label htmlFor="">Email</label>
          <Input
            type="text"
            id="email"
            register={register("email")}
            placeholder="Digite aqui seu email..."
          />
          {errors.email?.message && <small>{errors.email.message}</small>}

          <label htmlFor="">Senha</label>
          <Input
            type="password"
            id="password"
            register={register("password")}
            placeholder="Crie sua senha"
          />
          {errors.password?.message && <small>{errors.password.message}</small>}

          <label htmlFor="">Confirmar Senha</label>
          <Input
            type="password"
            id="passwordConfirm"
            register={register("passwordConfirmation")}
            placeholder="Digite aqui novamente sua senha"
          />

          {errors.passwordConfirmation?.message && (
            <small>{errors.passwordConfirmation.message}</small>
          )}

          <label htmlFor="">Bio</label>
          <Input
            type="text"
            id="bio"
            register={register("bio")}
            placeholder="Fale sobre você"
          />
          {errors.bio?.message && <small>{errors.bio.message}</small>}

          <label htmlFor="">Contato</label>
          <Input
            type="text"
            id="contact"
            register={register("cantact")}
            placeholder="Opçãode de contato"
          />
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

          <ButtonForm name="Cadastrar"/>
        </form>
      </StyledFormDatas>
    </>
  );
};
