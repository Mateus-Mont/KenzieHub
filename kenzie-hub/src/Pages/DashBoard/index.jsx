import { DatasDashBoard } from "./DatasUserNav";
import { HeaderHome } from "./Header/index";
import { StyledContainerHeader, StyledContainerPage } from "./style";
import { AddWorks } from "./AddTechs";
import { TechnologiesUser } from "./TechnologiesUser/index";
import { useState } from "react";
import { Modal } from "../../Components/Modal";
import { useEffect } from "react";
import { Api } from "../../Services/api";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);

  const [user, setUser] = useState([]);
  const [techs, setTech] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setTech([...response.data.techs]);
      
      } catch (erro) {
        console.log(erro);
      }
    }
    getProfile();
  }, [techs]);

  return (
    <>
    {modal && <Modal setModal={setModal} />}

      <StyledContainerHeader>
        <HeaderHome />
      </StyledContainerHeader>

      <DatasDashBoard user={user} />
      <StyledContainerPage>
        <AddWorks setModal={setModal} />
        <TechnologiesUser techs={techs} />
      </StyledContainerPage>
    </>
  );
};
