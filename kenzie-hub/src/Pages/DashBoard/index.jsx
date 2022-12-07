import { DatasDashBoard } from "./DatasUserNav";
import { HeaderHome } from "./Header/index";
import { StyledContainerHeader, StyledContainerPage } from "./style";
import { AddWorks } from "./AddTechs";
import { TechnologiesUser } from "./TechnologiesUser/index";
import { useContext, useState } from "react";
import { Modal } from "../../Components/Modal";
import { DatasUserContext } from "../../Contexts";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);
  const { user } = useContext(DatasUserContext);

  return (
    <>
      {modal && <Modal setModal={setModal} />}

      <StyledContainerHeader>
        <HeaderHome />
      </StyledContainerHeader>

      <DatasDashBoard />
      <StyledContainerPage>
        <AddWorks setModal={setModal} />
        <TechnologiesUser />
      </StyledContainerPage>
    </>
  );
};
