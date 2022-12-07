import { StyledContainerDatasUser } from "./style";
import { useContext, useEffect, useState } from "react";
import { Api } from "../../../Services/api";
import { DatasUserContext } from "../../../Contexts";

export const DatasDashBoard = () => {


 const {dataUse}=useContext(DatasUserContext)
console.log(dataUse)



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
