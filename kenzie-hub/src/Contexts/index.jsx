import { createContext, useEffect } from "react";
import { Api } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DatasUserContext = createContext({});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function onSubmitFunction(formData) {
    try {
      const response = await Api.post("sessions", formData);
      const { token, user: dataUser } = response.data;
      setUser(dataUser);
      response.status === 200 && navigate(`home/${response.data.user.name}`);

      window.localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getProfile() {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      
      } catch (erro) {
        console.log(erro);
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  return (
    <>
      <DatasUserContext.Provider value={{ user, loading, onSubmitFunction }}>
        {children}
      </DatasUserContext.Provider>
    </>
  );
};
