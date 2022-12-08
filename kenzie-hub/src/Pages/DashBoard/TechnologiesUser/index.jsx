import { StyledContainerTechnologies } from "./style";
import { useContext } from "react";
import { DatasUserContext } from "../../../Contexts";
import Vector from "../../../assets/Vector.svg";
import { StyledCardTechnologies } from "./style";
import { StyledNivel } from "./style";

export const TechnologiesUser = ({techs}) => {





  return (
    <>
      <StyledContainerTechnologies>
        {techs.map((elem) => (
          <StyledCardTechnologies key={elem.id}>
            <h4>{elem.title}</h4>
            <StyledNivel>
              <p>{elem.status}</p>
              <img src={Vector} alt="" />
            </StyledNivel>
          </StyledCardTechnologies>
        ))}
      </StyledContainerTechnologies>
    </>
  );
};
