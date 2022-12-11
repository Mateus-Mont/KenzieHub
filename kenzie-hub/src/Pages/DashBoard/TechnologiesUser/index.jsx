import { StyledContainerTechnologies } from "./style";
import Vector from "../../../assets/Vector.svg";
import { StyledCardTechnologies } from "./style";
import { StyledNivel } from "./style";
import { Api } from "../../../Services/api.js";
import { StyledDataTech } from "./style";
import { useState } from "react";

import { useEffect } from "react";

export const TechnologiesUser = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    async function getTechs() {
      const response = await Api.get(`profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTechs(response.data.techs);
    }
    getTechs();
  });

  const token = localStorage.getItem("token");

  async function removeTech(elem) {
    const response = await Api.delete("users/techs/" + elem.id, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  }

  return (
    <>
      <StyledContainerTechnologies>
        {techs.map((elem) => (
          <StyledCardTechnologies key={elem.id}>
            <StyledDataTech>
              <h4>{elem.title}</h4>
              <p>{elem.status}</p>
            </StyledDataTech>
            <StyledNivel>
              <img onClick={() => removeTech(elem)} src={Vector} alt="" />
            </StyledNivel>
          </StyledCardTechnologies>
        ))}
      </StyledContainerTechnologies>
    </>
  );
};
