import { createContext } from "react";
import { Api } from "../Services/api";
import { useNavigate } from "react-router-dom";

export const DatasUserContext = createContext({});

export const Context = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function onSubmitFunction(formData) {
    try {
      const response = await Api.post("sessions", formData);
      response.status === 200 && navigate(`home/${response.data.user.name}`);

      window.localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <DatasUserContext.Provider value={{ token, onSubmitFunction }}>
        {children}
      </DatasUserContext.Provider>
    </>
  );
};
