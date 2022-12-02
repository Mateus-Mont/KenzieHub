import { DatasDashBoard } from "../../Components/DatasDashBoard";
import { HeaderHome } from "./HeaderHome";
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
