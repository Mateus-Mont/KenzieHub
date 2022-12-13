import { DatasDashBoard } from "./DatasUserNav";
import { HeaderHome } from "./Header/index";
import { StyledContainerHeader, StyledContainerPage } from "./style";
import { AddWorks } from "./AddTechs";
import { TechnologiesUser } from "./TechnologiesUser/index";
import { useState } from "react";
import { Modal } from "../../Components/Modal";
import { useEffect } from "react";
import { Api } from "../../Services/api";
import { useContext } from "react";
import { DatasUserContext } from "../../Contexts";
import { Navigate } from "react-router-dom";

export const DashBoard = ({ navigate }) => {
  const [modal, setModal] = useState(false);
  const { user, loading } = useContext(DatasUserContext);
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

  if (loading) {
    return null;
  }

  return (
    <>
      {modal && <Modal setModal={setModal} />}

      {user ? (
        <div>
          <StyledContainerHeader>
            <HeaderHome navigate={navigate} />
          </StyledContainerHeader>

          <DatasDashBoard user={user} />
          <StyledContainerPage>
            <AddWorks setModal={setModal} />
            <TechnologiesUser />
          </StyledContainerPage>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
