import { StyledContainerDatasUser } from "./style";
import { useEffect, useState } from "react";
import { Api } from "../../../Services/api";

export const DatasDashBoard = () => {
  async function getProfile() {
    try {
      const response = await Api.get(`profile`, {
          
      });

     
    } catch (erro) {
      console.log(erro);
    }
  }
  getProfile();

  return (
    <>
      <StyledContainerDatasUser>
        <div>
          <h2>Olá, Samuel Leão</h2>
          <small>Primeiro módulo </small>
        </div>
      </StyledContainerDatasUser>
    </>
  );
};
