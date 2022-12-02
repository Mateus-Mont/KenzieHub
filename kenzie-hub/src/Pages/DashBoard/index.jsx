import { DatasDashBoard } from "../../Components/DatasDashBoard";
import { HeaderHome } from "../../Components/DatasDashBoard/Header";
import { StyledContainerHeader,} from "./style";

export const DashBoard = () => {
  return (
    <>
      <StyledContainerHeader>
        <HeaderHome />
      </StyledContainerHeader>
      <DatasDashBoard />
    </>
  );
};
