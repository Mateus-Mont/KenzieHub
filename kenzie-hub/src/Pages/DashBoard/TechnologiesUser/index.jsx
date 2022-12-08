import { StyledContainerTechnologies } from "./style";
import { useContext } from "react";
import { DatasUserContext } from "../../../Contexts";
import Vector from "../../../assets/Vector.svg";
import { StyledCardTechnologies } from "./style";
import { StyledNivel } from "./style";
import { Api } from "../../../Services/api.js";

export const TechnologiesUser = ({ techs }) => {
  const token = localStorage.getItem("token")

  async function removeTech(elem) {
    const response = await Api.delete("users/techs/" + elem.id, {
      headers: { Authorization: `Bearer ${token}` },
    });

    

   return response
  }

  return (
    <>
      <StyledContainerTechnologies>
        {techs.map((elem) => (
          <StyledCardTechnologies key={elem.id}>
            <h4>{elem.title}</h4>
            <StyledNivel>
              <p>{elem.status}</p>
              <img onClick={() => removeTech(elem)} src={Vector} alt="" />
            </StyledNivel>
          </StyledCardTechnologies>
        ))}
      </StyledContainerTechnologies>
    </>
  );
};
