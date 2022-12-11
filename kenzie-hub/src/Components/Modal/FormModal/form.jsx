
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../../Services/api.js";
import { ButtonForm } from "../../ButtonForm";
import { Input } from "../../Input";
import { formSchema } from "./schema";

export const FormAddTechs = ({ setModal }) => {

  const token  = localStorage.getItem("token")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema()) });

  async function addTech(formData) {
   
    try {
      const response = await Api.post("users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response && setModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(addTech)}>
      <label htmlFor="">Nome</label>
      <Input register={register("title")} placeholder="Nome da tecnologia..." />
      {errors.title?.message && <small>{errors.title.message}</small>}
      <label htmlFor="">Selecionar status</label>
      <select name="" id="" {...register("status")}>
        <option value="" hidden>
          Selecione status
        </option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      {errors.status?.message && <small>{errors.status.message}</small>}
      <ButtonForm name="Cadastrar Tecnologia" />
    </form>
  );
};
