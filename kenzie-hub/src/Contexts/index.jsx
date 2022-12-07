import { createContext, useState, useEffect } from "react";
import { Api } from "../Services/api";
import { useNavigate } from "react-router-dom";

export const DatasUserContext = createContext({});

export const Context = ({ children }) => {
  const [user,setUser]=useState(null)
  const [dataUse, setDatUse] = useState([]);
  const [techs, setTechs] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function onSubmitFunction(formData) {
    try {
      const response = await Api.post("sessions", formData);
      response.status === 200 &&  navigate("home");

      window.localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      console.log("error");
    }
    async function getProfile() {
      try {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDatUse(response.data);
        setTechs(response.data.techs);
        setUser(response.data)
      } catch (erro) {
        console.log(erro);
      }
    }
  }, []);
  return (
    <>
      <DatasUserContext.Provider
        value={{ dataUse, techs, token, onSubmitFunction }}
      >
        {children}
      </DatasUserContext.Provider>
    </>
  );
};
