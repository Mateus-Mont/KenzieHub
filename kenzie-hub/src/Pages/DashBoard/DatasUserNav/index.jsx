import { StyledContainerDatasUser } from "./style";
import { useContext, useEffect, useState } from "react";
import { Api } from "../../../Services/api";
import { DatasUserContext } from "../../../Contexts";

export const DatasDashBoard = ({user}) => {
  


  return (
    <>
      <StyledContainerDatasUser>
        <div>
          <h2>Olá, {user.name}</h2>
          <small>{user.course_module} </small>
        </div>
      </StyledContainerDatasUser>
    </>
  );
};
