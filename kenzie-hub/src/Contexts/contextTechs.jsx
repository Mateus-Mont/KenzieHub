import { useEffect,useState } from "react";
import { Api } from "../Services/api";
import { createContext } from "react";

export const TechsUserContext = createContext({});

export const TechsContext = ({ children }) => {
    const token = localStorage.getItem("token")
 

    const [techs, setTechs] = useState([]);


    useEffect(() => {
      async function getTechs() {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        setTechs(response.data.techs);
      }
      getTechs();
    },[techs]);

 

  return (
    <>
      <TechsUserContext.Provider value={{techs}}>
        {children}
      </TechsUserContext.Provider>
    </>
  );
};
