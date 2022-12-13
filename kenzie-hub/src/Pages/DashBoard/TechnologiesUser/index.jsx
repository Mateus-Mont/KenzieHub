import { StyledContainerTechnologies } from "./style";
import Vector from "../../../assets/Vector.svg";
import { StyledCardTechnologies } from "./style";
import { StyledNivel } from "./style";
import { Api } from "../../../Services/api.js";
import { StyledDataTech } from "./style";
import { useContext } from "react";

import { TechsUserContext } from "../../../Contexts/contextTechs";

export const TechnologiesUser = () => {
  const { techs } = useContext(TechsUserContext);
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
