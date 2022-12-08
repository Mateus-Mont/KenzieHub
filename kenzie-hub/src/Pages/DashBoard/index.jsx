import { DatasDashBoard } from "./DatasUserNav";
import { HeaderHome } from "./Header/index";
import { StyledContainerHeader, StyledContainerPage } from "./style";
import { AddWorks } from "./AddTechs";
import { TechnologiesUser } from "./TechnologiesUser/index";
import { useContext, useState } from "react";
import { Modal } from "../../Components/Modal";
import { DatasUserContext } from "../../Contexts";
import { useEffect } from "react";
import{Api} from "../../Services/api"

export const DashBoard = () => {
  const [modal, setModal] = useState(false);
 
  const [user, setUser] = useState([]);
  const [techs,setTech]=useState([])
  console.log(user);

  const token = localStorage.getItem("token");

  useEffect(() => {
  
    async function getProfile() {
      try {
        const response = await Api.get(`profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setTech(response.data.techs)
        console.log(response);
      } catch (erro) {
        console.log(erro);
      }
    }
    getProfile()
  }, []);

  return (
    <>
      {modal && <Modal setModal={setModal} />}

      <StyledContainerHeader>
        <HeaderHome />
      </StyledContainerHeader>

      <DatasDashBoard  user={user}/>
      <StyledContainerPage>
        <AddWorks setModal={setModal} />
        <TechnologiesUser techs={techs} />
      </StyledContainerPage>
    </>
  );
};
