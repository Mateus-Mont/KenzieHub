import * as yup from "yup";

export const formSchema = () => {
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha requer no mínino 6 caracteres"),
  });
  return schema;
};
