import { useContext } from "react";
import { DatasUserContext } from "../../Contexts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../Services/api.js";
import { ButtonForm } from "../ButtonForm";
import { Input } from "../Input";


export const FormAddTechs = ({ setModal }) => {
  const { token } = useContext(DatasUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  async function addTech(formData) {
    try {
      const response = await Api.post("users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(addTech)}>
      <label htmlFor="">Nome</label>
      <Input register={register("title")} placeholder="Nome da tecnologia..." />
      <label htmlFor="">Selecionar status</label>
      <select name="" id="" {...register("status")}>
        <option value="" hidden>
          Selecione status
        </option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <ButtonForm name="Cadastrar Tecnologia" />
    </form>
  );
};
