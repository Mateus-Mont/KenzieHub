import { DatasDashBoard } from "../../Components/DatasDashBoard";
import {
  
  StyledContainerHeader,
  StyledNavUser,
} from "./style";

export const DashBoard = () => {
  return (
    <>
      <StyledContainerHeader>
        <StyledNavUser>
          <h2>Kenzie Hub</h2>
          <button>Sair</button>
        </StyledNavUser>
      </StyledContainerHeader>

      <DatasDashBoard/>
    </>
  );
};
