import { StyledContainerDatasUser } from "./style";
import { useEffect, useState } from "react";
import { Api } from "../../../Services/api";

export const DatasDashBoard = () => {
  const [dataUse, setDatUse] = useState([]);

  useEffect(() => {
    async function getProfile() {
      const token = localStorage.getItem("token");
      try {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDatUse(response.data);
      } catch (erro) {
        console.log(erro);
      }
    }
    getProfile();
  }, []);

  return (
    <>
      <StyledContainerDatasUser>
        <div>
          <h2>Olá, {dataUse.name}</h2>
          <small>{dataUse.course_module} </small>
        </div>
      </StyledContainerDatasUser>
    </>
  );
};
