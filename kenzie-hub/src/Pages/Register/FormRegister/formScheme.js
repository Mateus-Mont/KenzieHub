import * as yup from "yup";

export const formSchema = () => {
  const schema = yup.object().shape({

    name: yup
      .string()
      .required("Nome obrigatório")
      .max(200, "Esse campo pode ter no máximo 200 caracteres")
      .min(3, "Esse campo pode ter no minimo 3 caracteres"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha requer no mínino 6 caracteres"),

    passwordConfirmation: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password"), null], "A senha deve corresponder"),

    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
   
  });
  return schema;
};
